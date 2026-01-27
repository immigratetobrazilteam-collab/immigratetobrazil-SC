
// Master JS for State: SC - Persona: European Settler
// Comprehensive, mobile-first animations using GSAP (CDN: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>)
// Draws from js_data.json for globals; animations match stereotype (e.g., bouncy for expressive, smooth for conservative)
// Best practices: DOMContentLoaded, element checks, reduced motion support, mobile detection for shorter durations

document.addEventListener('DOMContentLoaded', () => {
  // Load js_data.json for globals (async fetch for modularity)
  fetch('js/js_data.json')
    .then(response => response.json())
    .then(data => {
      const intensityMod = data.persona.visual_intensity === 'high' ? 1.2 : data.persona.visual_intensity === 'medium' ? 1.0 : 0.8;
      const isMobile = window.innerWidth < 768;
      const mobileMod = data.animation_customizations.mobile_mod;
      const durationMod = isMobile ? intensityMod * mobileMod : intensityMod;

      // Reduced motion check (best practice)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        return;  // Skip all animations
      }

      // General smooth scroll (vanilla JS, mobile-friendly)
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });

      // Section-specific animations (comprehensive, per role/ID)

  const sc_index_section_immigrate_to_santa_catarina = document.getElementById('sc-index-section-immigrate-to-santa-catarina');
  if (sc_index_section_immigrate_to_santa_catarina) {
    gsap.fromTo('#sc-index-section-immigrate-to-santa-catarina', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_index_form_immigrate_to_santa_catarina = document.getElementById('sc-index-form-immigrate-to-santa-catarina');
  if (sc_index_form_immigrate_to_santa_catarina) {
    gsap.from('#sc-index-form-immigrate-to-santa-catarina input, #sc-index-form-immigrate-to-santa-catarina textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_index_section_state_vibe = document.getElementById('sc-index-section-state-vibe');
  if (sc_index_section_state_vibe) {
    gsap.fromTo('#sc-index-section-state-vibe', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_index_section_quick_facts_snapshot = document.getElementById('sc-index-section-quick-facts-snapshot');
  if (sc_index_section_quick_facts_snapshot) {
    gsap.fromTo('#sc-index-section-quick-facts-snapshot', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_index_section_santa_catarina_map = document.getElementById('sc-index-section-santa-catarina-map');
  if (sc_index_section_santa_catarina_map) {
    gsap.fromTo('#sc-index-section-santa-catarina-map', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_index_section_cost_of_living_santa_catarina = document.getElementById('sc-index-section-cost-of-living-santa-catarina');
  if (sc_index_section_cost_of_living_santa_catarina) {
    gsap.fromTo('#sc-index-section-cost-of-living-santa-catarina', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_index_section_government_context = document.getElementById('sc-index-section-government-context');
  if (sc_index_section_government_context) {
    gsap.fromTo('#sc-index-section-government-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_index_hero_immigration_notes = document.getElementById('sc-index-hero-immigration-notes');
  if (sc_index_hero_immigration_notes) {
    gsap.fromTo('#sc-index-hero-immigration-notes', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_index_list_common_applicant_profiles = document.getElementById('sc-index-list-common-applicant-profiles');
  if (sc_index_list_common_applicant_profiles) {
    gsap.from('#sc-index-list-common-applicant-profiles li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_index_list_economic_drivers = document.getElementById('sc-index-list-economic-drivers');
  if (sc_index_list_economic_drivers) {
    gsap.from('#sc-index-list-economic-drivers li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_index_section_demographics = document.getElementById('sc-index-section-demographics');
  if (sc_index_section_demographics) {
    gsap.fromTo('#sc-index-section-demographics', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_index_section_regional_challenges = document.getElementById('sc-index-section-regional-challenges');
  if (sc_index_section_regional_challenges) {
    gsap.fromTo('#sc-index-section-regional-challenges', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_index_section_regional_opportunities = document.getElementById('sc-index-section-regional-opportunities');
  if (sc_index_section_regional_opportunities) {
    gsap.fromTo('#sc-index-section-regional-opportunities', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_index_section_culture_daily_life = document.getElementById('sc-index-section-culture-daily-life');
  if (sc_index_section_culture_daily_life) {
    gsap.fromTo('#sc-index-section-culture-daily-life', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_index_list_local_language_expressions = document.getElementById('sc-index-list-local-language-expressions');
  if (sc_index_list_local_language_expressions) {
    gsap.from('#sc-index-list-local-language-expressions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_index_list_food_cuisine = document.getElementById('sc-index-list-food-cuisine');
  if (sc_index_list_food_cuisine) {
    gsap.from('#sc-index-list-food-cuisine li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_index_list_festivals_traditions = document.getElementById('sc-index-list-festivals-traditions');
  if (sc_index_list_festivals_traditions) {
    gsap.from('#sc-index-list-festivals-traditions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_index_list_music_artistic_expression = document.getElementById('sc-index-list-music-artistic-expression');
  if (sc_index_list_music_artistic_expression) {
    gsap.from('#sc-index-list-music-artistic-expression li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_index_list_sports_recreation = document.getElementById('sc-index-list-sports-recreation');
  if (sc_index_list_sports_recreation) {
    gsap.from('#sc-index-list-sports-recreation li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_index_list_landmarks_historical_sites = document.getElementById('sc-index-list-landmarks-historical-sites');
  if (sc_index_list_landmarks_historical_sites) {
    gsap.from('#sc-index-list-landmarks-historical-sites li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_index_list_natural_features = document.getElementById('sc-index-list-natural-features');
  if (sc_index_list_natural_features) {
    gsap.from('#sc-index-list-natural-features li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_index_list_parks_protected_areas = document.getElementById('sc-index-list-parks-protected-areas');
  if (sc_index_list_parks_protected_areas) {
    gsap.from('#sc-index-list-parks-protected-areas li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_index_list_museums_cultural_institutions = document.getElementById('sc-index-list-museums-cultural-institutions');
  if (sc_index_list_museums_cultural_institutions) {
    gsap.from('#sc-index-list-museums-cultural-institutions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_index_section_image_gallery = document.getElementById('sc-index-section-image-gallery');
  if (sc_index_section_image_gallery) {
    gsap.fromTo('#sc-index-section-image-gallery', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_index_section_useful_government_links = document.getElementById('sc-index-section-useful-government-links');
  if (sc_index_section_useful_government_links) {
    gsap.fromTo('#sc-index-section-useful-government-links', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_index_hero_federal_police_immigration_links = document.getElementById('sc-index-hero-federal-police-immigration-links');
  if (sc_index_hero_federal_police_immigration_links) {
    gsap.fromTo('#sc-index-hero-federal-police-immigration-links', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_index_section_external_references = document.getElementById('sc-index-section-external-references');
  if (sc_index_section_external_references) {
    gsap.fromTo('#sc-index-section-external-references', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_index_list_immigration_services_overview = document.getElementById('sc-index-list-immigration-services-overview');
  if (sc_index_list_immigration_services_overview) {
    gsap.from('#sc-index-list-immigration-services-overview li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_index_section_why_immigrate_here = document.getElementById('sc-index-section-why-immigrate-here');
  if (sc_index_section_why_immigrate_here) {
    gsap.fromTo('#sc-index-section-why-immigrate-here', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_index_section_legal_guidance_disclaimers = document.getElementById('sc-index-section-legal-guidance-disclaimers');
  if (sc_index_section_legal_guidance_disclaimers) {
    gsap.fromTo('#sc-index-section-legal-guidance-disclaimers', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_index_list_travel_services = document.getElementById('sc-index-list-travel-services');
  if (sc_index_list_travel_services) {
    gsap.from('#sc-index-list-travel-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_index_list_how_the_process_works = document.getElementById('sc-index-list-how-the-process-works');
  if (sc_index_list_how_the_process_works) {
    gsap.from('#sc-index-list-how-the-process-works li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_index_section__frequently_asked_questions_about_living_in_santa_catarina_ = document.getElementById('sc-index-section--frequently-asked-questions-about-living-in-santa-catarina-');
  if (sc_index_section__frequently_asked_questions_about_living_in_santa_catarina_) {
    gsap.fromTo('#sc-index-section--frequently-asked-questions-about-living-in-santa-catarina-', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const contact_cta.html = document.getElementById('contact-cta.html');
  if (contact_cta.html) {
    gsap.fromTo('#contact-cta.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_contactcta_section_get_started_in_santa_catarina = document.getElementById('sc-contactcta-section-get-started-in-santa-catarina');
  if (sc_contactcta_section_get_started_in_santa_catarina) {
    gsap.fromTo('#sc-contactcta-section-get-started-in-santa-catarina', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const renouncing_citizenship.html = document.getElementById('renouncing-citizenship.html');
  if (renouncing_citizenship.html) {
    gsap.fromTo('#renouncing-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_renouncingcitizenship_form_renounce_brazilian_citizenship = document.getElementById('sc-renouncingcitizenship-form-renounce-brazilian-citizenship');
  if (sc_renouncingcitizenship_form_renounce_brazilian_citizenship) {
    gsap.from('#sc-renouncingcitizenship-form-renounce-brazilian-citizenship input, #sc-renouncingcitizenship-form-renounce-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_renouncingcitizenship_list_quick_facts = document.getElementById('sc-renouncingcitizenship-list-quick-facts');
  if (sc_renouncingcitizenship_list_quick_facts) {
    gsap.from('#sc-renouncingcitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_renouncingcitizenship_list_common_challenges_applicants_face = document.getElementById('sc-renouncingcitizenship-list-common-challenges-applicants-face');
  if (sc_renouncingcitizenship_list_common_challenges_applicants_face) {
    gsap.from('#sc-renouncingcitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_renouncingcitizenship_list_how_we_solve_these_challenges = document.getElementById('sc-renouncingcitizenship-list-how-we-solve-these-challenges');
  if (sc_renouncingcitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#sc-renouncingcitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_renouncingcitizenship_section_renunciation_overview = document.getElementById('sc-renouncingcitizenship-section-renunciation-overview');
  if (sc_renouncingcitizenship_section_renunciation_overview) {
    gsap.fromTo('#sc-renouncingcitizenship-section-renunciation-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_renouncingcitizenship_form_who_is_this_for = document.getElementById('sc-renouncingcitizenship-form-who-is-this-for');
  if (sc_renouncingcitizenship_form_who_is_this_for) {
    gsap.from('#sc-renouncingcitizenship-form-who-is-this-for input, #sc-renouncingcitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_renouncingcitizenship_list_required_documents = document.getElementById('sc-renouncingcitizenship-list-required-documents');
  if (sc_renouncingcitizenship_list_required_documents) {
    gsap.from('#sc-renouncingcitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_renouncingcitizenship_list_process = document.getElementById('sc-renouncingcitizenship-list-process');
  if (sc_renouncingcitizenship_list_process) {
    gsap.from('#sc-renouncingcitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_renouncingcitizenship_section_timelines_deadlines = document.getElementById('sc-renouncingcitizenship-section-timelines-deadlines');
  if (sc_renouncingcitizenship_section_timelines_deadlines) {
    gsap.fromTo('#sc-renouncingcitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_renouncingcitizenship_section_fees_costs = document.getElementById('sc-renouncingcitizenship-section-fees-costs');
  if (sc_renouncingcitizenship_section_fees_costs) {
    gsap.fromTo('#sc-renouncingcitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_renouncingcitizenship_list_risks_common_mistakes = document.getElementById('sc-renouncingcitizenship-list-risks-common-mistakes');
  if (sc_renouncingcitizenship_list_risks_common_mistakes) {
    gsap.from('#sc-renouncingcitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_renouncingcitizenship_section_diy_vs_professional_assistance = document.getElementById('sc-renouncingcitizenship-section-diy-vs-professional-assistance');
  if (sc_renouncingcitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-renouncingcitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_renouncingcitizenship_section_santa_catarina_specific_context = document.getElementById('sc-renouncingcitizenship-section-santa-catarina-specific-context');
  if (sc_renouncingcitizenship_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-renouncingcitizenship-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_renouncingcitizenship_section_what_our_clients_say = document.getElementById('sc-renouncingcitizenship-section-what-our-clients-say');
  if (sc_renouncingcitizenship_section_what_our_clients_say) {
    gsap.fromTo('#sc-renouncingcitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_renouncingcitizenship_section_frequently_asked_questions = document.getElementById('sc-renouncingcitizenship-section-frequently-asked-questions');
  if (sc_renouncingcitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#sc-renouncingcitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_renouncingcitizenship_section_international_support = document.getElementById('sc-renouncingcitizenship-section-international-support');
  if (sc_renouncingcitizenship_section_international_support) {
    gsap.fromTo('#sc-renouncingcitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_renouncingcitizenship_list_our_credentials = document.getElementById('sc-renouncingcitizenship-list-our-credentials');
  if (sc_renouncingcitizenship_list_our_credentials) {
    gsap.from('#sc-renouncingcitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_renouncingcitizenship_list_related_services = document.getElementById('sc-renouncingcitizenship-list-related-services');
  if (sc_renouncingcitizenship_list_related_services) {
    gsap.from('#sc-renouncingcitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_renouncingcitizenship_section_youre_in_good_hands = document.getElementById('sc-renouncingcitizenship-section-youre-in-good-hands');
  if (sc_renouncingcitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#sc-renouncingcitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_renouncingcitizenship_section_21 = document.getElementById('sc-renouncingcitizenship-section-21');
  if (sc_renouncingcitizenship_section_21) {
    gsap.fromTo('#sc-renouncingcitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_provisional_form_provisional_naturalisation_in_brazil_for_minors = document.getElementById('sc-provisional-form-provisional-naturalisation-in-brazil-for-minors');
  if (sc_provisional_form_provisional_naturalisation_in_brazil_for_minors) {
    gsap.from('#sc-provisional-form-provisional-naturalisation-in-brazil-for-minors input, #sc-provisional-form-provisional-naturalisation-in-brazil-for-minors textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_provisional_list_quick_facts = document.getElementById('sc-provisional-list-quick-facts');
  if (sc_provisional_list_quick_facts) {
    gsap.from('#sc-provisional-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_provisional_list_common_challenges_applicants_face = document.getElementById('sc-provisional-list-common-challenges-applicants-face');
  if (sc_provisional_list_common_challenges_applicants_face) {
    gsap.from('#sc-provisional-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_provisional_list_how_we_solve_these_challenges = document.getElementById('sc-provisional-list-how-we-solve-these-challenges');
  if (sc_provisional_list_how_we_solve_these_challenges) {
    gsap.from('#sc-provisional-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_provisional_section_naturalisation_overview = document.getElementById('sc-provisional-section-naturalisation-overview');
  if (sc_provisional_section_naturalisation_overview) {
    gsap.fromTo('#sc-provisional-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_provisional_form_who_is_this_naturalisation_for = document.getElementById('sc-provisional-form-who-is-this-naturalisation-for');
  if (sc_provisional_form_who_is_this_naturalisation_for) {
    gsap.from('#sc-provisional-form-who-is-this-naturalisation-for input, #sc-provisional-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_provisional_list_required_documents = document.getElementById('sc-provisional-list-required-documents');
  if (sc_provisional_list_required_documents) {
    gsap.from('#sc-provisional-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_provisional_list_application_process = document.getElementById('sc-provisional-list-application-process');
  if (sc_provisional_list_application_process) {
    gsap.from('#sc-provisional-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_provisional_section_timelines_deadlines = document.getElementById('sc-provisional-section-timelines-deadlines');
  if (sc_provisional_section_timelines_deadlines) {
    gsap.fromTo('#sc-provisional-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_provisional_section_fees_costs = document.getElementById('sc-provisional-section-fees-costs');
  if (sc_provisional_section_fees_costs) {
    gsap.fromTo('#sc-provisional-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_provisional_list_risks_common_mistakes = document.getElementById('sc-provisional-list-risks-common-mistakes');
  if (sc_provisional_list_risks_common_mistakes) {
    gsap.from('#sc-provisional-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_provisional_section_diy_vs_professional_assistance = document.getElementById('sc-provisional-section-diy-vs-professional-assistance');
  if (sc_provisional_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-provisional-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_provisional_section_santa_catarina_specific_context = document.getElementById('sc-provisional-section-santa-catarina-specific-context');
  if (sc_provisional_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-provisional-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_provisional_section_what_our_clients_say = document.getElementById('sc-provisional-section-what-our-clients-say');
  if (sc_provisional_section_what_our_clients_say) {
    gsap.fromTo('#sc-provisional-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_provisional_section_frequently_asked_questions = document.getElementById('sc-provisional-section-frequently-asked-questions');
  if (sc_provisional_section_frequently_asked_questions) {
    gsap.fromTo('#sc-provisional-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_provisional_section_international_support = document.getElementById('sc-provisional-section-international-support');
  if (sc_provisional_section_international_support) {
    gsap.fromTo('#sc-provisional-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_provisional_list_our_credentials = document.getElementById('sc-provisional-list-our-credentials');
  if (sc_provisional_list_our_credentials) {
    gsap.from('#sc-provisional-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_provisional_list_related_services = document.getElementById('sc-provisional-list-related-services');
  if (sc_provisional_list_related_services) {
    gsap.from('#sc-provisional-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_provisional_section_youre_in_good_hands = document.getElementById('sc-provisional-section-youre-in-good-hands');
  if (sc_provisional_section_youre_in_good_hands) {
    gsap.fromTo('#sc-provisional-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_provisional_section_21 = document.getElementById('sc-provisional-section-21');
  if (sc_provisional_section_21) {
    gsap.fromTo('#sc-provisional-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_special_form_special_naturalisation_in_brazil_for_particular_cases = document.getElementById('sc-special-form-special-naturalisation-in-brazil-for-particular-cases');
  if (sc_special_form_special_naturalisation_in_brazil_for_particular_cases) {
    gsap.from('#sc-special-form-special-naturalisation-in-brazil-for-particular-cases input, #sc-special-form-special-naturalisation-in-brazil-for-particular-cases textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_special_list_quick_facts = document.getElementById('sc-special-list-quick-facts');
  if (sc_special_list_quick_facts) {
    gsap.from('#sc-special-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_special_list_common_challenges_applicants_face = document.getElementById('sc-special-list-common-challenges-applicants-face');
  if (sc_special_list_common_challenges_applicants_face) {
    gsap.from('#sc-special-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_special_list_how_we_solve_these_challenges = document.getElementById('sc-special-list-how-we-solve-these-challenges');
  if (sc_special_list_how_we_solve_these_challenges) {
    gsap.from('#sc-special-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_special_section_naturalisation_overview = document.getElementById('sc-special-section-naturalisation-overview');
  if (sc_special_section_naturalisation_overview) {
    gsap.fromTo('#sc-special-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_special_form_who_is_this_naturalisation_for = document.getElementById('sc-special-form-who-is-this-naturalisation-for');
  if (sc_special_form_who_is_this_naturalisation_for) {
    gsap.from('#sc-special-form-who-is-this-naturalisation-for input, #sc-special-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_special_list_required_documents = document.getElementById('sc-special-list-required-documents');
  if (sc_special_list_required_documents) {
    gsap.from('#sc-special-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_special_list_application_process = document.getElementById('sc-special-list-application-process');
  if (sc_special_list_application_process) {
    gsap.from('#sc-special-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_special_section_timelines_deadlines = document.getElementById('sc-special-section-timelines-deadlines');
  if (sc_special_section_timelines_deadlines) {
    gsap.fromTo('#sc-special-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_special_section_fees_costs = document.getElementById('sc-special-section-fees-costs');
  if (sc_special_section_fees_costs) {
    gsap.fromTo('#sc-special-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_special_list_risks_common_mistakes = document.getElementById('sc-special-list-risks-common-mistakes');
  if (sc_special_list_risks_common_mistakes) {
    gsap.from('#sc-special-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_special_section_diy_vs_professional_assistance = document.getElementById('sc-special-section-diy-vs-professional-assistance');
  if (sc_special_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-special-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_special_section_santa_catarina_specific_context = document.getElementById('sc-special-section-santa-catarina-specific-context');
  if (sc_special_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-special-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_special_section_what_our_clients_say = document.getElementById('sc-special-section-what-our-clients-say');
  if (sc_special_section_what_our_clients_say) {
    gsap.fromTo('#sc-special-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_special_section_frequently_asked_questions = document.getElementById('sc-special-section-frequently-asked-questions');
  if (sc_special_section_frequently_asked_questions) {
    gsap.fromTo('#sc-special-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_special_section_international_support = document.getElementById('sc-special-section-international-support');
  if (sc_special_section_international_support) {
    gsap.fromTo('#sc-special-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_special_list_our_credentials = document.getElementById('sc-special-list-our-credentials');
  if (sc_special_list_our_credentials) {
    gsap.from('#sc-special-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_special_list_related_services = document.getElementById('sc-special-list-related-services');
  if (sc_special_list_related_services) {
    gsap.from('#sc-special-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_special_section_youre_in_good_hands = document.getElementById('sc-special-section-youre-in-good-hands');
  if (sc_special_section_youre_in_good_hands) {
    gsap.fromTo('#sc-special-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_special_section_21 = document.getElementById('sc-special-section-21');
  if (sc_special_section_21) {
    gsap.fromTo('#sc-special-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation = document.getElementById('sc-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation');
  if (sc_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation) {
    gsap.from('#sc-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation input, #sc-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_ordinary_list_quick_facts = document.getElementById('sc-ordinary-list-quick-facts');
  if (sc_ordinary_list_quick_facts) {
    gsap.from('#sc-ordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_ordinary_list_common_challenges_applicants_face = document.getElementById('sc-ordinary-list-common-challenges-applicants-face');
  if (sc_ordinary_list_common_challenges_applicants_face) {
    gsap.from('#sc-ordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_ordinary_list_how_we_solve_these_challenges = document.getElementById('sc-ordinary-list-how-we-solve-these-challenges');
  if (sc_ordinary_list_how_we_solve_these_challenges) {
    gsap.from('#sc-ordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_ordinary_section_naturalisation_overview = document.getElementById('sc-ordinary-section-naturalisation-overview');
  if (sc_ordinary_section_naturalisation_overview) {
    gsap.fromTo('#sc-ordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_ordinary_form_who_is_this_naturalisation_for = document.getElementById('sc-ordinary-form-who-is-this-naturalisation-for');
  if (sc_ordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#sc-ordinary-form-who-is-this-naturalisation-for input, #sc-ordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_ordinary_list_required_documents = document.getElementById('sc-ordinary-list-required-documents');
  if (sc_ordinary_list_required_documents) {
    gsap.from('#sc-ordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_ordinary_list_application_process = document.getElementById('sc-ordinary-list-application-process');
  if (sc_ordinary_list_application_process) {
    gsap.from('#sc-ordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_ordinary_section_timelines_deadlines = document.getElementById('sc-ordinary-section-timelines-deadlines');
  if (sc_ordinary_section_timelines_deadlines) {
    gsap.fromTo('#sc-ordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_ordinary_section_fees_costs = document.getElementById('sc-ordinary-section-fees-costs');
  if (sc_ordinary_section_fees_costs) {
    gsap.fromTo('#sc-ordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_ordinary_list_risks_common_mistakes = document.getElementById('sc-ordinary-list-risks-common-mistakes');
  if (sc_ordinary_list_risks_common_mistakes) {
    gsap.from('#sc-ordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_ordinary_section_diy_vs_professional_assistance = document.getElementById('sc-ordinary-section-diy-vs-professional-assistance');
  if (sc_ordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-ordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_ordinary_section_santa_catarina_specific_context = document.getElementById('sc-ordinary-section-santa-catarina-specific-context');
  if (sc_ordinary_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-ordinary-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_ordinary_section_what_our_clients_say = document.getElementById('sc-ordinary-section-what-our-clients-say');
  if (sc_ordinary_section_what_our_clients_say) {
    gsap.fromTo('#sc-ordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_ordinary_section_frequently_asked_questions = document.getElementById('sc-ordinary-section-frequently-asked-questions');
  if (sc_ordinary_section_frequently_asked_questions) {
    gsap.fromTo('#sc-ordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_ordinary_section_international_support = document.getElementById('sc-ordinary-section-international-support');
  if (sc_ordinary_section_international_support) {
    gsap.fromTo('#sc-ordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_ordinary_list_our_credentials = document.getElementById('sc-ordinary-list-our-credentials');
  if (sc_ordinary_list_our_credentials) {
    gsap.from('#sc-ordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_ordinary_list_related_services = document.getElementById('sc-ordinary-list-related-services');
  if (sc_ordinary_list_related_services) {
    gsap.from('#sc-ordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_ordinary_section_youre_in_good_hands = document.getElementById('sc-ordinary-section-youre-in-good-hands');
  if (sc_ordinary_section_youre_in_good_hands) {
    gsap.fromTo('#sc-ordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_ordinary_section_21 = document.getElementById('sc-ordinary-section-21');
  if (sc_ordinary_section_21) {
    gsap.fromTo('#sc-ordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions = document.getElementById('sc-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions');
  if (sc_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions) {
    gsap.from('#sc-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions input, #sc-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extraordinary_list_quick_facts = document.getElementById('sc-extraordinary-list-quick-facts');
  if (sc_extraordinary_list_quick_facts) {
    gsap.from('#sc-extraordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extraordinary_list_common_challenges_applicants_face = document.getElementById('sc-extraordinary-list-common-challenges-applicants-face');
  if (sc_extraordinary_list_common_challenges_applicants_face) {
    gsap.from('#sc-extraordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extraordinary_list_how_we_solve_these_challenges = document.getElementById('sc-extraordinary-list-how-we-solve-these-challenges');
  if (sc_extraordinary_list_how_we_solve_these_challenges) {
    gsap.from('#sc-extraordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extraordinary_section_naturalisation_overview = document.getElementById('sc-extraordinary-section-naturalisation-overview');
  if (sc_extraordinary_section_naturalisation_overview) {
    gsap.fromTo('#sc-extraordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extraordinary_form_who_is_this_naturalisation_for = document.getElementById('sc-extraordinary-form-who-is-this-naturalisation-for');
  if (sc_extraordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#sc-extraordinary-form-who-is-this-naturalisation-for input, #sc-extraordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extraordinary_list_required_documents = document.getElementById('sc-extraordinary-list-required-documents');
  if (sc_extraordinary_list_required_documents) {
    gsap.from('#sc-extraordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extraordinary_list_application_process = document.getElementById('sc-extraordinary-list-application-process');
  if (sc_extraordinary_list_application_process) {
    gsap.from('#sc-extraordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extraordinary_section_timelines_deadlines = document.getElementById('sc-extraordinary-section-timelines-deadlines');
  if (sc_extraordinary_section_timelines_deadlines) {
    gsap.fromTo('#sc-extraordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extraordinary_section_fees_costs = document.getElementById('sc-extraordinary-section-fees-costs');
  if (sc_extraordinary_section_fees_costs) {
    gsap.fromTo('#sc-extraordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extraordinary_list_risks_common_mistakes = document.getElementById('sc-extraordinary-list-risks-common-mistakes');
  if (sc_extraordinary_list_risks_common_mistakes) {
    gsap.from('#sc-extraordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extraordinary_section_diy_vs_professional_assistance = document.getElementById('sc-extraordinary-section-diy-vs-professional-assistance');
  if (sc_extraordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-extraordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extraordinary_section_santa_catarina_specific_context = document.getElementById('sc-extraordinary-section-santa-catarina-specific-context');
  if (sc_extraordinary_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-extraordinary-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extraordinary_section_what_our_clients_say = document.getElementById('sc-extraordinary-section-what-our-clients-say');
  if (sc_extraordinary_section_what_our_clients_say) {
    gsap.fromTo('#sc-extraordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extraordinary_section_frequently_asked_questions = document.getElementById('sc-extraordinary-section-frequently-asked-questions');
  if (sc_extraordinary_section_frequently_asked_questions) {
    gsap.fromTo('#sc-extraordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extraordinary_section_international_support = document.getElementById('sc-extraordinary-section-international-support');
  if (sc_extraordinary_section_international_support) {
    gsap.fromTo('#sc-extraordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extraordinary_list_our_credentials = document.getElementById('sc-extraordinary-list-our-credentials');
  if (sc_extraordinary_list_our_credentials) {
    gsap.from('#sc-extraordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extraordinary_list_related_services = document.getElementById('sc-extraordinary-list-related-services');
  if (sc_extraordinary_list_related_services) {
    gsap.from('#sc-extraordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extraordinary_section_youre_in_good_hands = document.getElementById('sc-extraordinary-section-youre-in-good-hands');
  if (sc_extraordinary_section_youre_in_good_hands) {
    gsap.fromTo('#sc-extraordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extraordinary_section_21 = document.getElementById('sc-extraordinary-section-21');
  if (sc_extraordinary_section_21) {
    gsap.fromTo('#sc-extraordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const reacquisition_citizenship.html = document.getElementById('reacquisition-citizenship.html');
  if (reacquisition_citizenship.html) {
    gsap.fromTo('#reacquisition-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_reacquisitioncitizenship_form_reacquire_brazilian_citizenship = document.getElementById('sc-reacquisitioncitizenship-form-reacquire-brazilian-citizenship');
  if (sc_reacquisitioncitizenship_form_reacquire_brazilian_citizenship) {
    gsap.from('#sc-reacquisitioncitizenship-form-reacquire-brazilian-citizenship input, #sc-reacquisitioncitizenship-form-reacquire-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_reacquisitioncitizenship_list_quick_facts = document.getElementById('sc-reacquisitioncitizenship-list-quick-facts');
  if (sc_reacquisitioncitizenship_list_quick_facts) {
    gsap.from('#sc-reacquisitioncitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_reacquisitioncitizenship_list_common_challenges_applicants_face = document.getElementById('sc-reacquisitioncitizenship-list-common-challenges-applicants-face');
  if (sc_reacquisitioncitizenship_list_common_challenges_applicants_face) {
    gsap.from('#sc-reacquisitioncitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_reacquisitioncitizenship_list_how_we_solve_these_challenges = document.getElementById('sc-reacquisitioncitizenship-list-how-we-solve-these-challenges');
  if (sc_reacquisitioncitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#sc-reacquisitioncitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_reacquisitioncitizenship_section_reacquisition_overview = document.getElementById('sc-reacquisitioncitizenship-section-reacquisition-overview');
  if (sc_reacquisitioncitizenship_section_reacquisition_overview) {
    gsap.fromTo('#sc-reacquisitioncitizenship-section-reacquisition-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_reacquisitioncitizenship_form_who_is_this_for = document.getElementById('sc-reacquisitioncitizenship-form-who-is-this-for');
  if (sc_reacquisitioncitizenship_form_who_is_this_for) {
    gsap.from('#sc-reacquisitioncitizenship-form-who-is-this-for input, #sc-reacquisitioncitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_reacquisitioncitizenship_list_required_documents = document.getElementById('sc-reacquisitioncitizenship-list-required-documents');
  if (sc_reacquisitioncitizenship_list_required_documents) {
    gsap.from('#sc-reacquisitioncitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_reacquisitioncitizenship_list_process = document.getElementById('sc-reacquisitioncitizenship-list-process');
  if (sc_reacquisitioncitizenship_list_process) {
    gsap.from('#sc-reacquisitioncitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_reacquisitioncitizenship_section_timelines_deadlines = document.getElementById('sc-reacquisitioncitizenship-section-timelines-deadlines');
  if (sc_reacquisitioncitizenship_section_timelines_deadlines) {
    gsap.fromTo('#sc-reacquisitioncitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_reacquisitioncitizenship_section_fees_costs = document.getElementById('sc-reacquisitioncitizenship-section-fees-costs');
  if (sc_reacquisitioncitizenship_section_fees_costs) {
    gsap.fromTo('#sc-reacquisitioncitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_reacquisitioncitizenship_list_risks_common_mistakes = document.getElementById('sc-reacquisitioncitizenship-list-risks-common-mistakes');
  if (sc_reacquisitioncitizenship_list_risks_common_mistakes) {
    gsap.from('#sc-reacquisitioncitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_reacquisitioncitizenship_section_diy_vs_professional_assistance = document.getElementById('sc-reacquisitioncitizenship-section-diy-vs-professional-assistance');
  if (sc_reacquisitioncitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-reacquisitioncitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_reacquisitioncitizenship_section_santa_catarina_specific_context = document.getElementById('sc-reacquisitioncitizenship-section-santa-catarina-specific-context');
  if (sc_reacquisitioncitizenship_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-reacquisitioncitizenship-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_reacquisitioncitizenship_section_what_our_clients_say = document.getElementById('sc-reacquisitioncitizenship-section-what-our-clients-say');
  if (sc_reacquisitioncitizenship_section_what_our_clients_say) {
    gsap.fromTo('#sc-reacquisitioncitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_reacquisitioncitizenship_section_frequently_asked_questions = document.getElementById('sc-reacquisitioncitizenship-section-frequently-asked-questions');
  if (sc_reacquisitioncitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#sc-reacquisitioncitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_reacquisitioncitizenship_section_international_support = document.getElementById('sc-reacquisitioncitizenship-section-international-support');
  if (sc_reacquisitioncitizenship_section_international_support) {
    gsap.fromTo('#sc-reacquisitioncitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_reacquisitioncitizenship_list_our_credentials = document.getElementById('sc-reacquisitioncitizenship-list-our-credentials');
  if (sc_reacquisitioncitizenship_list_our_credentials) {
    gsap.from('#sc-reacquisitioncitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_reacquisitioncitizenship_list_related_services = document.getElementById('sc-reacquisitioncitizenship-list-related-services');
  if (sc_reacquisitioncitizenship_list_related_services) {
    gsap.from('#sc-reacquisitioncitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_reacquisitioncitizenship_section_youre_in_good_hands = document.getElementById('sc-reacquisitioncitizenship-section-youre-in-good-hands');
  if (sc_reacquisitioncitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#sc-reacquisitioncitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_reacquisitioncitizenship_section_21 = document.getElementById('sc-reacquisitioncitizenship-section-21');
  if (sc_reacquisitioncitizenship_section_21) {
    gsap.fromTo('#sc-reacquisitioncitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const scientific_research.html = document.getElementById('scientific-research.html');
  if (scientific_research.html) {
    gsap.fromTo('#scientific-research.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil = document.getElementById('sc-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil');
  if (sc_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil) {
    gsap.from('#sc-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil input, #sc-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_scientificresearch_list_quick_facts = document.getElementById('sc-scientificresearch-list-quick-facts');
  if (sc_scientificresearch_list_quick_facts) {
    gsap.from('#sc-scientificresearch-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_scientificresearch_list_common_challenges_applicants_face = document.getElementById('sc-scientificresearch-list-common-challenges-applicants-face');
  if (sc_scientificresearch_list_common_challenges_applicants_face) {
    gsap.from('#sc-scientificresearch-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_scientificresearch_list_how_we_solve_these_challenges = document.getElementById('sc-scientificresearch-list-how-we-solve-these-challenges');
  if (sc_scientificresearch_list_how_we_solve_these_challenges) {
    gsap.from('#sc-scientificresearch-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_scientificresearch_section_residency_overview = document.getElementById('sc-scientificresearch-section-residency-overview');
  if (sc_scientificresearch_section_residency_overview) {
    gsap.fromTo('#sc-scientificresearch-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_scientificresearch_form_who_is_this_residency_for = document.getElementById('sc-scientificresearch-form-who-is-this-residency-for');
  if (sc_scientificresearch_form_who_is_this_residency_for) {
    gsap.from('#sc-scientificresearch-form-who-is-this-residency-for input, #sc-scientificresearch-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_scientificresearch_list_required_documents = document.getElementById('sc-scientificresearch-list-required-documents');
  if (sc_scientificresearch_list_required_documents) {
    gsap.from('#sc-scientificresearch-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_scientificresearch_list_application_process = document.getElementById('sc-scientificresearch-list-application-process');
  if (sc_scientificresearch_list_application_process) {
    gsap.from('#sc-scientificresearch-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_scientificresearch_section_timelines_deadlines = document.getElementById('sc-scientificresearch-section-timelines-deadlines');
  if (sc_scientificresearch_section_timelines_deadlines) {
    gsap.fromTo('#sc-scientificresearch-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_scientificresearch_section_fees_costs = document.getElementById('sc-scientificresearch-section-fees-costs');
  if (sc_scientificresearch_section_fees_costs) {
    gsap.fromTo('#sc-scientificresearch-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_scientificresearch_list_risks_common_mistakes = document.getElementById('sc-scientificresearch-list-risks-common-mistakes');
  if (sc_scientificresearch_list_risks_common_mistakes) {
    gsap.from('#sc-scientificresearch-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_scientificresearch_section_diy_vs_professional_assistance = document.getElementById('sc-scientificresearch-section-diy-vs-professional-assistance');
  if (sc_scientificresearch_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-scientificresearch-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_scientificresearch_section_santa_catarina_specific_context = document.getElementById('sc-scientificresearch-section-santa-catarina-specific-context');
  if (sc_scientificresearch_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-scientificresearch-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_scientificresearch_section_what_our_clients_say = document.getElementById('sc-scientificresearch-section-what-our-clients-say');
  if (sc_scientificresearch_section_what_our_clients_say) {
    gsap.fromTo('#sc-scientificresearch-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_scientificresearch_section_frequently_asked_questions = document.getElementById('sc-scientificresearch-section-frequently-asked-questions');
  if (sc_scientificresearch_section_frequently_asked_questions) {
    gsap.fromTo('#sc-scientificresearch-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_scientificresearch_section_international_support = document.getElementById('sc-scientificresearch-section-international-support');
  if (sc_scientificresearch_section_international_support) {
    gsap.fromTo('#sc-scientificresearch-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_scientificresearch_list_our_credentials = document.getElementById('sc-scientificresearch-list-our-credentials');
  if (sc_scientificresearch_list_our_credentials) {
    gsap.from('#sc-scientificresearch-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_scientificresearch_list_related_services = document.getElementById('sc-scientificresearch-list-related-services');
  if (sc_scientificresearch_list_related_services) {
    gsap.from('#sc-scientificresearch-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_scientificresearch_section_youre_in_good_hands = document.getElementById('sc-scientificresearch-section-youre-in-good-hands');
  if (sc_scientificresearch_section_youre_in_good_hands) {
    gsap.fromTo('#sc-scientificresearch-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_scientificresearch_section_21 = document.getElementById('sc-scientificresearch-section-21');
  if (sc_scientificresearch_section_21) {
    gsap.fromTo('#sc-scientificresearch-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_study_form_study_in_brazil_with_study_residency = document.getElementById('sc-study-form-study-in-brazil-with-study-residency');
  if (sc_study_form_study_in_brazil_with_study_residency) {
    gsap.from('#sc-study-form-study-in-brazil-with-study-residency input, #sc-study-form-study-in-brazil-with-study-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_study_list_quick_facts = document.getElementById('sc-study-list-quick-facts');
  if (sc_study_list_quick_facts) {
    gsap.from('#sc-study-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_study_list_common_challenges_applicants_face = document.getElementById('sc-study-list-common-challenges-applicants-face');
  if (sc_study_list_common_challenges_applicants_face) {
    gsap.from('#sc-study-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_study_list_how_we_solve_these_challenges = document.getElementById('sc-study-list-how-we-solve-these-challenges');
  if (sc_study_list_how_we_solve_these_challenges) {
    gsap.from('#sc-study-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_study_section_residency_overview = document.getElementById('sc-study-section-residency-overview');
  if (sc_study_section_residency_overview) {
    gsap.fromTo('#sc-study-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_study_form_who_is_this_residency_for = document.getElementById('sc-study-form-who-is-this-residency-for');
  if (sc_study_form_who_is_this_residency_for) {
    gsap.from('#sc-study-form-who-is-this-residency-for input, #sc-study-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_study_list_required_documents = document.getElementById('sc-study-list-required-documents');
  if (sc_study_list_required_documents) {
    gsap.from('#sc-study-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_study_list_application_process = document.getElementById('sc-study-list-application-process');
  if (sc_study_list_application_process) {
    gsap.from('#sc-study-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_study_section_timelines_deadlines = document.getElementById('sc-study-section-timelines-deadlines');
  if (sc_study_section_timelines_deadlines) {
    gsap.fromTo('#sc-study-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_study_section_fees_costs = document.getElementById('sc-study-section-fees-costs');
  if (sc_study_section_fees_costs) {
    gsap.fromTo('#sc-study-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_study_list_risks_common_mistakes = document.getElementById('sc-study-list-risks-common-mistakes');
  if (sc_study_list_risks_common_mistakes) {
    gsap.from('#sc-study-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_study_section_diy_vs_professional_assistance = document.getElementById('sc-study-section-diy-vs-professional-assistance');
  if (sc_study_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-study-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_study_section_santa_catarina_specific_context = document.getElementById('sc-study-section-santa-catarina-specific-context');
  if (sc_study_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-study-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_study_section_what_our_clients_say = document.getElementById('sc-study-section-what-our-clients-say');
  if (sc_study_section_what_our_clients_say) {
    gsap.fromTo('#sc-study-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_study_section_frequently_asked_questions = document.getElementById('sc-study-section-frequently-asked-questions');
  if (sc_study_section_frequently_asked_questions) {
    gsap.fromTo('#sc-study-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_study_section_international_support = document.getElementById('sc-study-section-international-support');
  if (sc_study_section_international_support) {
    gsap.fromTo('#sc-study-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_study_list_our_credentials = document.getElementById('sc-study-list-our-credentials');
  if (sc_study_list_our_credentials) {
    gsap.from('#sc-study-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_study_list_related_services = document.getElementById('sc-study-list-related-services');
  if (sc_study_list_related_services) {
    gsap.from('#sc-study-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_study_section_youre_in_good_hands = document.getElementById('sc-study-section-youre-in-good-hands');
  if (sc_study_section_youre_in_good_hands) {
    gsap.fromTo('#sc-study-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_study_section_21 = document.getElementById('sc-study-section-21');
  if (sc_study_section_21) {
    gsap.fromTo('#sc-study-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const educational_exchange.html = document.getElementById('educational-exchange.html');
  if (educational_exchange.html) {
    gsap.fromTo('#educational-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil = document.getElementById('sc-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil');
  if (sc_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil) {
    gsap.from('#sc-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil input, #sc-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_educationalexchange_list_quick_facts = document.getElementById('sc-educationalexchange-list-quick-facts');
  if (sc_educationalexchange_list_quick_facts) {
    gsap.from('#sc-educationalexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_educationalexchange_list_common_challenges_applicants_face = document.getElementById('sc-educationalexchange-list-common-challenges-applicants-face');
  if (sc_educationalexchange_list_common_challenges_applicants_face) {
    gsap.from('#sc-educationalexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_educationalexchange_list_how_we_solve_these_challenges = document.getElementById('sc-educationalexchange-list-how-we-solve-these-challenges');
  if (sc_educationalexchange_list_how_we_solve_these_challenges) {
    gsap.from('#sc-educationalexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_educationalexchange_section_residency_overview = document.getElementById('sc-educationalexchange-section-residency-overview');
  if (sc_educationalexchange_section_residency_overview) {
    gsap.fromTo('#sc-educationalexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_educationalexchange_form_who_is_this_residency_for = document.getElementById('sc-educationalexchange-form-who-is-this-residency-for');
  if (sc_educationalexchange_form_who_is_this_residency_for) {
    gsap.from('#sc-educationalexchange-form-who-is-this-residency-for input, #sc-educationalexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_educationalexchange_list_required_documents = document.getElementById('sc-educationalexchange-list-required-documents');
  if (sc_educationalexchange_list_required_documents) {
    gsap.from('#sc-educationalexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_educationalexchange_list_application_process = document.getElementById('sc-educationalexchange-list-application-process');
  if (sc_educationalexchange_list_application_process) {
    gsap.from('#sc-educationalexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_educationalexchange_section_timelines_deadlines = document.getElementById('sc-educationalexchange-section-timelines-deadlines');
  if (sc_educationalexchange_section_timelines_deadlines) {
    gsap.fromTo('#sc-educationalexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_educationalexchange_section_fees_costs = document.getElementById('sc-educationalexchange-section-fees-costs');
  if (sc_educationalexchange_section_fees_costs) {
    gsap.fromTo('#sc-educationalexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_educationalexchange_list_risks_common_mistakes = document.getElementById('sc-educationalexchange-list-risks-common-mistakes');
  if (sc_educationalexchange_list_risks_common_mistakes) {
    gsap.from('#sc-educationalexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_educationalexchange_section_diy_vs_professional_assistance = document.getElementById('sc-educationalexchange-section-diy-vs-professional-assistance');
  if (sc_educationalexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-educationalexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_educationalexchange_section_santa_catarina_specific_context = document.getElementById('sc-educationalexchange-section-santa-catarina-specific-context');
  if (sc_educationalexchange_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-educationalexchange-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_educationalexchange_section_what_our_clients_say = document.getElementById('sc-educationalexchange-section-what-our-clients-say');
  if (sc_educationalexchange_section_what_our_clients_say) {
    gsap.fromTo('#sc-educationalexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_educationalexchange_section_frequently_asked_questions = document.getElementById('sc-educationalexchange-section-frequently-asked-questions');
  if (sc_educationalexchange_section_frequently_asked_questions) {
    gsap.fromTo('#sc-educationalexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_educationalexchange_section_international_support = document.getElementById('sc-educationalexchange-section-international-support');
  if (sc_educationalexchange_section_international_support) {
    gsap.fromTo('#sc-educationalexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_educationalexchange_list_our_credentials = document.getElementById('sc-educationalexchange-list-our-credentials');
  if (sc_educationalexchange_list_our_credentials) {
    gsap.from('#sc-educationalexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_educationalexchange_list_related_services = document.getElementById('sc-educationalexchange-list-related-services');
  if (sc_educationalexchange_list_related_services) {
    gsap.from('#sc-educationalexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_educationalexchange_section_youre_in_good_hands = document.getElementById('sc-educationalexchange-section-youre-in-good-hands');
  if (sc_educationalexchange_section_youre_in_good_hands) {
    gsap.fromTo('#sc-educationalexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_educationalexchange_section_21 = document.getElementById('sc-educationalexchange-section-21');
  if (sc_educationalexchange_section_21) {
    gsap.fromTo('#sc-educationalexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_humanitarian_form_humanitarian_residency_in_brazil_for_protection = document.getElementById('sc-humanitarian-form-humanitarian-residency-in-brazil-for-protection');
  if (sc_humanitarian_form_humanitarian_residency_in_brazil_for_protection) {
    gsap.from('#sc-humanitarian-form-humanitarian-residency-in-brazil-for-protection input, #sc-humanitarian-form-humanitarian-residency-in-brazil-for-protection textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_humanitarian_list_quick_facts = document.getElementById('sc-humanitarian-list-quick-facts');
  if (sc_humanitarian_list_quick_facts) {
    gsap.from('#sc-humanitarian-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_humanitarian_list_common_challenges_applicants_face = document.getElementById('sc-humanitarian-list-common-challenges-applicants-face');
  if (sc_humanitarian_list_common_challenges_applicants_face) {
    gsap.from('#sc-humanitarian-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_humanitarian_list_how_we_solve_these_challenges = document.getElementById('sc-humanitarian-list-how-we-solve-these-challenges');
  if (sc_humanitarian_list_how_we_solve_these_challenges) {
    gsap.from('#sc-humanitarian-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_humanitarian_section_residency_overview = document.getElementById('sc-humanitarian-section-residency-overview');
  if (sc_humanitarian_section_residency_overview) {
    gsap.fromTo('#sc-humanitarian-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_humanitarian_form_who_is_this_residency_for = document.getElementById('sc-humanitarian-form-who-is-this-residency-for');
  if (sc_humanitarian_form_who_is_this_residency_for) {
    gsap.from('#sc-humanitarian-form-who-is-this-residency-for input, #sc-humanitarian-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_humanitarian_list_required_documents = document.getElementById('sc-humanitarian-list-required-documents');
  if (sc_humanitarian_list_required_documents) {
    gsap.from('#sc-humanitarian-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_humanitarian_list_application_process = document.getElementById('sc-humanitarian-list-application-process');
  if (sc_humanitarian_list_application_process) {
    gsap.from('#sc-humanitarian-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_humanitarian_section_timelines_deadlines = document.getElementById('sc-humanitarian-section-timelines-deadlines');
  if (sc_humanitarian_section_timelines_deadlines) {
    gsap.fromTo('#sc-humanitarian-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_humanitarian_section_fees_costs = document.getElementById('sc-humanitarian-section-fees-costs');
  if (sc_humanitarian_section_fees_costs) {
    gsap.fromTo('#sc-humanitarian-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_humanitarian_list_risks_common_mistakes = document.getElementById('sc-humanitarian-list-risks-common-mistakes');
  if (sc_humanitarian_list_risks_common_mistakes) {
    gsap.from('#sc-humanitarian-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_humanitarian_section_diy_vs_professional_assistance = document.getElementById('sc-humanitarian-section-diy-vs-professional-assistance');
  if (sc_humanitarian_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-humanitarian-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_humanitarian_section_santa_catarina_specific_context = document.getElementById('sc-humanitarian-section-santa-catarina-specific-context');
  if (sc_humanitarian_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-humanitarian-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_humanitarian_section_what_our_clients_say = document.getElementById('sc-humanitarian-section-what-our-clients-say');
  if (sc_humanitarian_section_what_our_clients_say) {
    gsap.fromTo('#sc-humanitarian-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_humanitarian_section_frequently_asked_questions = document.getElementById('sc-humanitarian-section-frequently-asked-questions');
  if (sc_humanitarian_section_frequently_asked_questions) {
    gsap.fromTo('#sc-humanitarian-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_humanitarian_section_international_support = document.getElementById('sc-humanitarian-section-international-support');
  if (sc_humanitarian_section_international_support) {
    gsap.fromTo('#sc-humanitarian-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_humanitarian_list_our_credentials = document.getElementById('sc-humanitarian-list-our-credentials');
  if (sc_humanitarian_list_our_credentials) {
    gsap.from('#sc-humanitarian-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_humanitarian_list_related_services = document.getElementById('sc-humanitarian-list-related-services');
  if (sc_humanitarian_list_related_services) {
    gsap.from('#sc-humanitarian-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_humanitarian_section_youre_in_good_hands = document.getElementById('sc-humanitarian-section-youre-in-good-hands');
  if (sc_humanitarian_section_youre_in_good_hands) {
    gsap.fromTo('#sc-humanitarian-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_humanitarian_section_21 = document.getElementById('sc-humanitarian-section-21');
  if (sc_humanitarian_section_21) {
    gsap.fromTo('#sc-humanitarian-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const digital_nomad.html = document.getElementById('digital-nomad.html');
  if (digital_nomad.html) {
    gsap.fromTo('#digital-nomad.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_digitalnomad_form_digital_nomad_residency_in_brazil = document.getElementById('sc-digitalnomad-form-digital-nomad-residency-in-brazil');
  if (sc_digitalnomad_form_digital_nomad_residency_in_brazil) {
    gsap.from('#sc-digitalnomad-form-digital-nomad-residency-in-brazil input, #sc-digitalnomad-form-digital-nomad-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_digitalnomad_list_quick_facts = document.getElementById('sc-digitalnomad-list-quick-facts');
  if (sc_digitalnomad_list_quick_facts) {
    gsap.from('#sc-digitalnomad-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_digitalnomad_list_common_challenges_applicants_face = document.getElementById('sc-digitalnomad-list-common-challenges-applicants-face');
  if (sc_digitalnomad_list_common_challenges_applicants_face) {
    gsap.from('#sc-digitalnomad-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_digitalnomad_list_how_we_solve_these_challenges = document.getElementById('sc-digitalnomad-list-how-we-solve-these-challenges');
  if (sc_digitalnomad_list_how_we_solve_these_challenges) {
    gsap.from('#sc-digitalnomad-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_digitalnomad_section_residency_overview = document.getElementById('sc-digitalnomad-section-residency-overview');
  if (sc_digitalnomad_section_residency_overview) {
    gsap.fromTo('#sc-digitalnomad-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_digitalnomad_form_who_is_this_residency_for = document.getElementById('sc-digitalnomad-form-who-is-this-residency-for');
  if (sc_digitalnomad_form_who_is_this_residency_for) {
    gsap.from('#sc-digitalnomad-form-who-is-this-residency-for input, #sc-digitalnomad-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_digitalnomad_list_required_documents = document.getElementById('sc-digitalnomad-list-required-documents');
  if (sc_digitalnomad_list_required_documents) {
    gsap.from('#sc-digitalnomad-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_digitalnomad_list_application_process = document.getElementById('sc-digitalnomad-list-application-process');
  if (sc_digitalnomad_list_application_process) {
    gsap.from('#sc-digitalnomad-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_digitalnomad_section_timelines_deadlines = document.getElementById('sc-digitalnomad-section-timelines-deadlines');
  if (sc_digitalnomad_section_timelines_deadlines) {
    gsap.fromTo('#sc-digitalnomad-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_digitalnomad_section_fees_costs = document.getElementById('sc-digitalnomad-section-fees-costs');
  if (sc_digitalnomad_section_fees_costs) {
    gsap.fromTo('#sc-digitalnomad-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_digitalnomad_list_risks_common_mistakes = document.getElementById('sc-digitalnomad-list-risks-common-mistakes');
  if (sc_digitalnomad_list_risks_common_mistakes) {
    gsap.from('#sc-digitalnomad-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_digitalnomad_section_diy_vs_professional_assistance = document.getElementById('sc-digitalnomad-section-diy-vs-professional-assistance');
  if (sc_digitalnomad_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-digitalnomad-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_digitalnomad_section_santa_catarina_specific_context = document.getElementById('sc-digitalnomad-section-santa-catarina-specific-context');
  if (sc_digitalnomad_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-digitalnomad-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_digitalnomad_section_what_our_clients_say = document.getElementById('sc-digitalnomad-section-what-our-clients-say');
  if (sc_digitalnomad_section_what_our_clients_say) {
    gsap.fromTo('#sc-digitalnomad-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_digitalnomad_section_frequently_asked_questions = document.getElementById('sc-digitalnomad-section-frequently-asked-questions');
  if (sc_digitalnomad_section_frequently_asked_questions) {
    gsap.fromTo('#sc-digitalnomad-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_digitalnomad_section_international_support = document.getElementById('sc-digitalnomad-section-international-support');
  if (sc_digitalnomad_section_international_support) {
    gsap.fromTo('#sc-digitalnomad-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_digitalnomad_list_our_credentials = document.getElementById('sc-digitalnomad-list-our-credentials');
  if (sc_digitalnomad_list_our_credentials) {
    gsap.from('#sc-digitalnomad-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_digitalnomad_list_related_services = document.getElementById('sc-digitalnomad-list-related-services');
  if (sc_digitalnomad_list_related_services) {
    gsap.from('#sc-digitalnomad-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_digitalnomad_section_youre_in_good_hands = document.getElementById('sc-digitalnomad-section-youre-in-good-hands');
  if (sc_digitalnomad_section_youre_in_good_hands) {
    gsap.fromTo('#sc-digitalnomad-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_digitalnomad_section_21 = document.getElementById('sc-digitalnomad-section-21');
  if (sc_digitalnomad_section_21) {
    gsap.fromTo('#sc-digitalnomad-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const family_reunion.html = document.getElementById('family-reunion.html');
  if (family_reunion.html) {
    gsap.fromTo('#family-reunion.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency = document.getElementById('sc-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency');
  if (sc_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency) {
    gsap.from('#sc-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency input, #sc-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_familyreunion_list_quick_facts = document.getElementById('sc-familyreunion-list-quick-facts');
  if (sc_familyreunion_list_quick_facts) {
    gsap.from('#sc-familyreunion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_familyreunion_list_common_challenges_applicants_face = document.getElementById('sc-familyreunion-list-common-challenges-applicants-face');
  if (sc_familyreunion_list_common_challenges_applicants_face) {
    gsap.from('#sc-familyreunion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_familyreunion_list_how_we_solve_these_challenges = document.getElementById('sc-familyreunion-list-how-we-solve-these-challenges');
  if (sc_familyreunion_list_how_we_solve_these_challenges) {
    gsap.from('#sc-familyreunion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_familyreunion_section_residency_overview = document.getElementById('sc-familyreunion-section-residency-overview');
  if (sc_familyreunion_section_residency_overview) {
    gsap.fromTo('#sc-familyreunion-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_familyreunion_form_who_is_this_residency_for = document.getElementById('sc-familyreunion-form-who-is-this-residency-for');
  if (sc_familyreunion_form_who_is_this_residency_for) {
    gsap.from('#sc-familyreunion-form-who-is-this-residency-for input, #sc-familyreunion-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_familyreunion_list_required_documents = document.getElementById('sc-familyreunion-list-required-documents');
  if (sc_familyreunion_list_required_documents) {
    gsap.from('#sc-familyreunion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_familyreunion_list_application_process = document.getElementById('sc-familyreunion-list-application-process');
  if (sc_familyreunion_list_application_process) {
    gsap.from('#sc-familyreunion-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_familyreunion_section_timelines_deadlines = document.getElementById('sc-familyreunion-section-timelines-deadlines');
  if (sc_familyreunion_section_timelines_deadlines) {
    gsap.fromTo('#sc-familyreunion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_familyreunion_section_fees_costs = document.getElementById('sc-familyreunion-section-fees-costs');
  if (sc_familyreunion_section_fees_costs) {
    gsap.fromTo('#sc-familyreunion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_familyreunion_list_risks_common_mistakes = document.getElementById('sc-familyreunion-list-risks-common-mistakes');
  if (sc_familyreunion_list_risks_common_mistakes) {
    gsap.from('#sc-familyreunion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_familyreunion_section_diy_vs_professional_assistance = document.getElementById('sc-familyreunion-section-diy-vs-professional-assistance');
  if (sc_familyreunion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-familyreunion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_familyreunion_section_santa_catarina_specific_context = document.getElementById('sc-familyreunion-section-santa-catarina-specific-context');
  if (sc_familyreunion_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-familyreunion-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_familyreunion_section_what_our_clients_say = document.getElementById('sc-familyreunion-section-what-our-clients-say');
  if (sc_familyreunion_section_what_our_clients_say) {
    gsap.fromTo('#sc-familyreunion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_familyreunion_section_frequently_asked_questions = document.getElementById('sc-familyreunion-section-frequently-asked-questions');
  if (sc_familyreunion_section_frequently_asked_questions) {
    gsap.fromTo('#sc-familyreunion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_familyreunion_section_international_support = document.getElementById('sc-familyreunion-section-international-support');
  if (sc_familyreunion_section_international_support) {
    gsap.fromTo('#sc-familyreunion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_familyreunion_list_our_credentials = document.getElementById('sc-familyreunion-list-our-credentials');
  if (sc_familyreunion_list_our_credentials) {
    gsap.from('#sc-familyreunion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_familyreunion_list_related_services = document.getElementById('sc-familyreunion-list-related-services');
  if (sc_familyreunion_list_related_services) {
    gsap.from('#sc-familyreunion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_familyreunion_section_youre_in_good_hands = document.getElementById('sc-familyreunion-section-youre-in-good-hands');
  if (sc_familyreunion_section_youre_in_good_hands) {
    gsap.fromTo('#sc-familyreunion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_familyreunion_section_21 = document.getElementById('sc-familyreunion-section-21');
  if (sc_familyreunion_section_21) {
    gsap.fromTo('#sc-familyreunion-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_mercosul_form_residency_for_mercosul_citizens_in_brazil = document.getElementById('sc-mercosul-form-residency-for-mercosul-citizens-in-brazil');
  if (sc_mercosul_form_residency_for_mercosul_citizens_in_brazil) {
    gsap.from('#sc-mercosul-form-residency-for-mercosul-citizens-in-brazil input, #sc-mercosul-form-residency-for-mercosul-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_mercosul_list_quick_facts = document.getElementById('sc-mercosul-list-quick-facts');
  if (sc_mercosul_list_quick_facts) {
    gsap.from('#sc-mercosul-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_mercosul_list_common_challenges_applicants_face = document.getElementById('sc-mercosul-list-common-challenges-applicants-face');
  if (sc_mercosul_list_common_challenges_applicants_face) {
    gsap.from('#sc-mercosul-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_mercosul_list_how_we_solve_these_challenges = document.getElementById('sc-mercosul-list-how-we-solve-these-challenges');
  if (sc_mercosul_list_how_we_solve_these_challenges) {
    gsap.from('#sc-mercosul-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_mercosul_section_residency_overview = document.getElementById('sc-mercosul-section-residency-overview');
  if (sc_mercosul_section_residency_overview) {
    gsap.fromTo('#sc-mercosul-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_mercosul_form_who_is_this_residency_for = document.getElementById('sc-mercosul-form-who-is-this-residency-for');
  if (sc_mercosul_form_who_is_this_residency_for) {
    gsap.from('#sc-mercosul-form-who-is-this-residency-for input, #sc-mercosul-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_mercosul_list_required_documents = document.getElementById('sc-mercosul-list-required-documents');
  if (sc_mercosul_list_required_documents) {
    gsap.from('#sc-mercosul-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_mercosul_list_application_process = document.getElementById('sc-mercosul-list-application-process');
  if (sc_mercosul_list_application_process) {
    gsap.from('#sc-mercosul-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_mercosul_section_timelines_deadlines = document.getElementById('sc-mercosul-section-timelines-deadlines');
  if (sc_mercosul_section_timelines_deadlines) {
    gsap.fromTo('#sc-mercosul-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_mercosul_section_fees_costs = document.getElementById('sc-mercosul-section-fees-costs');
  if (sc_mercosul_section_fees_costs) {
    gsap.fromTo('#sc-mercosul-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_mercosul_list_risks_common_mistakes = document.getElementById('sc-mercosul-list-risks-common-mistakes');
  if (sc_mercosul_list_risks_common_mistakes) {
    gsap.from('#sc-mercosul-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_mercosul_section_diy_vs_professional_assistance = document.getElementById('sc-mercosul-section-diy-vs-professional-assistance');
  if (sc_mercosul_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-mercosul-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_mercosul_section_santa_catarina_specific_context = document.getElementById('sc-mercosul-section-santa-catarina-specific-context');
  if (sc_mercosul_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-mercosul-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_mercosul_section_what_our_clients_say = document.getElementById('sc-mercosul-section-what-our-clients-say');
  if (sc_mercosul_section_what_our_clients_say) {
    gsap.fromTo('#sc-mercosul-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_mercosul_section_frequently_asked_questions = document.getElementById('sc-mercosul-section-frequently-asked-questions');
  if (sc_mercosul_section_frequently_asked_questions) {
    gsap.fromTo('#sc-mercosul-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_mercosul_section_international_support = document.getElementById('sc-mercosul-section-international-support');
  if (sc_mercosul_section_international_support) {
    gsap.fromTo('#sc-mercosul-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_mercosul_list_our_credentials = document.getElementById('sc-mercosul-list-our-credentials');
  if (sc_mercosul_list_our_credentials) {
    gsap.from('#sc-mercosul-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_mercosul_list_related_services = document.getElementById('sc-mercosul-list-related-services');
  if (sc_mercosul_list_related_services) {
    gsap.from('#sc-mercosul-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_mercosul_section_youre_in_good_hands = document.getElementById('sc-mercosul-section-youre-in-good-hands');
  if (sc_mercosul_section_youre_in_good_hands) {
    gsap.fromTo('#sc-mercosul-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_mercosul_section_21 = document.getElementById('sc-mercosul-section-21');
  if (sc_mercosul_section_21) {
    gsap.fromTo('#sc-mercosul-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_retiree_form_retire_in_brazil_with_retiree_residency = document.getElementById('sc-retiree-form-retire-in-brazil-with-retiree-residency');
  if (sc_retiree_form_retire_in_brazil_with_retiree_residency) {
    gsap.from('#sc-retiree-form-retire-in-brazil-with-retiree-residency input, #sc-retiree-form-retire-in-brazil-with-retiree-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_retiree_list_quick_facts = document.getElementById('sc-retiree-list-quick-facts');
  if (sc_retiree_list_quick_facts) {
    gsap.from('#sc-retiree-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_retiree_list_common_challenges_applicants_face = document.getElementById('sc-retiree-list-common-challenges-applicants-face');
  if (sc_retiree_list_common_challenges_applicants_face) {
    gsap.from('#sc-retiree-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_retiree_list_how_we_solve_these_challenges = document.getElementById('sc-retiree-list-how-we-solve-these-challenges');
  if (sc_retiree_list_how_we_solve_these_challenges) {
    gsap.from('#sc-retiree-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_retiree_section_residency_overview = document.getElementById('sc-retiree-section-residency-overview');
  if (sc_retiree_section_residency_overview) {
    gsap.fromTo('#sc-retiree-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_retiree_form_who_is_this_residency_for = document.getElementById('sc-retiree-form-who-is-this-residency-for');
  if (sc_retiree_form_who_is_this_residency_for) {
    gsap.from('#sc-retiree-form-who-is-this-residency-for input, #sc-retiree-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_retiree_list_required_documents = document.getElementById('sc-retiree-list-required-documents');
  if (sc_retiree_list_required_documents) {
    gsap.from('#sc-retiree-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_retiree_list_application_process = document.getElementById('sc-retiree-list-application-process');
  if (sc_retiree_list_application_process) {
    gsap.from('#sc-retiree-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_retiree_section_timelines_deadlines = document.getElementById('sc-retiree-section-timelines-deadlines');
  if (sc_retiree_section_timelines_deadlines) {
    gsap.fromTo('#sc-retiree-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_retiree_section_fees_costs = document.getElementById('sc-retiree-section-fees-costs');
  if (sc_retiree_section_fees_costs) {
    gsap.fromTo('#sc-retiree-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_retiree_list_risks_common_mistakes = document.getElementById('sc-retiree-list-risks-common-mistakes');
  if (sc_retiree_list_risks_common_mistakes) {
    gsap.from('#sc-retiree-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_retiree_section_diy_vs_professional_assistance = document.getElementById('sc-retiree-section-diy-vs-professional-assistance');
  if (sc_retiree_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-retiree-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_retiree_section_santa_catarina_specific_context = document.getElementById('sc-retiree-section-santa-catarina-specific-context');
  if (sc_retiree_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-retiree-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_retiree_section_what_our_clients_say = document.getElementById('sc-retiree-section-what-our-clients-say');
  if (sc_retiree_section_what_our_clients_say) {
    gsap.fromTo('#sc-retiree-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_retiree_section_frequently_asked_questions = document.getElementById('sc-retiree-section-frequently-asked-questions');
  if (sc_retiree_section_frequently_asked_questions) {
    gsap.fromTo('#sc-retiree-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_retiree_section_international_support = document.getElementById('sc-retiree-section-international-support');
  if (sc_retiree_section_international_support) {
    gsap.fromTo('#sc-retiree-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_retiree_list_our_credentials = document.getElementById('sc-retiree-list-our-credentials');
  if (sc_retiree_list_our_credentials) {
    gsap.from('#sc-retiree-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_retiree_list_related_services = document.getElementById('sc-retiree-list-related-services');
  if (sc_retiree_list_related_services) {
    gsap.from('#sc-retiree-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_retiree_section_youre_in_good_hands = document.getElementById('sc-retiree-section-youre-in-good-hands');
  if (sc_retiree_section_youre_in_good_hands) {
    gsap.fromTo('#sc-retiree-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_retiree_section_21 = document.getElementById('sc-retiree-section-21');
  if (sc_retiree_section_21) {
    gsap.fromTo('#sc-retiree-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_volunteer_form_volunteer_in_brazil_with_volunteer_residency = document.getElementById('sc-volunteer-form-volunteer-in-brazil-with-volunteer-residency');
  if (sc_volunteer_form_volunteer_in_brazil_with_volunteer_residency) {
    gsap.from('#sc-volunteer-form-volunteer-in-brazil-with-volunteer-residency input, #sc-volunteer-form-volunteer-in-brazil-with-volunteer-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_volunteer_list_quick_facts = document.getElementById('sc-volunteer-list-quick-facts');
  if (sc_volunteer_list_quick_facts) {
    gsap.from('#sc-volunteer-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_volunteer_list_common_challenges_applicants_face = document.getElementById('sc-volunteer-list-common-challenges-applicants-face');
  if (sc_volunteer_list_common_challenges_applicants_face) {
    gsap.from('#sc-volunteer-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_volunteer_list_how_we_solve_these_challenges = document.getElementById('sc-volunteer-list-how-we-solve-these-challenges');
  if (sc_volunteer_list_how_we_solve_these_challenges) {
    gsap.from('#sc-volunteer-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_volunteer_section_residency_overview = document.getElementById('sc-volunteer-section-residency-overview');
  if (sc_volunteer_section_residency_overview) {
    gsap.fromTo('#sc-volunteer-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_volunteer_form_who_is_this_residency_for = document.getElementById('sc-volunteer-form-who-is-this-residency-for');
  if (sc_volunteer_form_who_is_this_residency_for) {
    gsap.from('#sc-volunteer-form-who-is-this-residency-for input, #sc-volunteer-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_volunteer_list_required_documents = document.getElementById('sc-volunteer-list-required-documents');
  if (sc_volunteer_list_required_documents) {
    gsap.from('#sc-volunteer-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_volunteer_list_application_process = document.getElementById('sc-volunteer-list-application-process');
  if (sc_volunteer_list_application_process) {
    gsap.from('#sc-volunteer-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_volunteer_section_timelines_deadlines = document.getElementById('sc-volunteer-section-timelines-deadlines');
  if (sc_volunteer_section_timelines_deadlines) {
    gsap.fromTo('#sc-volunteer-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_volunteer_section_fees_costs = document.getElementById('sc-volunteer-section-fees-costs');
  if (sc_volunteer_section_fees_costs) {
    gsap.fromTo('#sc-volunteer-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_volunteer_list_risks_common_mistakes = document.getElementById('sc-volunteer-list-risks-common-mistakes');
  if (sc_volunteer_list_risks_common_mistakes) {
    gsap.from('#sc-volunteer-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_volunteer_section_diy_vs_professional_assistance = document.getElementById('sc-volunteer-section-diy-vs-professional-assistance');
  if (sc_volunteer_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-volunteer-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_volunteer_section_santa_catarina_specific_context = document.getElementById('sc-volunteer-section-santa-catarina-specific-context');
  if (sc_volunteer_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-volunteer-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_volunteer_section_what_our_clients_say = document.getElementById('sc-volunteer-section-what-our-clients-say');
  if (sc_volunteer_section_what_our_clients_say) {
    gsap.fromTo('#sc-volunteer-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_volunteer_section_frequently_asked_questions = document.getElementById('sc-volunteer-section-frequently-asked-questions');
  if (sc_volunteer_section_frequently_asked_questions) {
    gsap.fromTo('#sc-volunteer-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_volunteer_section_international_support = document.getElementById('sc-volunteer-section-international-support');
  if (sc_volunteer_section_international_support) {
    gsap.fromTo('#sc-volunteer-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_volunteer_list_our_credentials = document.getElementById('sc-volunteer-list-our-credentials');
  if (sc_volunteer_list_our_credentials) {
    gsap.from('#sc-volunteer-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_volunteer_list_related_services = document.getElementById('sc-volunteer-list-related-services');
  if (sc_volunteer_list_related_services) {
    gsap.from('#sc-volunteer-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_volunteer_section_youre_in_good_hands = document.getElementById('sc-volunteer-section-youre-in-good-hands');
  if (sc_volunteer_section_youre_in_good_hands) {
    gsap.fromTo('#sc-volunteer-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_volunteer_section_21 = document.getElementById('sc-volunteer-section-21');
  if (sc_volunteer_section_21) {
    gsap.fromTo('#sc-volunteer-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const skilled_worker.html = document.getElementById('skilled-worker.html');
  if (skilled_worker.html) {
    gsap.fromTo('#skilled-worker.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals = document.getElementById('sc-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals');
  if (sc_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals) {
    gsap.from('#sc-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals input, #sc-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_skilledworker_list_quick_facts = document.getElementById('sc-skilledworker-list-quick-facts');
  if (sc_skilledworker_list_quick_facts) {
    gsap.from('#sc-skilledworker-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_skilledworker_list_common_challenges_applicants_face = document.getElementById('sc-skilledworker-list-common-challenges-applicants-face');
  if (sc_skilledworker_list_common_challenges_applicants_face) {
    gsap.from('#sc-skilledworker-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_skilledworker_list_how_we_solve_these_challenges = document.getElementById('sc-skilledworker-list-how-we-solve-these-challenges');
  if (sc_skilledworker_list_how_we_solve_these_challenges) {
    gsap.from('#sc-skilledworker-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_skilledworker_section_residency_overview = document.getElementById('sc-skilledworker-section-residency-overview');
  if (sc_skilledworker_section_residency_overview) {
    gsap.fromTo('#sc-skilledworker-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_skilledworker_form_who_is_this_residency_for = document.getElementById('sc-skilledworker-form-who-is-this-residency-for');
  if (sc_skilledworker_form_who_is_this_residency_for) {
    gsap.from('#sc-skilledworker-form-who-is-this-residency-for input, #sc-skilledworker-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_skilledworker_list_required_documents = document.getElementById('sc-skilledworker-list-required-documents');
  if (sc_skilledworker_list_required_documents) {
    gsap.from('#sc-skilledworker-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_skilledworker_list_application_process = document.getElementById('sc-skilledworker-list-application-process');
  if (sc_skilledworker_list_application_process) {
    gsap.from('#sc-skilledworker-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_skilledworker_section_timelines_deadlines = document.getElementById('sc-skilledworker-section-timelines-deadlines');
  if (sc_skilledworker_section_timelines_deadlines) {
    gsap.fromTo('#sc-skilledworker-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_skilledworker_section_fees_costs = document.getElementById('sc-skilledworker-section-fees-costs');
  if (sc_skilledworker_section_fees_costs) {
    gsap.fromTo('#sc-skilledworker-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_skilledworker_list_risks_common_mistakes = document.getElementById('sc-skilledworker-list-risks-common-mistakes');
  if (sc_skilledworker_list_risks_common_mistakes) {
    gsap.from('#sc-skilledworker-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_skilledworker_section_diy_vs_professional_assistance = document.getElementById('sc-skilledworker-section-diy-vs-professional-assistance');
  if (sc_skilledworker_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-skilledworker-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_skilledworker_section_santa_catarina_specific_context = document.getElementById('sc-skilledworker-section-santa-catarina-specific-context');
  if (sc_skilledworker_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-skilledworker-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_skilledworker_section_what_our_clients_say = document.getElementById('sc-skilledworker-section-what-our-clients-say');
  if (sc_skilledworker_section_what_our_clients_say) {
    gsap.fromTo('#sc-skilledworker-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_skilledworker_section_frequently_asked_questions = document.getElementById('sc-skilledworker-section-frequently-asked-questions');
  if (sc_skilledworker_section_frequently_asked_questions) {
    gsap.fromTo('#sc-skilledworker-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_skilledworker_section_international_support = document.getElementById('sc-skilledworker-section-international-support');
  if (sc_skilledworker_section_international_support) {
    gsap.fromTo('#sc-skilledworker-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_skilledworker_list_our_credentials = document.getElementById('sc-skilledworker-list-our-credentials');
  if (sc_skilledworker_list_our_credentials) {
    gsap.from('#sc-skilledworker-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_skilledworker_list_related_services = document.getElementById('sc-skilledworker-list-related-services');
  if (sc_skilledworker_list_related_services) {
    gsap.from('#sc-skilledworker-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_skilledworker_section_youre_in_good_hands = document.getElementById('sc-skilledworker-section-youre-in-good-hands');
  if (sc_skilledworker_section_youre_in_good_hands) {
    gsap.fromTo('#sc-skilledworker-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_skilledworker_section_21 = document.getElementById('sc-skilledworker-section-21');
  if (sc_skilledworker_section_21) {
    gsap.fromTo('#sc-skilledworker-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_religious_form_religious_residency_in_brazil_for_missions = document.getElementById('sc-religious-form-religious-residency-in-brazil-for-missions');
  if (sc_religious_form_religious_residency_in_brazil_for_missions) {
    gsap.from('#sc-religious-form-religious-residency-in-brazil-for-missions input, #sc-religious-form-religious-residency-in-brazil-for-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_religious_list_quick_facts = document.getElementById('sc-religious-list-quick-facts');
  if (sc_religious_list_quick_facts) {
    gsap.from('#sc-religious-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_religious_list_common_challenges_applicants_face = document.getElementById('sc-religious-list-common-challenges-applicants-face');
  if (sc_religious_list_common_challenges_applicants_face) {
    gsap.from('#sc-religious-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_religious_list_how_we_solve_these_challenges = document.getElementById('sc-religious-list-how-we-solve-these-challenges');
  if (sc_religious_list_how_we_solve_these_challenges) {
    gsap.from('#sc-religious-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_religious_section_residency_overview = document.getElementById('sc-religious-section-residency-overview');
  if (sc_religious_section_residency_overview) {
    gsap.fromTo('#sc-religious-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_religious_form_who_is_this_residency_for = document.getElementById('sc-religious-form-who-is-this-residency-for');
  if (sc_religious_form_who_is_this_residency_for) {
    gsap.from('#sc-religious-form-who-is-this-residency-for input, #sc-religious-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_religious_list_required_documents = document.getElementById('sc-religious-list-required-documents');
  if (sc_religious_list_required_documents) {
    gsap.from('#sc-religious-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_religious_list_application_process = document.getElementById('sc-religious-list-application-process');
  if (sc_religious_list_application_process) {
    gsap.from('#sc-religious-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_religious_section_timelines_deadlines = document.getElementById('sc-religious-section-timelines-deadlines');
  if (sc_religious_section_timelines_deadlines) {
    gsap.fromTo('#sc-religious-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_religious_section_fees_costs = document.getElementById('sc-religious-section-fees-costs');
  if (sc_religious_section_fees_costs) {
    gsap.fromTo('#sc-religious-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_religious_list_risks_common_mistakes = document.getElementById('sc-religious-list-risks-common-mistakes');
  if (sc_religious_list_risks_common_mistakes) {
    gsap.from('#sc-religious-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_religious_section_diy_vs_professional_assistance = document.getElementById('sc-religious-section-diy-vs-professional-assistance');
  if (sc_religious_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-religious-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_religious_section_santa_catarina_specific_context = document.getElementById('sc-religious-section-santa-catarina-specific-context');
  if (sc_religious_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-religious-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_religious_section_what_our_clients_say = document.getElementById('sc-religious-section-what-our-clients-say');
  if (sc_religious_section_what_our_clients_say) {
    gsap.fromTo('#sc-religious-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_religious_section_frequently_asked_questions = document.getElementById('sc-religious-section-frequently-asked-questions');
  if (sc_religious_section_frequently_asked_questions) {
    gsap.fromTo('#sc-religious-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_religious_section_international_support = document.getElementById('sc-religious-section-international-support');
  if (sc_religious_section_international_support) {
    gsap.fromTo('#sc-religious-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_religious_list_our_credentials = document.getElementById('sc-religious-list-our-credentials');
  if (sc_religious_list_our_credentials) {
    gsap.from('#sc-religious-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_religious_list_related_services = document.getElementById('sc-religious-list-related-services');
  if (sc_religious_list_related_services) {
    gsap.from('#sc-religious-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_religious_section_youre_in_good_hands = document.getElementById('sc-religious-section-youre-in-good-hands');
  if (sc_religious_section_youre_in_good_hands) {
    gsap.fromTo('#sc-religious-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_religious_section_21 = document.getElementById('sc-religious-section-21');
  if (sc_religious_section_21) {
    gsap.fromTo('#sc-religious-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_investor_form_gain_residency_in_brazil_through_investment = document.getElementById('sc-investor-form-gain-residency-in-brazil-through-investment');
  if (sc_investor_form_gain_residency_in_brazil_through_investment) {
    gsap.from('#sc-investor-form-gain-residency-in-brazil-through-investment input, #sc-investor-form-gain-residency-in-brazil-through-investment textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_investor_list_quick_facts = document.getElementById('sc-investor-list-quick-facts');
  if (sc_investor_list_quick_facts) {
    gsap.from('#sc-investor-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_investor_list_common_challenges_applicants_face = document.getElementById('sc-investor-list-common-challenges-applicants-face');
  if (sc_investor_list_common_challenges_applicants_face) {
    gsap.from('#sc-investor-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_investor_list_how_we_solve_these_challenges = document.getElementById('sc-investor-list-how-we-solve-these-challenges');
  if (sc_investor_list_how_we_solve_these_challenges) {
    gsap.from('#sc-investor-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_investor_section_residency_overview = document.getElementById('sc-investor-section-residency-overview');
  if (sc_investor_section_residency_overview) {
    gsap.fromTo('#sc-investor-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_investor_form_who_is_this_residency_for = document.getElementById('sc-investor-form-who-is-this-residency-for');
  if (sc_investor_form_who_is_this_residency_for) {
    gsap.from('#sc-investor-form-who-is-this-residency-for input, #sc-investor-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_investor_list_required_documents = document.getElementById('sc-investor-list-required-documents');
  if (sc_investor_list_required_documents) {
    gsap.from('#sc-investor-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_investor_list_application_process = document.getElementById('sc-investor-list-application-process');
  if (sc_investor_list_application_process) {
    gsap.from('#sc-investor-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_investor_section_timelines_deadlines = document.getElementById('sc-investor-section-timelines-deadlines');
  if (sc_investor_section_timelines_deadlines) {
    gsap.fromTo('#sc-investor-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_investor_section_fees_costs = document.getElementById('sc-investor-section-fees-costs');
  if (sc_investor_section_fees_costs) {
    gsap.fromTo('#sc-investor-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_investor_list_risks_common_mistakes = document.getElementById('sc-investor-list-risks-common-mistakes');
  if (sc_investor_list_risks_common_mistakes) {
    gsap.from('#sc-investor-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_investor_section_diy_vs_professional_assistance = document.getElementById('sc-investor-section-diy-vs-professional-assistance');
  if (sc_investor_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-investor-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_investor_section_santa_catarina_specific_context = document.getElementById('sc-investor-section-santa-catarina-specific-context');
  if (sc_investor_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-investor-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_investor_section_what_our_clients_say = document.getElementById('sc-investor-section-what-our-clients-say');
  if (sc_investor_section_what_our_clients_say) {
    gsap.fromTo('#sc-investor-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_investor_section_frequently_asked_questions = document.getElementById('sc-investor-section-frequently-asked-questions');
  if (sc_investor_section_frequently_asked_questions) {
    gsap.fromTo('#sc-investor-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_investor_section_international_support = document.getElementById('sc-investor-section-international-support');
  if (sc_investor_section_international_support) {
    gsap.fromTo('#sc-investor-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_investor_list_our_credentials = document.getElementById('sc-investor-list-our-credentials');
  if (sc_investor_list_our_credentials) {
    gsap.from('#sc-investor-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_investor_list_related_services = document.getElementById('sc-investor-list-related-services');
  if (sc_investor_list_related_services) {
    gsap.from('#sc-investor-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_investor_section_youre_in_good_hands = document.getElementById('sc-investor-section-youre-in-good-hands');
  if (sc_investor_section_youre_in_good_hands) {
    gsap.fromTo('#sc-investor-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_investor_section_21 = document.getElementById('sc-investor-section-21');
  if (sc_investor_section_21) {
    gsap.fromTo('#sc-investor-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const health_treatment.html = document.getElementById('health-treatment.html');
  if (health_treatment.html) {
    gsap.fromTo('#health-treatment.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil = document.getElementById('sc-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil');
  if (sc_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil) {
    gsap.from('#sc-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil input, #sc-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_healthtreatment_list_quick_facts = document.getElementById('sc-healthtreatment-list-quick-facts');
  if (sc_healthtreatment_list_quick_facts) {
    gsap.from('#sc-healthtreatment-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_healthtreatment_list_common_challenges_applicants_face = document.getElementById('sc-healthtreatment-list-common-challenges-applicants-face');
  if (sc_healthtreatment_list_common_challenges_applicants_face) {
    gsap.from('#sc-healthtreatment-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_healthtreatment_list_how_we_solve_these_challenges = document.getElementById('sc-healthtreatment-list-how-we-solve-these-challenges');
  if (sc_healthtreatment_list_how_we_solve_these_challenges) {
    gsap.from('#sc-healthtreatment-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_healthtreatment_section_residency_overview = document.getElementById('sc-healthtreatment-section-residency-overview');
  if (sc_healthtreatment_section_residency_overview) {
    gsap.fromTo('#sc-healthtreatment-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_healthtreatment_form_who_is_this_residency_for = document.getElementById('sc-healthtreatment-form-who-is-this-residency-for');
  if (sc_healthtreatment_form_who_is_this_residency_for) {
    gsap.from('#sc-healthtreatment-form-who-is-this-residency-for input, #sc-healthtreatment-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_healthtreatment_list_required_documents = document.getElementById('sc-healthtreatment-list-required-documents');
  if (sc_healthtreatment_list_required_documents) {
    gsap.from('#sc-healthtreatment-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_healthtreatment_list_application_process = document.getElementById('sc-healthtreatment-list-application-process');
  if (sc_healthtreatment_list_application_process) {
    gsap.from('#sc-healthtreatment-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_healthtreatment_section_timelines_deadlines = document.getElementById('sc-healthtreatment-section-timelines-deadlines');
  if (sc_healthtreatment_section_timelines_deadlines) {
    gsap.fromTo('#sc-healthtreatment-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_healthtreatment_section_fees_costs = document.getElementById('sc-healthtreatment-section-fees-costs');
  if (sc_healthtreatment_section_fees_costs) {
    gsap.fromTo('#sc-healthtreatment-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_healthtreatment_list_risks_common_mistakes = document.getElementById('sc-healthtreatment-list-risks-common-mistakes');
  if (sc_healthtreatment_list_risks_common_mistakes) {
    gsap.from('#sc-healthtreatment-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_healthtreatment_section_diy_vs_professional_assistance = document.getElementById('sc-healthtreatment-section-diy-vs-professional-assistance');
  if (sc_healthtreatment_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-healthtreatment-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_healthtreatment_section_santa_catarina_specific_context = document.getElementById('sc-healthtreatment-section-santa-catarina-specific-context');
  if (sc_healthtreatment_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-healthtreatment-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_healthtreatment_section_what_our_clients_say = document.getElementById('sc-healthtreatment-section-what-our-clients-say');
  if (sc_healthtreatment_section_what_our_clients_say) {
    gsap.fromTo('#sc-healthtreatment-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_healthtreatment_section_frequently_asked_questions = document.getElementById('sc-healthtreatment-section-frequently-asked-questions');
  if (sc_healthtreatment_section_frequently_asked_questions) {
    gsap.fromTo('#sc-healthtreatment-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_healthtreatment_section_international_support = document.getElementById('sc-healthtreatment-section-international-support');
  if (sc_healthtreatment_section_international_support) {
    gsap.fromTo('#sc-healthtreatment-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_healthtreatment_list_our_credentials = document.getElementById('sc-healthtreatment-list-our-credentials');
  if (sc_healthtreatment_list_our_credentials) {
    gsap.from('#sc-healthtreatment-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_healthtreatment_list_related_services = document.getElementById('sc-healthtreatment-list-related-services');
  if (sc_healthtreatment_list_related_services) {
    gsap.from('#sc-healthtreatment-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_healthtreatment_section_youre_in_good_hands = document.getElementById('sc-healthtreatment-section-youre-in-good-hands');
  if (sc_healthtreatment_section_youre_in_good_hands) {
    gsap.fromTo('#sc-healthtreatment-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_healthtreatment_section_21 = document.getElementById('sc-healthtreatment-section-21');
  if (sc_healthtreatment_section_21) {
    gsap.fromTo('#sc-healthtreatment-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_cplp_form_residency_for_cplp_citizens_in_brazil = document.getElementById('sc-cplp-form-residency-for-cplp-citizens-in-brazil');
  if (sc_cplp_form_residency_for_cplp_citizens_in_brazil) {
    gsap.from('#sc-cplp-form-residency-for-cplp-citizens-in-brazil input, #sc-cplp-form-residency-for-cplp-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_cplp_list_quick_facts = document.getElementById('sc-cplp-list-quick-facts');
  if (sc_cplp_list_quick_facts) {
    gsap.from('#sc-cplp-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_cplp_list_common_challenges_applicants_face = document.getElementById('sc-cplp-list-common-challenges-applicants-face');
  if (sc_cplp_list_common_challenges_applicants_face) {
    gsap.from('#sc-cplp-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_cplp_list_how_we_solve_these_challenges = document.getElementById('sc-cplp-list-how-we-solve-these-challenges');
  if (sc_cplp_list_how_we_solve_these_challenges) {
    gsap.from('#sc-cplp-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_cplp_section_residency_overview = document.getElementById('sc-cplp-section-residency-overview');
  if (sc_cplp_section_residency_overview) {
    gsap.fromTo('#sc-cplp-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_cplp_form_who_is_this_residency_for = document.getElementById('sc-cplp-form-who-is-this-residency-for');
  if (sc_cplp_form_who_is_this_residency_for) {
    gsap.from('#sc-cplp-form-who-is-this-residency-for input, #sc-cplp-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_cplp_list_required_documents = document.getElementById('sc-cplp-list-required-documents');
  if (sc_cplp_list_required_documents) {
    gsap.from('#sc-cplp-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_cplp_list_application_process = document.getElementById('sc-cplp-list-application-process');
  if (sc_cplp_list_application_process) {
    gsap.from('#sc-cplp-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_cplp_section_timelines_deadlines = document.getElementById('sc-cplp-section-timelines-deadlines');
  if (sc_cplp_section_timelines_deadlines) {
    gsap.fromTo('#sc-cplp-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_cplp_section_fees_costs = document.getElementById('sc-cplp-section-fees-costs');
  if (sc_cplp_section_fees_costs) {
    gsap.fromTo('#sc-cplp-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_cplp_list_risks_common_mistakes = document.getElementById('sc-cplp-list-risks-common-mistakes');
  if (sc_cplp_list_risks_common_mistakes) {
    gsap.from('#sc-cplp-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_cplp_section_diy_vs_professional_assistance = document.getElementById('sc-cplp-section-diy-vs-professional-assistance');
  if (sc_cplp_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-cplp-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_cplp_section_santa_catarina_specific_context = document.getElementById('sc-cplp-section-santa-catarina-specific-context');
  if (sc_cplp_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-cplp-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_cplp_section_what_our_clients_say = document.getElementById('sc-cplp-section-what-our-clients-say');
  if (sc_cplp_section_what_our_clients_say) {
    gsap.fromTo('#sc-cplp-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_cplp_section_frequently_asked_questions = document.getElementById('sc-cplp-section-frequently-asked-questions');
  if (sc_cplp_section_frequently_asked_questions) {
    gsap.fromTo('#sc-cplp-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_cplp_section_international_support = document.getElementById('sc-cplp-section-international-support');
  if (sc_cplp_section_international_support) {
    gsap.fromTo('#sc-cplp-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_cplp_list_our_credentials = document.getElementById('sc-cplp-list-our-credentials');
  if (sc_cplp_list_our_credentials) {
    gsap.from('#sc-cplp-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_cplp_list_related_services = document.getElementById('sc-cplp-list-related-services');
  if (sc_cplp_list_related_services) {
    gsap.from('#sc-cplp-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_cplp_section_youre_in_good_hands = document.getElementById('sc-cplp-section-youre-in-good-hands');
  if (sc_cplp_section_youre_in_good_hands) {
    gsap.fromTo('#sc-cplp-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_cplp_section_21 = document.getElementById('sc-cplp-section-21');
  if (sc_cplp_section_21) {
    gsap.fromTo('#sc-cplp-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const youth_exchange.html = document.getElementById('youth-exchange.html');
  if (youth_exchange.html) {
    gsap.fromTo('#youth-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_youthexchange_form_youth_exchange_residency_in_brazil_for_programs = document.getElementById('sc-youthexchange-form-youth-exchange-residency-in-brazil-for-programs');
  if (sc_youthexchange_form_youth_exchange_residency_in_brazil_for_programs) {
    gsap.from('#sc-youthexchange-form-youth-exchange-residency-in-brazil-for-programs input, #sc-youthexchange-form-youth-exchange-residency-in-brazil-for-programs textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_youthexchange_list_quick_facts = document.getElementById('sc-youthexchange-list-quick-facts');
  if (sc_youthexchange_list_quick_facts) {
    gsap.from('#sc-youthexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_youthexchange_list_common_challenges_applicants_face = document.getElementById('sc-youthexchange-list-common-challenges-applicants-face');
  if (sc_youthexchange_list_common_challenges_applicants_face) {
    gsap.from('#sc-youthexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_youthexchange_list_how_we_solve_these_challenges = document.getElementById('sc-youthexchange-list-how-we-solve-these-challenges');
  if (sc_youthexchange_list_how_we_solve_these_challenges) {
    gsap.from('#sc-youthexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_youthexchange_section_residency_overview = document.getElementById('sc-youthexchange-section-residency-overview');
  if (sc_youthexchange_section_residency_overview) {
    gsap.fromTo('#sc-youthexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_youthexchange_form_who_is_this_residency_for = document.getElementById('sc-youthexchange-form-who-is-this-residency-for');
  if (sc_youthexchange_form_who_is_this_residency_for) {
    gsap.from('#sc-youthexchange-form-who-is-this-residency-for input, #sc-youthexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_youthexchange_list_required_documents = document.getElementById('sc-youthexchange-list-required-documents');
  if (sc_youthexchange_list_required_documents) {
    gsap.from('#sc-youthexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_youthexchange_list_application_process = document.getElementById('sc-youthexchange-list-application-process');
  if (sc_youthexchange_list_application_process) {
    gsap.from('#sc-youthexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_youthexchange_section_timelines_deadlines = document.getElementById('sc-youthexchange-section-timelines-deadlines');
  if (sc_youthexchange_section_timelines_deadlines) {
    gsap.fromTo('#sc-youthexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_youthexchange_section_fees_costs = document.getElementById('sc-youthexchange-section-fees-costs');
  if (sc_youthexchange_section_fees_costs) {
    gsap.fromTo('#sc-youthexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_youthexchange_list_risks_common_mistakes = document.getElementById('sc-youthexchange-list-risks-common-mistakes');
  if (sc_youthexchange_list_risks_common_mistakes) {
    gsap.from('#sc-youthexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_youthexchange_section_diy_vs_professional_assistance = document.getElementById('sc-youthexchange-section-diy-vs-professional-assistance');
  if (sc_youthexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-youthexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_youthexchange_section_santa_catarina_specific_context = document.getElementById('sc-youthexchange-section-santa-catarina-specific-context');
  if (sc_youthexchange_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-youthexchange-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_youthexchange_section_what_our_clients_say = document.getElementById('sc-youthexchange-section-what-our-clients-say');
  if (sc_youthexchange_section_what_our_clients_say) {
    gsap.fromTo('#sc-youthexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_youthexchange_section_frequently_asked_questions = document.getElementById('sc-youthexchange-section-frequently-asked-questions');
  if (sc_youthexchange_section_frequently_asked_questions) {
    gsap.fromTo('#sc-youthexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_youthexchange_section_international_support = document.getElementById('sc-youthexchange-section-international-support');
  if (sc_youthexchange_section_international_support) {
    gsap.fromTo('#sc-youthexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_youthexchange_list_our_credentials = document.getElementById('sc-youthexchange-list-our-credentials');
  if (sc_youthexchange_list_our_credentials) {
    gsap.from('#sc-youthexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_youthexchange_list_related_services = document.getElementById('sc-youthexchange-list-related-services');
  if (sc_youthexchange_list_related_services) {
    gsap.from('#sc-youthexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_youthexchange_section_youre_in_good_hands = document.getElementById('sc-youthexchange-section-youre-in-good-hands');
  if (sc_youthexchange_section_youre_in_good_hands) {
    gsap.fromTo('#sc-youthexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_youthexchange_section_21 = document.getElementById('sc-youthexchange-section-21');
  if (sc_youthexchange_section_21) {
    gsap.fromTo('#sc-youthexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_work_form_work_and_reside_in_brazil_with_work_residency = document.getElementById('sc-work-form-work-and-reside-in-brazil-with-work-residency');
  if (sc_work_form_work_and_reside_in_brazil_with_work_residency) {
    gsap.from('#sc-work-form-work-and-reside-in-brazil-with-work-residency input, #sc-work-form-work-and-reside-in-brazil-with-work-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_work_list_quick_facts = document.getElementById('sc-work-list-quick-facts');
  if (sc_work_list_quick_facts) {
    gsap.from('#sc-work-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_work_list_common_challenges_applicants_face = document.getElementById('sc-work-list-common-challenges-applicants-face');
  if (sc_work_list_common_challenges_applicants_face) {
    gsap.from('#sc-work-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_work_list_how_we_solve_these_challenges = document.getElementById('sc-work-list-how-we-solve-these-challenges');
  if (sc_work_list_how_we_solve_these_challenges) {
    gsap.from('#sc-work-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_work_section_residency_overview = document.getElementById('sc-work-section-residency-overview');
  if (sc_work_section_residency_overview) {
    gsap.fromTo('#sc-work-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_work_form_who_is_this_residency_for = document.getElementById('sc-work-form-who-is-this-residency-for');
  if (sc_work_form_who_is_this_residency_for) {
    gsap.from('#sc-work-form-who-is-this-residency-for input, #sc-work-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_work_list_required_documents = document.getElementById('sc-work-list-required-documents');
  if (sc_work_list_required_documents) {
    gsap.from('#sc-work-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_work_list_application_process = document.getElementById('sc-work-list-application-process');
  if (sc_work_list_application_process) {
    gsap.from('#sc-work-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_work_section_timelines_deadlines = document.getElementById('sc-work-section-timelines-deadlines');
  if (sc_work_section_timelines_deadlines) {
    gsap.fromTo('#sc-work-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_work_section_fees_costs = document.getElementById('sc-work-section-fees-costs');
  if (sc_work_section_fees_costs) {
    gsap.fromTo('#sc-work-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_work_list_risks_common_mistakes = document.getElementById('sc-work-list-risks-common-mistakes');
  if (sc_work_list_risks_common_mistakes) {
    gsap.from('#sc-work-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_work_section_diy_vs_professional_assistance = document.getElementById('sc-work-section-diy-vs-professional-assistance');
  if (sc_work_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-work-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_work_section_santa_catarina_specific_context = document.getElementById('sc-work-section-santa-catarina-specific-context');
  if (sc_work_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-work-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_work_section_what_our_clients_say = document.getElementById('sc-work-section-what-our-clients-say');
  if (sc_work_section_what_our_clients_say) {
    gsap.fromTo('#sc-work-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_work_section_frequently_asked_questions = document.getElementById('sc-work-section-frequently-asked-questions');
  if (sc_work_section_frequently_asked_questions) {
    gsap.fromTo('#sc-work-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_work_section_international_support = document.getElementById('sc-work-section-international-support');
  if (sc_work_section_international_support) {
    gsap.fromTo('#sc-work-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_work_list_our_credentials = document.getElementById('sc-work-list-our-credentials');
  if (sc_work_list_our_credentials) {
    gsap.from('#sc-work-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_work_list_related_services = document.getElementById('sc-work-list-related-services');
  if (sc_work_list_related_services) {
    gsap.from('#sc-work-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_work_section_youre_in_good_hands = document.getElementById('sc-work-section-youre-in-good-hands');
  if (sc_work_section_youre_in_good_hands) {
    gsap.fromTo('#sc-work-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_work_section_21 = document.getElementById('sc-work-section-21');
  if (sc_work_section_21) {
    gsap.fromTo('#sc-work-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_startup_form_launch_your_startup_in_brazil_with_the_startup_visa = document.getElementById('sc-startup-form-launch-your-startup-in-brazil-with-the-startup-visa');
  if (sc_startup_form_launch_your_startup_in_brazil_with_the_startup_visa) {
    gsap.from('#sc-startup-form-launch-your-startup-in-brazil-with-the-startup-visa input, #sc-startup-form-launch-your-startup-in-brazil-with-the-startup-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_startup_list_quick_facts = document.getElementById('sc-startup-list-quick-facts');
  if (sc_startup_list_quick_facts) {
    gsap.from('#sc-startup-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_startup_list_common_challenges_applicants_face = document.getElementById('sc-startup-list-common-challenges-applicants-face');
  if (sc_startup_list_common_challenges_applicants_face) {
    gsap.from('#sc-startup-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_startup_list_how_we_solve_these_challenges = document.getElementById('sc-startup-list-how-we-solve-these-challenges');
  if (sc_startup_list_how_we_solve_these_challenges) {
    gsap.from('#sc-startup-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_startup_section_visa_overview = document.getElementById('sc-startup-section-visa-overview');
  if (sc_startup_section_visa_overview) {
    gsap.fromTo('#sc-startup-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_startup_form_who_is_this_visa_for = document.getElementById('sc-startup-form-who-is-this-visa-for');
  if (sc_startup_form_who_is_this_visa_for) {
    gsap.from('#sc-startup-form-who-is-this-visa-for input, #sc-startup-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_startup_list_required_documents = document.getElementById('sc-startup-list-required-documents');
  if (sc_startup_list_required_documents) {
    gsap.from('#sc-startup-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_startup_list_application_process = document.getElementById('sc-startup-list-application-process');
  if (sc_startup_list_application_process) {
    gsap.from('#sc-startup-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_startup_section_timelines_deadlines = document.getElementById('sc-startup-section-timelines-deadlines');
  if (sc_startup_section_timelines_deadlines) {
    gsap.fromTo('#sc-startup-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_startup_section_fees_costs = document.getElementById('sc-startup-section-fees-costs');
  if (sc_startup_section_fees_costs) {
    gsap.fromTo('#sc-startup-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_startup_list_risks_common_mistakes = document.getElementById('sc-startup-list-risks-common-mistakes');
  if (sc_startup_list_risks_common_mistakes) {
    gsap.from('#sc-startup-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_startup_section_diy_vs_professional_assistance = document.getElementById('sc-startup-section-diy-vs-professional-assistance');
  if (sc_startup_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-startup-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_startup_section_santa_catarina_specific_context = document.getElementById('sc-startup-section-santa-catarina-specific-context');
  if (sc_startup_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-startup-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_startup_section_what_our_clients_say = document.getElementById('sc-startup-section-what-our-clients-say');
  if (sc_startup_section_what_our_clients_say) {
    gsap.fromTo('#sc-startup-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_startup_section_frequently_asked_questions = document.getElementById('sc-startup-section-frequently-asked-questions');
  if (sc_startup_section_frequently_asked_questions) {
    gsap.fromTo('#sc-startup-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_startup_section_international_support = document.getElementById('sc-startup-section-international-support');
  if (sc_startup_section_international_support) {
    gsap.fromTo('#sc-startup-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_startup_list_our_credentials = document.getElementById('sc-startup-list-our-credentials');
  if (sc_startup_list_our_credentials) {
    gsap.from('#sc-startup-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_startup_list_related_services = document.getElementById('sc-startup-list-related-services');
  if (sc_startup_list_related_services) {
    gsap.from('#sc-startup-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_startup_section_youre_in_good_hands = document.getElementById('sc-startup-section-youre-in-good-hands');
  if (sc_startup_section_youre_in_good_hands) {
    gsap.fromTo('#sc-startup-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_startup_section_21 = document.getElementById('sc-startup-section-21');
  if (sc_startup_section_21) {
    gsap.fromTo('#sc-startup-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_family_form_reunite_with_family_in_brazil_with_the_family_visa = document.getElementById('sc-family-form-reunite-with-family-in-brazil-with-the-family-visa');
  if (sc_family_form_reunite_with_family_in_brazil_with_the_family_visa) {
    gsap.from('#sc-family-form-reunite-with-family-in-brazil-with-the-family-visa input, #sc-family-form-reunite-with-family-in-brazil-with-the-family-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_family_list_quick_facts = document.getElementById('sc-family-list-quick-facts');
  if (sc_family_list_quick_facts) {
    gsap.from('#sc-family-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_family_list_common_challenges_applicants_face = document.getElementById('sc-family-list-common-challenges-applicants-face');
  if (sc_family_list_common_challenges_applicants_face) {
    gsap.from('#sc-family-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_family_list_how_we_solve_these_challenges = document.getElementById('sc-family-list-how-we-solve-these-challenges');
  if (sc_family_list_how_we_solve_these_challenges) {
    gsap.from('#sc-family-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_family_section_visa_overview = document.getElementById('sc-family-section-visa-overview');
  if (sc_family_section_visa_overview) {
    gsap.fromTo('#sc-family-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_family_form_who_is_this_visa_for = document.getElementById('sc-family-form-who-is-this-visa-for');
  if (sc_family_form_who_is_this_visa_for) {
    gsap.from('#sc-family-form-who-is-this-visa-for input, #sc-family-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_family_list_required_documents = document.getElementById('sc-family-list-required-documents');
  if (sc_family_list_required_documents) {
    gsap.from('#sc-family-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_family_list_application_process = document.getElementById('sc-family-list-application-process');
  if (sc_family_list_application_process) {
    gsap.from('#sc-family-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_family_section_timelines_deadlines = document.getElementById('sc-family-section-timelines-deadlines');
  if (sc_family_section_timelines_deadlines) {
    gsap.fromTo('#sc-family-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_family_section_fees_costs = document.getElementById('sc-family-section-fees-costs');
  if (sc_family_section_fees_costs) {
    gsap.fromTo('#sc-family-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_family_list_risks_common_mistakes = document.getElementById('sc-family-list-risks-common-mistakes');
  if (sc_family_list_risks_common_mistakes) {
    gsap.from('#sc-family-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_family_section_diy_vs_professional_assistance = document.getElementById('sc-family-section-diy-vs-professional-assistance');
  if (sc_family_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-family-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_family_section_santa_catarina_specific_context = document.getElementById('sc-family-section-santa-catarina-specific-context');
  if (sc_family_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-family-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_family_section_what_our_clients_say = document.getElementById('sc-family-section-what-our-clients-say');
  if (sc_family_section_what_our_clients_say) {
    gsap.fromTo('#sc-family-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_family_section_frequently_asked_questions = document.getElementById('sc-family-section-frequently-asked-questions');
  if (sc_family_section_frequently_asked_questions) {
    gsap.fromTo('#sc-family-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_family_section_international_support = document.getElementById('sc-family-section-international-support');
  if (sc_family_section_international_support) {
    gsap.fromTo('#sc-family-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_family_list_our_credentials = document.getElementById('sc-family-list-our-credentials');
  if (sc_family_list_our_credentials) {
    gsap.from('#sc-family-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_family_list_related_services = document.getElementById('sc-family-list-related-services');
  if (sc_family_list_related_services) {
    gsap.from('#sc-family-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_family_section_youre_in_good_hands = document.getElementById('sc-family-section-youre-in-good-hands');
  if (sc_family_section_youre_in_good_hands) {
    gsap.fromTo('#sc-family-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_family_section_21 = document.getElementById('sc-family-section-21');
  if (sc_family_section_21) {
    gsap.fromTo('#sc-family-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_sports_form_compete_in_brazil_with_the_sports_visa = document.getElementById('sc-sports-form-compete-in-brazil-with-the-sports-visa');
  if (sc_sports_form_compete_in_brazil_with_the_sports_visa) {
    gsap.from('#sc-sports-form-compete-in-brazil-with-the-sports-visa input, #sc-sports-form-compete-in-brazil-with-the-sports-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_sports_list_quick_facts = document.getElementById('sc-sports-list-quick-facts');
  if (sc_sports_list_quick_facts) {
    gsap.from('#sc-sports-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_sports_list_common_challenges_applicants_face = document.getElementById('sc-sports-list-common-challenges-applicants-face');
  if (sc_sports_list_common_challenges_applicants_face) {
    gsap.from('#sc-sports-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_sports_list_how_we_solve_these_challenges = document.getElementById('sc-sports-list-how-we-solve-these-challenges');
  if (sc_sports_list_how_we_solve_these_challenges) {
    gsap.from('#sc-sports-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_sports_section_visa_overview = document.getElementById('sc-sports-section-visa-overview');
  if (sc_sports_section_visa_overview) {
    gsap.fromTo('#sc-sports-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_sports_form_who_is_this_visa_for = document.getElementById('sc-sports-form-who-is-this-visa-for');
  if (sc_sports_form_who_is_this_visa_for) {
    gsap.from('#sc-sports-form-who-is-this-visa-for input, #sc-sports-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_sports_list_required_documents = document.getElementById('sc-sports-list-required-documents');
  if (sc_sports_list_required_documents) {
    gsap.from('#sc-sports-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_sports_list_application_process = document.getElementById('sc-sports-list-application-process');
  if (sc_sports_list_application_process) {
    gsap.from('#sc-sports-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_sports_section_timelines_deadlines = document.getElementById('sc-sports-section-timelines-deadlines');
  if (sc_sports_section_timelines_deadlines) {
    gsap.fromTo('#sc-sports-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_sports_section_fees_costs = document.getElementById('sc-sports-section-fees-costs');
  if (sc_sports_section_fees_costs) {
    gsap.fromTo('#sc-sports-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_sports_list_risks_common_mistakes = document.getElementById('sc-sports-list-risks-common-mistakes');
  if (sc_sports_list_risks_common_mistakes) {
    gsap.from('#sc-sports-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_sports_section_diy_vs_professional_assistance = document.getElementById('sc-sports-section-diy-vs-professional-assistance');
  if (sc_sports_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-sports-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_sports_section_santa_catarina_specific_context = document.getElementById('sc-sports-section-santa-catarina-specific-context');
  if (sc_sports_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-sports-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_sports_section_what_our_clients_say = document.getElementById('sc-sports-section-what-our-clients-say');
  if (sc_sports_section_what_our_clients_say) {
    gsap.fromTo('#sc-sports-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_sports_section_frequently_asked_questions = document.getElementById('sc-sports-section-frequently-asked-questions');
  if (sc_sports_section_frequently_asked_questions) {
    gsap.fromTo('#sc-sports-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_sports_section_international_support = document.getElementById('sc-sports-section-international-support');
  if (sc_sports_section_international_support) {
    gsap.fromTo('#sc-sports-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_sports_list_our_credentials = document.getElementById('sc-sports-list-our-credentials');
  if (sc_sports_list_our_credentials) {
    gsap.from('#sc-sports-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_sports_list_related_services = document.getElementById('sc-sports-list-related-services');
  if (sc_sports_list_related_services) {
    gsap.from('#sc-sports-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_sports_section_youre_in_good_hands = document.getElementById('sc-sports-section-youre-in-good-hands');
  if (sc_sports_section_youre_in_good_hands) {
    gsap.fromTo('#sc-sports-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_sports_section_21 = document.getElementById('sc-sports-section-21');
  if (sc_sports_section_21) {
    gsap.fromTo('#sc-sports-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa = document.getElementById('sc-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa');
  if (sc_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa) {
    gsap.from('#sc-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa input, #sc-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_medical_list_quick_facts = document.getElementById('sc-medical-list-quick-facts');
  if (sc_medical_list_quick_facts) {
    gsap.from('#sc-medical-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_medical_list_common_challenges_applicants_face = document.getElementById('sc-medical-list-common-challenges-applicants-face');
  if (sc_medical_list_common_challenges_applicants_face) {
    gsap.from('#sc-medical-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_medical_list_how_we_solve_these_challenges = document.getElementById('sc-medical-list-how-we-solve-these-challenges');
  if (sc_medical_list_how_we_solve_these_challenges) {
    gsap.from('#sc-medical-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_medical_section_visa_overview = document.getElementById('sc-medical-section-visa-overview');
  if (sc_medical_section_visa_overview) {
    gsap.fromTo('#sc-medical-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_medical_form_who_is_this_visa_for = document.getElementById('sc-medical-form-who-is-this-visa-for');
  if (sc_medical_form_who_is_this_visa_for) {
    gsap.from('#sc-medical-form-who-is-this-visa-for input, #sc-medical-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_medical_list_required_documents = document.getElementById('sc-medical-list-required-documents');
  if (sc_medical_list_required_documents) {
    gsap.from('#sc-medical-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_medical_list_application_process = document.getElementById('sc-medical-list-application-process');
  if (sc_medical_list_application_process) {
    gsap.from('#sc-medical-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_medical_section_timelines_deadlines = document.getElementById('sc-medical-section-timelines-deadlines');
  if (sc_medical_section_timelines_deadlines) {
    gsap.fromTo('#sc-medical-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_medical_section_fees_costs = document.getElementById('sc-medical-section-fees-costs');
  if (sc_medical_section_fees_costs) {
    gsap.fromTo('#sc-medical-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_medical_list_risks_common_mistakes = document.getElementById('sc-medical-list-risks-common-mistakes');
  if (sc_medical_list_risks_common_mistakes) {
    gsap.from('#sc-medical-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_medical_section_diy_vs_professional_assistance = document.getElementById('sc-medical-section-diy-vs-professional-assistance');
  if (sc_medical_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-medical-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_medical_section_santa_catarina_specific_context = document.getElementById('sc-medical-section-santa-catarina-specific-context');
  if (sc_medical_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-medical-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_medical_section_what_our_clients_say = document.getElementById('sc-medical-section-what-our-clients-say');
  if (sc_medical_section_what_our_clients_say) {
    gsap.fromTo('#sc-medical-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_medical_section_frequently_asked_questions = document.getElementById('sc-medical-section-frequently-asked-questions');
  if (sc_medical_section_frequently_asked_questions) {
    gsap.fromTo('#sc-medical-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_medical_section_international_support = document.getElementById('sc-medical-section-international-support');
  if (sc_medical_section_international_support) {
    gsap.fromTo('#sc-medical-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_medical_list_our_credentials = document.getElementById('sc-medical-list-our-credentials');
  if (sc_medical_list_our_credentials) {
    gsap.from('#sc-medical-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_medical_list_related_services = document.getElementById('sc-medical-list-related-services');
  if (sc_medical_list_related_services) {
    gsap.from('#sc-medical-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_medical_section_youre_in_good_hands = document.getElementById('sc-medical-section-youre-in-good-hands');
  if (sc_medical_section_youre_in_good_hands) {
    gsap.fromTo('#sc-medical-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_medical_section_21 = document.getElementById('sc-medical-section-21');
  if (sc_medical_section_21) {
    gsap.fromTo('#sc-medical-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa = document.getElementById('sc-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa');
  if (sc_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa) {
    gsap.from('#sc-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa input, #sc-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_tourist_list_quick_facts = document.getElementById('sc-tourist-list-quick-facts');
  if (sc_tourist_list_quick_facts) {
    gsap.from('#sc-tourist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_tourist_list_common_challenges_applicants_face = document.getElementById('sc-tourist-list-common-challenges-applicants-face');
  if (sc_tourist_list_common_challenges_applicants_face) {
    gsap.from('#sc-tourist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_tourist_list_how_we_solve_these_challenges = document.getElementById('sc-tourist-list-how-we-solve-these-challenges');
  if (sc_tourist_list_how_we_solve_these_challenges) {
    gsap.from('#sc-tourist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_tourist_section_visa_overview = document.getElementById('sc-tourist-section-visa-overview');
  if (sc_tourist_section_visa_overview) {
    gsap.fromTo('#sc-tourist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_tourist_form_who_is_this_visa_for = document.getElementById('sc-tourist-form-who-is-this-visa-for');
  if (sc_tourist_form_who_is_this_visa_for) {
    gsap.from('#sc-tourist-form-who-is-this-visa-for input, #sc-tourist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_tourist_list_required_documents = document.getElementById('sc-tourist-list-required-documents');
  if (sc_tourist_list_required_documents) {
    gsap.from('#sc-tourist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_tourist_list_application_process = document.getElementById('sc-tourist-list-application-process');
  if (sc_tourist_list_application_process) {
    gsap.from('#sc-tourist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_tourist_section_timelines_deadlines = document.getElementById('sc-tourist-section-timelines-deadlines');
  if (sc_tourist_section_timelines_deadlines) {
    gsap.fromTo('#sc-tourist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_tourist_section_fees_costs = document.getElementById('sc-tourist-section-fees-costs');
  if (sc_tourist_section_fees_costs) {
    gsap.fromTo('#sc-tourist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_tourist_list_risks_common_mistakes = document.getElementById('sc-tourist-list-risks-common-mistakes');
  if (sc_tourist_list_risks_common_mistakes) {
    gsap.from('#sc-tourist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_tourist_section_diy_vs_professional_assistance = document.getElementById('sc-tourist-section-diy-vs-professional-assistance');
  if (sc_tourist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-tourist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_tourist_section_santa_catarina_specific_context = document.getElementById('sc-tourist-section-santa-catarina-specific-context');
  if (sc_tourist_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-tourist-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_tourist_section_what_our_clients_say = document.getElementById('sc-tourist-section-what-our-clients-say');
  if (sc_tourist_section_what_our_clients_say) {
    gsap.fromTo('#sc-tourist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_tourist_section_frequently_asked_questions = document.getElementById('sc-tourist-section-frequently-asked-questions');
  if (sc_tourist_section_frequently_asked_questions) {
    gsap.fromTo('#sc-tourist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_tourist_section_international_support = document.getElementById('sc-tourist-section-international-support');
  if (sc_tourist_section_international_support) {
    gsap.fromTo('#sc-tourist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_tourist_list_our_credentials = document.getElementById('sc-tourist-list-our-credentials');
  if (sc_tourist_list_our_credentials) {
    gsap.from('#sc-tourist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_tourist_list_related_services = document.getElementById('sc-tourist-list-related-services');
  if (sc_tourist_list_related_services) {
    gsap.from('#sc-tourist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_tourist_section_youre_in_good_hands = document.getElementById('sc-tourist-section-youre-in-good-hands');
  if (sc_tourist_section_youre_in_good_hands) {
    gsap.fromTo('#sc-tourist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_tourist_section_21 = document.getElementById('sc-tourist-section-21');
  if (sc_tourist_section_21) {
    gsap.fromTo('#sc-tourist-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_transit_form_transit_through_brazil_with_the_transit_visa = document.getElementById('sc-transit-form-transit-through-brazil-with-the-transit-visa');
  if (sc_transit_form_transit_through_brazil_with_the_transit_visa) {
    gsap.from('#sc-transit-form-transit-through-brazil-with-the-transit-visa input, #sc-transit-form-transit-through-brazil-with-the-transit-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_transit_list_quick_facts = document.getElementById('sc-transit-list-quick-facts');
  if (sc_transit_list_quick_facts) {
    gsap.from('#sc-transit-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_transit_list_common_challenges_applicants_face = document.getElementById('sc-transit-list-common-challenges-applicants-face');
  if (sc_transit_list_common_challenges_applicants_face) {
    gsap.from('#sc-transit-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_transit_list_how_we_solve_these_challenges = document.getElementById('sc-transit-list-how-we-solve-these-challenges');
  if (sc_transit_list_how_we_solve_these_challenges) {
    gsap.from('#sc-transit-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_transit_section_visa_overview = document.getElementById('sc-transit-section-visa-overview');
  if (sc_transit_section_visa_overview) {
    gsap.fromTo('#sc-transit-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_transit_form_who_is_this_visa_for = document.getElementById('sc-transit-form-who-is-this-visa-for');
  if (sc_transit_form_who_is_this_visa_for) {
    gsap.from('#sc-transit-form-who-is-this-visa-for input, #sc-transit-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_transit_list_required_documents = document.getElementById('sc-transit-list-required-documents');
  if (sc_transit_list_required_documents) {
    gsap.from('#sc-transit-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_transit_list_application_process = document.getElementById('sc-transit-list-application-process');
  if (sc_transit_list_application_process) {
    gsap.from('#sc-transit-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_transit_section_timelines_deadlines = document.getElementById('sc-transit-section-timelines-deadlines');
  if (sc_transit_section_timelines_deadlines) {
    gsap.fromTo('#sc-transit-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_transit_section_fees_costs = document.getElementById('sc-transit-section-fees-costs');
  if (sc_transit_section_fees_costs) {
    gsap.fromTo('#sc-transit-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_transit_list_risks_common_mistakes = document.getElementById('sc-transit-list-risks-common-mistakes');
  if (sc_transit_list_risks_common_mistakes) {
    gsap.from('#sc-transit-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_transit_section_diy_vs_professional_assistance = document.getElementById('sc-transit-section-diy-vs-professional-assistance');
  if (sc_transit_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-transit-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_transit_section_santa_catarina_specific_context = document.getElementById('sc-transit-section-santa-catarina-specific-context');
  if (sc_transit_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-transit-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_transit_section_what_our_clients_say = document.getElementById('sc-transit-section-what-our-clients-say');
  if (sc_transit_section_what_our_clients_say) {
    gsap.fromTo('#sc-transit-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_transit_section_frequently_asked_questions = document.getElementById('sc-transit-section-frequently-asked-questions');
  if (sc_transit_section_frequently_asked_questions) {
    gsap.fromTo('#sc-transit-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_transit_section_international_support = document.getElementById('sc-transit-section-international-support');
  if (sc_transit_section_international_support) {
    gsap.fromTo('#sc-transit-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_transit_list_our_credentials = document.getElementById('sc-transit-list-our-credentials');
  if (sc_transit_list_our_credentials) {
    gsap.from('#sc-transit-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_transit_list_related_services = document.getElementById('sc-transit-list-related-services');
  if (sc_transit_list_related_services) {
    gsap.from('#sc-transit-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_transit_section_youre_in_good_hands = document.getElementById('sc-transit-section-youre-in-good-hands');
  if (sc_transit_section_youre_in_good_hands) {
    gsap.fromTo('#sc-transit-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_transit_section_21 = document.getElementById('sc-transit-section-21');
  if (sc_transit_section_21) {
    gsap.fromTo('#sc-transit-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_student_form_study_in_brazil_with_the_student_visa = document.getElementById('sc-student-form-study-in-brazil-with-the-student-visa');
  if (sc_student_form_study_in_brazil_with_the_student_visa) {
    gsap.from('#sc-student-form-study-in-brazil-with-the-student-visa input, #sc-student-form-study-in-brazil-with-the-student-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_student_list_quick_facts = document.getElementById('sc-student-list-quick-facts');
  if (sc_student_list_quick_facts) {
    gsap.from('#sc-student-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_student_list_common_challenges_applicants_face = document.getElementById('sc-student-list-common-challenges-applicants-face');
  if (sc_student_list_common_challenges_applicants_face) {
    gsap.from('#sc-student-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_student_list_how_we_solve_these_challenges = document.getElementById('sc-student-list-how-we-solve-these-challenges');
  if (sc_student_list_how_we_solve_these_challenges) {
    gsap.from('#sc-student-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_student_section_visa_overview = document.getElementById('sc-student-section-visa-overview');
  if (sc_student_section_visa_overview) {
    gsap.fromTo('#sc-student-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_student_form_who_is_this_visa_for = document.getElementById('sc-student-form-who-is-this-visa-for');
  if (sc_student_form_who_is_this_visa_for) {
    gsap.from('#sc-student-form-who-is-this-visa-for input, #sc-student-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_student_list_required_documents = document.getElementById('sc-student-list-required-documents');
  if (sc_student_list_required_documents) {
    gsap.from('#sc-student-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_student_list_application_process = document.getElementById('sc-student-list-application-process');
  if (sc_student_list_application_process) {
    gsap.from('#sc-student-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_student_section_timelines_deadlines = document.getElementById('sc-student-section-timelines-deadlines');
  if (sc_student_section_timelines_deadlines) {
    gsap.fromTo('#sc-student-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_student_section_fees_costs = document.getElementById('sc-student-section-fees-costs');
  if (sc_student_section_fees_costs) {
    gsap.fromTo('#sc-student-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_student_list_risks_common_mistakes = document.getElementById('sc-student-list-risks-common-mistakes');
  if (sc_student_list_risks_common_mistakes) {
    gsap.from('#sc-student-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_student_section_diy_vs_professional_assistance = document.getElementById('sc-student-section-diy-vs-professional-assistance');
  if (sc_student_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-student-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_student_section_santa_catarina_specific_context = document.getElementById('sc-student-section-santa-catarina-specific-context');
  if (sc_student_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-student-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_student_section_what_our_clients_say = document.getElementById('sc-student-section-what-our-clients-say');
  if (sc_student_section_what_our_clients_say) {
    gsap.fromTo('#sc-student-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_student_section_frequently_asked_questions = document.getElementById('sc-student-section-frequently-asked-questions');
  if (sc_student_section_frequently_asked_questions) {
    gsap.fromTo('#sc-student-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_student_section_international_support = document.getElementById('sc-student-section-international-support');
  if (sc_student_section_international_support) {
    gsap.fromTo('#sc-student-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_student_list_our_credentials = document.getElementById('sc-student-list-our-credentials');
  if (sc_student_list_our_credentials) {
    gsap.from('#sc-student-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_student_list_related_services = document.getElementById('sc-student-list-related-services');
  if (sc_student_list_related_services) {
    gsap.from('#sc-student-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_student_section_youre_in_good_hands = document.getElementById('sc-student-section-youre-in-good-hands');
  if (sc_student_section_youre_in_good_hands) {
    gsap.fromTo('#sc-student-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_student_section_21 = document.getElementById('sc-student-section-21');
  if (sc_student_section_21) {
    gsap.fromTo('#sc-student-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_business_form_conduct_business_in_brazil_with_the_business_visa = document.getElementById('sc-business-form-conduct-business-in-brazil-with-the-business-visa');
  if (sc_business_form_conduct_business_in_brazil_with_the_business_visa) {
    gsap.from('#sc-business-form-conduct-business-in-brazil-with-the-business-visa input, #sc-business-form-conduct-business-in-brazil-with-the-business-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_business_list_quick_facts = document.getElementById('sc-business-list-quick-facts');
  if (sc_business_list_quick_facts) {
    gsap.from('#sc-business-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_business_list_common_challenges_applicants_face = document.getElementById('sc-business-list-common-challenges-applicants-face');
  if (sc_business_list_common_challenges_applicants_face) {
    gsap.from('#sc-business-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_business_list_how_we_solve_these_challenges = document.getElementById('sc-business-list-how-we-solve-these-challenges');
  if (sc_business_list_how_we_solve_these_challenges) {
    gsap.from('#sc-business-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_business_section_visa_overview = document.getElementById('sc-business-section-visa-overview');
  if (sc_business_section_visa_overview) {
    gsap.fromTo('#sc-business-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_business_form_who_is_this_visa_for = document.getElementById('sc-business-form-who-is-this-visa-for');
  if (sc_business_form_who_is_this_visa_for) {
    gsap.from('#sc-business-form-who-is-this-visa-for input, #sc-business-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_business_list_required_documents = document.getElementById('sc-business-list-required-documents');
  if (sc_business_list_required_documents) {
    gsap.from('#sc-business-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_business_list_application_process = document.getElementById('sc-business-list-application-process');
  if (sc_business_list_application_process) {
    gsap.from('#sc-business-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_business_section_timelines_deadlines = document.getElementById('sc-business-section-timelines-deadlines');
  if (sc_business_section_timelines_deadlines) {
    gsap.fromTo('#sc-business-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_business_section_fees_costs = document.getElementById('sc-business-section-fees-costs');
  if (sc_business_section_fees_costs) {
    gsap.fromTo('#sc-business-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_business_list_risks_common_mistakes = document.getElementById('sc-business-list-risks-common-mistakes');
  if (sc_business_list_risks_common_mistakes) {
    gsap.from('#sc-business-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_business_section_diy_vs_professional_assistance = document.getElementById('sc-business-section-diy-vs-professional-assistance');
  if (sc_business_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-business-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_business_section_santa_catarina_specific_context = document.getElementById('sc-business-section-santa-catarina-specific-context');
  if (sc_business_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-business-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_business_section_what_our_clients_say = document.getElementById('sc-business-section-what-our-clients-say');
  if (sc_business_section_what_our_clients_say) {
    gsap.fromTo('#sc-business-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_business_section_frequently_asked_questions = document.getElementById('sc-business-section-frequently-asked-questions');
  if (sc_business_section_frequently_asked_questions) {
    gsap.fromTo('#sc-business-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_business_section_international_support = document.getElementById('sc-business-section-international-support');
  if (sc_business_section_international_support) {
    gsap.fromTo('#sc-business-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_business_list_our_credentials = document.getElementById('sc-business-list-our-credentials');
  if (sc_business_list_our_credentials) {
    gsap.from('#sc-business-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_business_list_related_services = document.getElementById('sc-business-list-related-services');
  if (sc_business_list_related_services) {
    gsap.from('#sc-business-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_business_section_youre_in_good_hands = document.getElementById('sc-business-section-youre-in-good-hands');
  if (sc_business_section_youre_in_good_hands) {
    gsap.fromTo('#sc-business-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_business_section_21 = document.getElementById('sc-business-section-21');
  if (sc_business_section_21) {
    gsap.fromTo('#sc-business-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_research_form_conduct_research_in_brazil_with_the_research_visa = document.getElementById('sc-research-form-conduct-research-in-brazil-with-the-research-visa');
  if (sc_research_form_conduct_research_in_brazil_with_the_research_visa) {
    gsap.from('#sc-research-form-conduct-research-in-brazil-with-the-research-visa input, #sc-research-form-conduct-research-in-brazil-with-the-research-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_research_list_quick_facts = document.getElementById('sc-research-list-quick-facts');
  if (sc_research_list_quick_facts) {
    gsap.from('#sc-research-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_research_list_common_challenges_applicants_face = document.getElementById('sc-research-list-common-challenges-applicants-face');
  if (sc_research_list_common_challenges_applicants_face) {
    gsap.from('#sc-research-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_research_list_how_we_solve_these_challenges = document.getElementById('sc-research-list-how-we-solve-these-challenges');
  if (sc_research_list_how_we_solve_these_challenges) {
    gsap.from('#sc-research-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_research_section_visa_overview = document.getElementById('sc-research-section-visa-overview');
  if (sc_research_section_visa_overview) {
    gsap.fromTo('#sc-research-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_research_form_who_is_this_visa_for = document.getElementById('sc-research-form-who-is-this-visa-for');
  if (sc_research_form_who_is_this_visa_for) {
    gsap.from('#sc-research-form-who-is-this-visa-for input, #sc-research-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_research_list_required_documents = document.getElementById('sc-research-list-required-documents');
  if (sc_research_list_required_documents) {
    gsap.from('#sc-research-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_research_list_application_process = document.getElementById('sc-research-list-application-process');
  if (sc_research_list_application_process) {
    gsap.from('#sc-research-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_research_section_timelines_deadlines = document.getElementById('sc-research-section-timelines-deadlines');
  if (sc_research_section_timelines_deadlines) {
    gsap.fromTo('#sc-research-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_research_section_fees_costs = document.getElementById('sc-research-section-fees-costs');
  if (sc_research_section_fees_costs) {
    gsap.fromTo('#sc-research-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_research_list_risks_common_mistakes = document.getElementById('sc-research-list-risks-common-mistakes');
  if (sc_research_list_risks_common_mistakes) {
    gsap.from('#sc-research-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_research_section_diy_vs_professional_assistance = document.getElementById('sc-research-section-diy-vs-professional-assistance');
  if (sc_research_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-research-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_research_section_santa_catarina_specific_context = document.getElementById('sc-research-section-santa-catarina-specific-context');
  if (sc_research_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-research-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_research_section_what_our_clients_say = document.getElementById('sc-research-section-what-our-clients-say');
  if (sc_research_section_what_our_clients_say) {
    gsap.fromTo('#sc-research-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_research_section_frequently_asked_questions = document.getElementById('sc-research-section-frequently-asked-questions');
  if (sc_research_section_frequently_asked_questions) {
    gsap.fromTo('#sc-research-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_research_section_international_support = document.getElementById('sc-research-section-international-support');
  if (sc_research_section_international_support) {
    gsap.fromTo('#sc-research-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_research_list_our_credentials = document.getElementById('sc-research-list-our-credentials');
  if (sc_research_list_our_credentials) {
    gsap.from('#sc-research-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_research_list_related_services = document.getElementById('sc-research-list-related-services');
  if (sc_research_list_related_services) {
    gsap.from('#sc-research-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_research_section_youre_in_good_hands = document.getElementById('sc-research-section-youre-in-good-hands');
  if (sc_research_section_youre_in_good_hands) {
    gsap.fromTo('#sc-research-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_research_section_21 = document.getElementById('sc-research-section-21');
  if (sc_research_section_21) {
    gsap.fromTo('#sc-research-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_diplomatic_form_official_diplomatic_visa_for_brazil_missions = document.getElementById('sc-diplomatic-form-official-diplomatic-visa-for-brazil-missions');
  if (sc_diplomatic_form_official_diplomatic_visa_for_brazil_missions) {
    gsap.from('#sc-diplomatic-form-official-diplomatic-visa-for-brazil-missions input, #sc-diplomatic-form-official-diplomatic-visa-for-brazil-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_diplomatic_list_quick_facts = document.getElementById('sc-diplomatic-list-quick-facts');
  if (sc_diplomatic_list_quick_facts) {
    gsap.from('#sc-diplomatic-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_diplomatic_list_common_challenges_applicants_face = document.getElementById('sc-diplomatic-list-common-challenges-applicants-face');
  if (sc_diplomatic_list_common_challenges_applicants_face) {
    gsap.from('#sc-diplomatic-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_diplomatic_list_how_we_solve_these_challenges = document.getElementById('sc-diplomatic-list-how-we-solve-these-challenges');
  if (sc_diplomatic_list_how_we_solve_these_challenges) {
    gsap.from('#sc-diplomatic-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_diplomatic_section_visa_overview = document.getElementById('sc-diplomatic-section-visa-overview');
  if (sc_diplomatic_section_visa_overview) {
    gsap.fromTo('#sc-diplomatic-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_diplomatic_form_who_is_this_visa_for = document.getElementById('sc-diplomatic-form-who-is-this-visa-for');
  if (sc_diplomatic_form_who_is_this_visa_for) {
    gsap.from('#sc-diplomatic-form-who-is-this-visa-for input, #sc-diplomatic-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_diplomatic_list_required_documents = document.getElementById('sc-diplomatic-list-required-documents');
  if (sc_diplomatic_list_required_documents) {
    gsap.from('#sc-diplomatic-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_diplomatic_list_application_process = document.getElementById('sc-diplomatic-list-application-process');
  if (sc_diplomatic_list_application_process) {
    gsap.from('#sc-diplomatic-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_diplomatic_section_timelines_deadlines = document.getElementById('sc-diplomatic-section-timelines-deadlines');
  if (sc_diplomatic_section_timelines_deadlines) {
    gsap.fromTo('#sc-diplomatic-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_diplomatic_section_fees_costs = document.getElementById('sc-diplomatic-section-fees-costs');
  if (sc_diplomatic_section_fees_costs) {
    gsap.fromTo('#sc-diplomatic-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_diplomatic_list_risks_common_mistakes = document.getElementById('sc-diplomatic-list-risks-common-mistakes');
  if (sc_diplomatic_list_risks_common_mistakes) {
    gsap.from('#sc-diplomatic-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_diplomatic_section_diy_vs_professional_assistance = document.getElementById('sc-diplomatic-section-diy-vs-professional-assistance');
  if (sc_diplomatic_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-diplomatic-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_diplomatic_section_santa_catarina_specific_context = document.getElementById('sc-diplomatic-section-santa-catarina-specific-context');
  if (sc_diplomatic_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-diplomatic-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_diplomatic_section_what_our_clients_say = document.getElementById('sc-diplomatic-section-what-our-clients-say');
  if (sc_diplomatic_section_what_our_clients_say) {
    gsap.fromTo('#sc-diplomatic-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_diplomatic_section_frequently_asked_questions = document.getElementById('sc-diplomatic-section-frequently-asked-questions');
  if (sc_diplomatic_section_frequently_asked_questions) {
    gsap.fromTo('#sc-diplomatic-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_diplomatic_section_international_support = document.getElementById('sc-diplomatic-section-international-support');
  if (sc_diplomatic_section_international_support) {
    gsap.fromTo('#sc-diplomatic-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_diplomatic_list_our_credentials = document.getElementById('sc-diplomatic-list-our-credentials');
  if (sc_diplomatic_list_our_credentials) {
    gsap.from('#sc-diplomatic-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_diplomatic_list_related_services = document.getElementById('sc-diplomatic-list-related-services');
  if (sc_diplomatic_list_related_services) {
    gsap.from('#sc-diplomatic-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_diplomatic_section_youre_in_good_hands = document.getElementById('sc-diplomatic-section-youre-in-good-hands');
  if (sc_diplomatic_section_youre_in_good_hands) {
    gsap.fromTo('#sc-diplomatic-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_diplomatic_section_21 = document.getElementById('sc-diplomatic-section-21');
  if (sc_diplomatic_section_21) {
    gsap.fromTo('#sc-diplomatic-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_journalist_form_cover_news_in_brazil_with_the_journalist_visa = document.getElementById('sc-journalist-form-cover-news-in-brazil-with-the-journalist-visa');
  if (sc_journalist_form_cover_news_in_brazil_with_the_journalist_visa) {
    gsap.from('#sc-journalist-form-cover-news-in-brazil-with-the-journalist-visa input, #sc-journalist-form-cover-news-in-brazil-with-the-journalist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_journalist_list_quick_facts = document.getElementById('sc-journalist-list-quick-facts');
  if (sc_journalist_list_quick_facts) {
    gsap.from('#sc-journalist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_journalist_list_common_challenges_applicants_face = document.getElementById('sc-journalist-list-common-challenges-applicants-face');
  if (sc_journalist_list_common_challenges_applicants_face) {
    gsap.from('#sc-journalist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_journalist_list_how_we_solve_these_challenges = document.getElementById('sc-journalist-list-how-we-solve-these-challenges');
  if (sc_journalist_list_how_we_solve_these_challenges) {
    gsap.from('#sc-journalist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_journalist_section_visa_overview = document.getElementById('sc-journalist-section-visa-overview');
  if (sc_journalist_section_visa_overview) {
    gsap.fromTo('#sc-journalist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_journalist_form_who_is_this_visa_for = document.getElementById('sc-journalist-form-who-is-this-visa-for');
  if (sc_journalist_form_who_is_this_visa_for) {
    gsap.from('#sc-journalist-form-who-is-this-visa-for input, #sc-journalist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_journalist_list_required_documents = document.getElementById('sc-journalist-list-required-documents');
  if (sc_journalist_list_required_documents) {
    gsap.from('#sc-journalist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_journalist_list_application_process = document.getElementById('sc-journalist-list-application-process');
  if (sc_journalist_list_application_process) {
    gsap.from('#sc-journalist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_journalist_section_timelines_deadlines = document.getElementById('sc-journalist-section-timelines-deadlines');
  if (sc_journalist_section_timelines_deadlines) {
    gsap.fromTo('#sc-journalist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_journalist_section_fees_costs = document.getElementById('sc-journalist-section-fees-costs');
  if (sc_journalist_section_fees_costs) {
    gsap.fromTo('#sc-journalist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_journalist_list_risks_common_mistakes = document.getElementById('sc-journalist-list-risks-common-mistakes');
  if (sc_journalist_list_risks_common_mistakes) {
    gsap.from('#sc-journalist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_journalist_section_diy_vs_professional_assistance = document.getElementById('sc-journalist-section-diy-vs-professional-assistance');
  if (sc_journalist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-journalist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_journalist_section_santa_catarina_specific_context = document.getElementById('sc-journalist-section-santa-catarina-specific-context');
  if (sc_journalist_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-journalist-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_journalist_section_what_our_clients_say = document.getElementById('sc-journalist-section-what-our-clients-say');
  if (sc_journalist_section_what_our_clients_say) {
    gsap.fromTo('#sc-journalist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_journalist_section_frequently_asked_questions = document.getElementById('sc-journalist-section-frequently-asked-questions');
  if (sc_journalist_section_frequently_asked_questions) {
    gsap.fromTo('#sc-journalist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_journalist_section_international_support = document.getElementById('sc-journalist-section-international-support');
  if (sc_journalist_section_international_support) {
    gsap.fromTo('#sc-journalist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_journalist_list_our_credentials = document.getElementById('sc-journalist-list-our-credentials');
  if (sc_journalist_list_our_credentials) {
    gsap.from('#sc-journalist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_journalist_list_related_services = document.getElementById('sc-journalist-list-related-services');
  if (sc_journalist_list_related_services) {
    gsap.from('#sc-journalist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_journalist_section_youre_in_good_hands = document.getElementById('sc-journalist-section-youre-in-good-hands');
  if (sc_journalist_section_youre_in_good_hands) {
    gsap.fromTo('#sc-journalist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_journalist_section_21 = document.getElementById('sc-journalist-section-21');
  if (sc_journalist_section_21) {
    gsap.fromTo('#sc-journalist-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_fines_form_resolve_immigration_fines_in_brazil = document.getElementById('sc-fines-form-resolve-immigration-fines-in-brazil');
  if (sc_fines_form_resolve_immigration_fines_in_brazil) {
    gsap.from('#sc-fines-form-resolve-immigration-fines-in-brazil input, #sc-fines-form-resolve-immigration-fines-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_fines_list_quick_facts = document.getElementById('sc-fines-list-quick-facts');
  if (sc_fines_list_quick_facts) {
    gsap.from('#sc-fines-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_fines_list_common_challenges_applicants_face = document.getElementById('sc-fines-list-common-challenges-applicants-face');
  if (sc_fines_list_common_challenges_applicants_face) {
    gsap.from('#sc-fines-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_fines_list_how_we_solve_these_challenges = document.getElementById('sc-fines-list-how-we-solve-these-challenges');
  if (sc_fines_list_how_we_solve_these_challenges) {
    gsap.from('#sc-fines-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_fines_section_service_overview = document.getElementById('sc-fines-section-service-overview');
  if (sc_fines_section_service_overview) {
    gsap.fromTo('#sc-fines-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_fines_form_who_is_this_service_for = document.getElementById('sc-fines-form-who-is-this-service-for');
  if (sc_fines_form_who_is_this_service_for) {
    gsap.from('#sc-fines-form-who-is-this-service-for input, #sc-fines-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_fines_list_required_documents = document.getElementById('sc-fines-list-required-documents');
  if (sc_fines_list_required_documents) {
    gsap.from('#sc-fines-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_fines_list_process = document.getElementById('sc-fines-list-process');
  if (sc_fines_list_process) {
    gsap.from('#sc-fines-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_fines_section_timelines_deadlines = document.getElementById('sc-fines-section-timelines-deadlines');
  if (sc_fines_section_timelines_deadlines) {
    gsap.fromTo('#sc-fines-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_fines_section_fees_costs = document.getElementById('sc-fines-section-fees-costs');
  if (sc_fines_section_fees_costs) {
    gsap.fromTo('#sc-fines-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_fines_list_risks_common_mistakes = document.getElementById('sc-fines-list-risks-common-mistakes');
  if (sc_fines_list_risks_common_mistakes) {
    gsap.from('#sc-fines-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_fines_section_diy_vs_professional_assistance = document.getElementById('sc-fines-section-diy-vs-professional-assistance');
  if (sc_fines_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-fines-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_fines_section_santa_catarina_specific_context = document.getElementById('sc-fines-section-santa-catarina-specific-context');
  if (sc_fines_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-fines-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_fines_section_what_our_clients_say = document.getElementById('sc-fines-section-what-our-clients-say');
  if (sc_fines_section_what_our_clients_say) {
    gsap.fromTo('#sc-fines-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_fines_section_frequently_asked_questions = document.getElementById('sc-fines-section-frequently-asked-questions');
  if (sc_fines_section_frequently_asked_questions) {
    gsap.fromTo('#sc-fines-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_fines_section_international_support = document.getElementById('sc-fines-section-international-support');
  if (sc_fines_section_international_support) {
    gsap.fromTo('#sc-fines-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_fines_list_our_credentials = document.getElementById('sc-fines-list-our-credentials');
  if (sc_fines_list_our_credentials) {
    gsap.from('#sc-fines-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_fines_list_related_services = document.getElementById('sc-fines-list-related-services');
  if (sc_fines_list_related_services) {
    gsap.from('#sc-fines-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_fines_section_youre_in_good_hands = document.getElementById('sc-fines-section-youre-in-good-hands');
  if (sc_fines_section_youre_in_good_hands) {
    gsap.fromTo('#sc-fines-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_fines_section_21 = document.getElementById('sc-fines-section-21');
  if (sc_fines_section_21) {
    gsap.fromTo('#sc-fines-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_deportation_form_deportation_assistance_in_brazil = document.getElementById('sc-deportation-form-deportation-assistance-in-brazil');
  if (sc_deportation_form_deportation_assistance_in_brazil) {
    gsap.from('#sc-deportation-form-deportation-assistance-in-brazil input, #sc-deportation-form-deportation-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_deportation_list_quick_facts = document.getElementById('sc-deportation-list-quick-facts');
  if (sc_deportation_list_quick_facts) {
    gsap.from('#sc-deportation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_deportation_list_common_challenges_applicants_face = document.getElementById('sc-deportation-list-common-challenges-applicants-face');
  if (sc_deportation_list_common_challenges_applicants_face) {
    gsap.from('#sc-deportation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_deportation_list_how_we_solve_these_challenges = document.getElementById('sc-deportation-list-how-we-solve-these-challenges');
  if (sc_deportation_list_how_we_solve_these_challenges) {
    gsap.from('#sc-deportation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_deportation_section_service_overview = document.getElementById('sc-deportation-section-service-overview');
  if (sc_deportation_section_service_overview) {
    gsap.fromTo('#sc-deportation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_deportation_form_who_is_this_service_for = document.getElementById('sc-deportation-form-who-is-this-service-for');
  if (sc_deportation_form_who_is_this_service_for) {
    gsap.from('#sc-deportation-form-who-is-this-service-for input, #sc-deportation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_deportation_list_required_documents = document.getElementById('sc-deportation-list-required-documents');
  if (sc_deportation_list_required_documents) {
    gsap.from('#sc-deportation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_deportation_list_process = document.getElementById('sc-deportation-list-process');
  if (sc_deportation_list_process) {
    gsap.from('#sc-deportation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_deportation_section_timelines_deadlines = document.getElementById('sc-deportation-section-timelines-deadlines');
  if (sc_deportation_section_timelines_deadlines) {
    gsap.fromTo('#sc-deportation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_deportation_section_fees_costs = document.getElementById('sc-deportation-section-fees-costs');
  if (sc_deportation_section_fees_costs) {
    gsap.fromTo('#sc-deportation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_deportation_list_risks_common_mistakes = document.getElementById('sc-deportation-list-risks-common-mistakes');
  if (sc_deportation_list_risks_common_mistakes) {
    gsap.from('#sc-deportation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_deportation_section_diy_vs_professional_assistance = document.getElementById('sc-deportation-section-diy-vs-professional-assistance');
  if (sc_deportation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-deportation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_deportation_section_santa_catarina_specific_context = document.getElementById('sc-deportation-section-santa-catarina-specific-context');
  if (sc_deportation_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-deportation-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_deportation_section_what_our_clients_say = document.getElementById('sc-deportation-section-what-our-clients-say');
  if (sc_deportation_section_what_our_clients_say) {
    gsap.fromTo('#sc-deportation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_deportation_section_frequently_asked_questions = document.getElementById('sc-deportation-section-frequently-asked-questions');
  if (sc_deportation_section_frequently_asked_questions) {
    gsap.fromTo('#sc-deportation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_deportation_section_international_support = document.getElementById('sc-deportation-section-international-support');
  if (sc_deportation_section_international_support) {
    gsap.fromTo('#sc-deportation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_deportation_list_our_credentials = document.getElementById('sc-deportation-list-our-credentials');
  if (sc_deportation_list_our_credentials) {
    gsap.from('#sc-deportation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_deportation_list_related_services = document.getElementById('sc-deportation-list-related-services');
  if (sc_deportation_list_related_services) {
    gsap.from('#sc-deportation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_deportation_section_youre_in_good_hands = document.getElementById('sc-deportation-section-youre-in-good-hands');
  if (sc_deportation_section_youre_in_good_hands) {
    gsap.fromTo('#sc-deportation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_deportation_section_21 = document.getElementById('sc-deportation-section-21');
  if (sc_deportation_section_21) {
    gsap.fromTo('#sc-deportation-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_translation_form_sworn_document_translation_services_in_brazil = document.getElementById('sc-translation-form-sworn-document-translation-services-in-brazil');
  if (sc_translation_form_sworn_document_translation_services_in_brazil) {
    gsap.from('#sc-translation-form-sworn-document-translation-services-in-brazil input, #sc-translation-form-sworn-document-translation-services-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_translation_list_quick_facts = document.getElementById('sc-translation-list-quick-facts');
  if (sc_translation_list_quick_facts) {
    gsap.from('#sc-translation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_translation_list_common_challenges_applicants_face = document.getElementById('sc-translation-list-common-challenges-applicants-face');
  if (sc_translation_list_common_challenges_applicants_face) {
    gsap.from('#sc-translation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_translation_list_how_we_solve_these_challenges = document.getElementById('sc-translation-list-how-we-solve-these-challenges');
  if (sc_translation_list_how_we_solve_these_challenges) {
    gsap.from('#sc-translation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_translation_section_service_overview = document.getElementById('sc-translation-section-service-overview');
  if (sc_translation_section_service_overview) {
    gsap.fromTo('#sc-translation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_translation_form_who_is_this_service_for = document.getElementById('sc-translation-form-who-is-this-service-for');
  if (sc_translation_form_who_is_this_service_for) {
    gsap.from('#sc-translation-form-who-is-this-service-for input, #sc-translation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_translation_list_required_documents = document.getElementById('sc-translation-list-required-documents');
  if (sc_translation_list_required_documents) {
    gsap.from('#sc-translation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_translation_list_process = document.getElementById('sc-translation-list-process');
  if (sc_translation_list_process) {
    gsap.from('#sc-translation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_translation_section_timelines_deadlines = document.getElementById('sc-translation-section-timelines-deadlines');
  if (sc_translation_section_timelines_deadlines) {
    gsap.fromTo('#sc-translation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_translation_section_fees_costs = document.getElementById('sc-translation-section-fees-costs');
  if (sc_translation_section_fees_costs) {
    gsap.fromTo('#sc-translation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_translation_list_risks_common_mistakes = document.getElementById('sc-translation-list-risks-common-mistakes');
  if (sc_translation_list_risks_common_mistakes) {
    gsap.from('#sc-translation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_translation_section_diy_vs_professional_assistance = document.getElementById('sc-translation-section-diy-vs-professional-assistance');
  if (sc_translation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-translation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_translation_section_santa_catarina_specific_context = document.getElementById('sc-translation-section-santa-catarina-specific-context');
  if (sc_translation_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-translation-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_translation_section_what_our_clients_say = document.getElementById('sc-translation-section-what-our-clients-say');
  if (sc_translation_section_what_our_clients_say) {
    gsap.fromTo('#sc-translation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_translation_section_frequently_asked_questions = document.getElementById('sc-translation-section-frequently-asked-questions');
  if (sc_translation_section_frequently_asked_questions) {
    gsap.fromTo('#sc-translation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_translation_section_international_support = document.getElementById('sc-translation-section-international-support');
  if (sc_translation_section_international_support) {
    gsap.fromTo('#sc-translation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_translation_list_our_credentials = document.getElementById('sc-translation-list-our-credentials');
  if (sc_translation_list_our_credentials) {
    gsap.from('#sc-translation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_translation_list_related_services = document.getElementById('sc-translation-list-related-services');
  if (sc_translation_list_related_services) {
    gsap.from('#sc-translation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_translation_section_youre_in_good_hands = document.getElementById('sc-translation-section-youre-in-good-hands');
  if (sc_translation_section_youre_in_good_hands) {
    gsap.fromTo('#sc-translation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_translation_section_21 = document.getElementById('sc-translation-section-21');
  if (sc_translation_section_21) {
    gsap.fromTo('#sc-translation-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_expulsion_form_expulsion_assistance_in_brazil = document.getElementById('sc-expulsion-form-expulsion-assistance-in-brazil');
  if (sc_expulsion_form_expulsion_assistance_in_brazil) {
    gsap.from('#sc-expulsion-form-expulsion-assistance-in-brazil input, #sc-expulsion-form-expulsion-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_expulsion_list_quick_facts = document.getElementById('sc-expulsion-list-quick-facts');
  if (sc_expulsion_list_quick_facts) {
    gsap.from('#sc-expulsion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_expulsion_list_common_challenges_applicants_face = document.getElementById('sc-expulsion-list-common-challenges-applicants-face');
  if (sc_expulsion_list_common_challenges_applicants_face) {
    gsap.from('#sc-expulsion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_expulsion_list_how_we_solve_these_challenges = document.getElementById('sc-expulsion-list-how-we-solve-these-challenges');
  if (sc_expulsion_list_how_we_solve_these_challenges) {
    gsap.from('#sc-expulsion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_expulsion_section_service_overview = document.getElementById('sc-expulsion-section-service-overview');
  if (sc_expulsion_section_service_overview) {
    gsap.fromTo('#sc-expulsion-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_expulsion_form_who_is_this_service_for = document.getElementById('sc-expulsion-form-who-is-this-service-for');
  if (sc_expulsion_form_who_is_this_service_for) {
    gsap.from('#sc-expulsion-form-who-is-this-service-for input, #sc-expulsion-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_expulsion_list_required_documents = document.getElementById('sc-expulsion-list-required-documents');
  if (sc_expulsion_list_required_documents) {
    gsap.from('#sc-expulsion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_expulsion_list_process = document.getElementById('sc-expulsion-list-process');
  if (sc_expulsion_list_process) {
    gsap.from('#sc-expulsion-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_expulsion_section_timelines_deadlines = document.getElementById('sc-expulsion-section-timelines-deadlines');
  if (sc_expulsion_section_timelines_deadlines) {
    gsap.fromTo('#sc-expulsion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_expulsion_section_fees_costs = document.getElementById('sc-expulsion-section-fees-costs');
  if (sc_expulsion_section_fees_costs) {
    gsap.fromTo('#sc-expulsion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_expulsion_list_risks_common_mistakes = document.getElementById('sc-expulsion-list-risks-common-mistakes');
  if (sc_expulsion_list_risks_common_mistakes) {
    gsap.from('#sc-expulsion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_expulsion_section_diy_vs_professional_assistance = document.getElementById('sc-expulsion-section-diy-vs-professional-assistance');
  if (sc_expulsion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-expulsion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_expulsion_section_santa_catarina_specific_context = document.getElementById('sc-expulsion-section-santa-catarina-specific-context');
  if (sc_expulsion_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-expulsion-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_expulsion_section_what_our_clients_say = document.getElementById('sc-expulsion-section-what-our-clients-say');
  if (sc_expulsion_section_what_our_clients_say) {
    gsap.fromTo('#sc-expulsion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_expulsion_section_frequently_asked_questions = document.getElementById('sc-expulsion-section-frequently-asked-questions');
  if (sc_expulsion_section_frequently_asked_questions) {
    gsap.fromTo('#sc-expulsion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_expulsion_section_international_support = document.getElementById('sc-expulsion-section-international-support');
  if (sc_expulsion_section_international_support) {
    gsap.fromTo('#sc-expulsion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_expulsion_list_our_credentials = document.getElementById('sc-expulsion-list-our-credentials');
  if (sc_expulsion_list_our_credentials) {
    gsap.from('#sc-expulsion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_expulsion_list_related_services = document.getElementById('sc-expulsion-list-related-services');
  if (sc_expulsion_list_related_services) {
    gsap.from('#sc-expulsion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_expulsion_section_youre_in_good_hands = document.getElementById('sc-expulsion-section-youre-in-good-hands');
  if (sc_expulsion_section_youre_in_good_hands) {
    gsap.fromTo('#sc-expulsion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_expulsion_section_21 = document.getElementById('sc-expulsion-section-21');
  if (sc_expulsion_section_21) {
    gsap.fromTo('#sc-expulsion-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_appeals_form_appeal_immigration_denials_in_brazil = document.getElementById('sc-appeals-form-appeal-immigration-denials-in-brazil');
  if (sc_appeals_form_appeal_immigration_denials_in_brazil) {
    gsap.from('#sc-appeals-form-appeal-immigration-denials-in-brazil input, #sc-appeals-form-appeal-immigration-denials-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_appeals_list_quick_facts = document.getElementById('sc-appeals-list-quick-facts');
  if (sc_appeals_list_quick_facts) {
    gsap.from('#sc-appeals-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_appeals_list_common_challenges_applicants_face = document.getElementById('sc-appeals-list-common-challenges-applicants-face');
  if (sc_appeals_list_common_challenges_applicants_face) {
    gsap.from('#sc-appeals-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_appeals_list_how_we_solve_these_challenges = document.getElementById('sc-appeals-list-how-we-solve-these-challenges');
  if (sc_appeals_list_how_we_solve_these_challenges) {
    gsap.from('#sc-appeals-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_appeals_section_service_overview = document.getElementById('sc-appeals-section-service-overview');
  if (sc_appeals_section_service_overview) {
    gsap.fromTo('#sc-appeals-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_appeals_form_who_is_this_service_for = document.getElementById('sc-appeals-form-who-is-this-service-for');
  if (sc_appeals_form_who_is_this_service_for) {
    gsap.from('#sc-appeals-form-who-is-this-service-for input, #sc-appeals-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_appeals_list_required_documents = document.getElementById('sc-appeals-list-required-documents');
  if (sc_appeals_list_required_documents) {
    gsap.from('#sc-appeals-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_appeals_list_appeal_process = document.getElementById('sc-appeals-list-appeal-process');
  if (sc_appeals_list_appeal_process) {
    gsap.from('#sc-appeals-list-appeal-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_appeals_section_timelines_deadlines = document.getElementById('sc-appeals-section-timelines-deadlines');
  if (sc_appeals_section_timelines_deadlines) {
    gsap.fromTo('#sc-appeals-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_appeals_section_fees_costs = document.getElementById('sc-appeals-section-fees-costs');
  if (sc_appeals_section_fees_costs) {
    gsap.fromTo('#sc-appeals-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_appeals_list_risks_common_mistakes = document.getElementById('sc-appeals-list-risks-common-mistakes');
  if (sc_appeals_list_risks_common_mistakes) {
    gsap.from('#sc-appeals-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_appeals_section_diy_vs_professional_assistance = document.getElementById('sc-appeals-section-diy-vs-professional-assistance');
  if (sc_appeals_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-appeals-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_appeals_section_santa_catarina_specific_context = document.getElementById('sc-appeals-section-santa-catarina-specific-context');
  if (sc_appeals_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-appeals-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_appeals_section_what_our_clients_say = document.getElementById('sc-appeals-section-what-our-clients-say');
  if (sc_appeals_section_what_our_clients_say) {
    gsap.fromTo('#sc-appeals-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_appeals_section_frequently_asked_questions = document.getElementById('sc-appeals-section-frequently-asked-questions');
  if (sc_appeals_section_frequently_asked_questions) {
    gsap.fromTo('#sc-appeals-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_appeals_section_international_support = document.getElementById('sc-appeals-section-international-support');
  if (sc_appeals_section_international_support) {
    gsap.fromTo('#sc-appeals-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_appeals_list_our_credentials = document.getElementById('sc-appeals-list-our-credentials');
  if (sc_appeals_list_our_credentials) {
    gsap.from('#sc-appeals-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_appeals_list_related_services = document.getElementById('sc-appeals-list-related-services');
  if (sc_appeals_list_related_services) {
    gsap.from('#sc-appeals-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_appeals_section_youre_in_good_hands = document.getElementById('sc-appeals-section-youre-in-good-hands');
  if (sc_appeals_section_youre_in_good_hands) {
    gsap.fromTo('#sc-appeals-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_appeals_section_21 = document.getElementById('sc-appeals-section-21');
  if (sc_appeals_section_21) {
    gsap.fromTo('#sc-appeals-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_consular_form_consular_services_in_brazil_for_citizens = document.getElementById('sc-consular-form-consular-services-in-brazil-for-citizens');
  if (sc_consular_form_consular_services_in_brazil_for_citizens) {
    gsap.from('#sc-consular-form-consular-services-in-brazil-for-citizens input, #sc-consular-form-consular-services-in-brazil-for-citizens textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_consular_list_quick_facts = document.getElementById('sc-consular-list-quick-facts');
  if (sc_consular_list_quick_facts) {
    gsap.from('#sc-consular-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_consular_list_common_challenges_applicants_face = document.getElementById('sc-consular-list-common-challenges-applicants-face');
  if (sc_consular_list_common_challenges_applicants_face) {
    gsap.from('#sc-consular-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_consular_list_how_we_solve_these_challenges = document.getElementById('sc-consular-list-how-we-solve-these-challenges');
  if (sc_consular_list_how_we_solve_these_challenges) {
    gsap.from('#sc-consular-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_consular_section_service_overview = document.getElementById('sc-consular-section-service-overview');
  if (sc_consular_section_service_overview) {
    gsap.fromTo('#sc-consular-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_consular_form_who_is_this_service_for = document.getElementById('sc-consular-form-who-is-this-service-for');
  if (sc_consular_form_who_is_this_service_for) {
    gsap.from('#sc-consular-form-who-is-this-service-for input, #sc-consular-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_consular_list_required_documents = document.getElementById('sc-consular-list-required-documents');
  if (sc_consular_list_required_documents) {
    gsap.from('#sc-consular-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_consular_list_process = document.getElementById('sc-consular-list-process');
  if (sc_consular_list_process) {
    gsap.from('#sc-consular-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_consular_section_timelines_deadlines = document.getElementById('sc-consular-section-timelines-deadlines');
  if (sc_consular_section_timelines_deadlines) {
    gsap.fromTo('#sc-consular-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_consular_section_fees_costs = document.getElementById('sc-consular-section-fees-costs');
  if (sc_consular_section_fees_costs) {
    gsap.fromTo('#sc-consular-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_consular_list_risks_common_mistakes = document.getElementById('sc-consular-list-risks-common-mistakes');
  if (sc_consular_list_risks_common_mistakes) {
    gsap.from('#sc-consular-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_consular_section_diy_vs_professional_assistance = document.getElementById('sc-consular-section-diy-vs-professional-assistance');
  if (sc_consular_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-consular-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_consular_section_santa_catarina_specific_context = document.getElementById('sc-consular-section-santa-catarina-specific-context');
  if (sc_consular_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-consular-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_consular_section_what_our_clients_say = document.getElementById('sc-consular-section-what-our-clients-say');
  if (sc_consular_section_what_our_clients_say) {
    gsap.fromTo('#sc-consular-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_consular_section_frequently_asked_questions = document.getElementById('sc-consular-section-frequently-asked-questions');
  if (sc_consular_section_frequently_asked_questions) {
    gsap.fromTo('#sc-consular-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_consular_section_international_support = document.getElementById('sc-consular-section-international-support');
  if (sc_consular_section_international_support) {
    gsap.fromTo('#sc-consular-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_consular_list_our_credentials = document.getElementById('sc-consular-list-our-credentials');
  if (sc_consular_list_our_credentials) {
    gsap.from('#sc-consular-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_consular_list_related_services = document.getElementById('sc-consular-list-related-services');
  if (sc_consular_list_related_services) {
    gsap.from('#sc-consular-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_consular_section_youre_in_good_hands = document.getElementById('sc-consular-section-youre-in-good-hands');
  if (sc_consular_section_youre_in_good_hands) {
    gsap.fromTo('#sc-consular-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_consular_section_21 = document.getElementById('sc-consular-section-21');
  if (sc_consular_section_21) {
    gsap.fromTo('#sc-consular-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const criminal_records.html = document.getElementById('criminal-records.html');
  if (criminal_records.html) {
    gsap.fromTo('#criminal-records.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_criminalrecords_form_obtain_criminal_records_certificate_in_brazil = document.getElementById('sc-criminalrecords-form-obtain-criminal-records-certificate-in-brazil');
  if (sc_criminalrecords_form_obtain_criminal_records_certificate_in_brazil) {
    gsap.from('#sc-criminalrecords-form-obtain-criminal-records-certificate-in-brazil input, #sc-criminalrecords-form-obtain-criminal-records-certificate-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_criminalrecords_list_quick_facts = document.getElementById('sc-criminalrecords-list-quick-facts');
  if (sc_criminalrecords_list_quick_facts) {
    gsap.from('#sc-criminalrecords-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_criminalrecords_list_common_challenges_applicants_face = document.getElementById('sc-criminalrecords-list-common-challenges-applicants-face');
  if (sc_criminalrecords_list_common_challenges_applicants_face) {
    gsap.from('#sc-criminalrecords-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_criminalrecords_list_how_we_solve_these_challenges = document.getElementById('sc-criminalrecords-list-how-we-solve-these-challenges');
  if (sc_criminalrecords_list_how_we_solve_these_challenges) {
    gsap.from('#sc-criminalrecords-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_criminalrecords_section_service_overview = document.getElementById('sc-criminalrecords-section-service-overview');
  if (sc_criminalrecords_section_service_overview) {
    gsap.fromTo('#sc-criminalrecords-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_criminalrecords_form_who_is_this_service_for = document.getElementById('sc-criminalrecords-form-who-is-this-service-for');
  if (sc_criminalrecords_form_who_is_this_service_for) {
    gsap.from('#sc-criminalrecords-form-who-is-this-service-for input, #sc-criminalrecords-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_criminalrecords_list_required_documents = document.getElementById('sc-criminalrecords-list-required-documents');
  if (sc_criminalrecords_list_required_documents) {
    gsap.from('#sc-criminalrecords-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_criminalrecords_list_process = document.getElementById('sc-criminalrecords-list-process');
  if (sc_criminalrecords_list_process) {
    gsap.from('#sc-criminalrecords-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_criminalrecords_section_timelines_deadlines = document.getElementById('sc-criminalrecords-section-timelines-deadlines');
  if (sc_criminalrecords_section_timelines_deadlines) {
    gsap.fromTo('#sc-criminalrecords-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_criminalrecords_section_fees_costs = document.getElementById('sc-criminalrecords-section-fees-costs');
  if (sc_criminalrecords_section_fees_costs) {
    gsap.fromTo('#sc-criminalrecords-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_criminalrecords_list_risks_common_mistakes = document.getElementById('sc-criminalrecords-list-risks-common-mistakes');
  if (sc_criminalrecords_list_risks_common_mistakes) {
    gsap.from('#sc-criminalrecords-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_criminalrecords_section_diy_vs_professional_assistance = document.getElementById('sc-criminalrecords-section-diy-vs-professional-assistance');
  if (sc_criminalrecords_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-criminalrecords-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_criminalrecords_section_santa_catarina_specific_context = document.getElementById('sc-criminalrecords-section-santa-catarina-specific-context');
  if (sc_criminalrecords_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-criminalrecords-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_criminalrecords_section_what_our_clients_say = document.getElementById('sc-criminalrecords-section-what-our-clients-say');
  if (sc_criminalrecords_section_what_our_clients_say) {
    gsap.fromTo('#sc-criminalrecords-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_criminalrecords_section_frequently_asked_questions = document.getElementById('sc-criminalrecords-section-frequently-asked-questions');
  if (sc_criminalrecords_section_frequently_asked_questions) {
    gsap.fromTo('#sc-criminalrecords-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_criminalrecords_section_international_support = document.getElementById('sc-criminalrecords-section-international-support');
  if (sc_criminalrecords_section_international_support) {
    gsap.fromTo('#sc-criminalrecords-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_criminalrecords_list_our_credentials = document.getElementById('sc-criminalrecords-list-our-credentials');
  if (sc_criminalrecords_list_our_credentials) {
    gsap.from('#sc-criminalrecords-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_criminalrecords_list_related_services = document.getElementById('sc-criminalrecords-list-related-services');
  if (sc_criminalrecords_list_related_services) {
    gsap.from('#sc-criminalrecords-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_criminalrecords_section_youre_in_good_hands = document.getElementById('sc-criminalrecords-section-youre-in-good-hands');
  if (sc_criminalrecords_section_youre_in_good_hands) {
    gsap.fromTo('#sc-criminalrecords-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_criminalrecords_section_21 = document.getElementById('sc-criminalrecords-section-21');
  if (sc_criminalrecords_section_21) {
    gsap.fromTo('#sc-criminalrecords-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extradition_form_extradition_assistance_in_brazil = document.getElementById('sc-extradition-form-extradition-assistance-in-brazil');
  if (sc_extradition_form_extradition_assistance_in_brazil) {
    gsap.from('#sc-extradition-form-extradition-assistance-in-brazil input, #sc-extradition-form-extradition-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extradition_list_quick_facts = document.getElementById('sc-extradition-list-quick-facts');
  if (sc_extradition_list_quick_facts) {
    gsap.from('#sc-extradition-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extradition_list_common_challenges_applicants_face = document.getElementById('sc-extradition-list-common-challenges-applicants-face');
  if (sc_extradition_list_common_challenges_applicants_face) {
    gsap.from('#sc-extradition-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extradition_list_how_we_solve_these_challenges = document.getElementById('sc-extradition-list-how-we-solve-these-challenges');
  if (sc_extradition_list_how_we_solve_these_challenges) {
    gsap.from('#sc-extradition-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extradition_section_service_overview = document.getElementById('sc-extradition-section-service-overview');
  if (sc_extradition_section_service_overview) {
    gsap.fromTo('#sc-extradition-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extradition_form_who_is_this_service_for = document.getElementById('sc-extradition-form-who-is-this-service-for');
  if (sc_extradition_form_who_is_this_service_for) {
    gsap.from('#sc-extradition-form-who-is-this-service-for input, #sc-extradition-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extradition_list_required_documents = document.getElementById('sc-extradition-list-required-documents');
  if (sc_extradition_list_required_documents) {
    gsap.from('#sc-extradition-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extradition_list_process = document.getElementById('sc-extradition-list-process');
  if (sc_extradition_list_process) {
    gsap.from('#sc-extradition-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extradition_section_timelines_deadlines = document.getElementById('sc-extradition-section-timelines-deadlines');
  if (sc_extradition_section_timelines_deadlines) {
    gsap.fromTo('#sc-extradition-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extradition_section_fees_costs = document.getElementById('sc-extradition-section-fees-costs');
  if (sc_extradition_section_fees_costs) {
    gsap.fromTo('#sc-extradition-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extradition_list_risks_common_mistakes = document.getElementById('sc-extradition-list-risks-common-mistakes');
  if (sc_extradition_list_risks_common_mistakes) {
    gsap.from('#sc-extradition-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extradition_section_diy_vs_professional_assistance = document.getElementById('sc-extradition-section-diy-vs-professional-assistance');
  if (sc_extradition_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-extradition-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extradition_section_santa_catarina_specific_context = document.getElementById('sc-extradition-section-santa-catarina-specific-context');
  if (sc_extradition_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-extradition-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extradition_section_what_our_clients_say = document.getElementById('sc-extradition-section-what-our-clients-say');
  if (sc_extradition_section_what_our_clients_say) {
    gsap.fromTo('#sc-extradition-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extradition_section_frequently_asked_questions = document.getElementById('sc-extradition-section-frequently-asked-questions');
  if (sc_extradition_section_frequently_asked_questions) {
    gsap.fromTo('#sc-extradition-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extradition_section_international_support = document.getElementById('sc-extradition-section-international-support');
  if (sc_extradition_section_international_support) {
    gsap.fromTo('#sc-extradition-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extradition_list_our_credentials = document.getElementById('sc-extradition-list-our-credentials');
  if (sc_extradition_list_our_credentials) {
    gsap.from('#sc-extradition-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extradition_list_related_services = document.getElementById('sc-extradition-list-related-services');
  if (sc_extradition_list_related_services) {
    gsap.from('#sc-extradition-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extradition_section_youre_in_good_hands = document.getElementById('sc-extradition-section-youre-in-good-hands');
  if (sc_extradition_section_youre_in_good_hands) {
    gsap.fromTo('#sc-extradition-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_extradition_section_21 = document.getElementById('sc-extradition-section-21');
  if (sc_extradition_section_21) {
    gsap.fromTo('#sc-extradition-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_north_form_discover_the_north_amazon_and_beyond = document.getElementById('sc-north-form-discover-the-north-amazon-and-beyond');
  if (sc_north_form_discover_the_north_amazon_and_beyond) {
    gsap.from('#sc-north-form-discover-the-north-amazon-and-beyond input, #sc-north-form-discover-the-north-amazon-and-beyond textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_north_list_quick_facts = document.getElementById('sc-north-list-quick-facts');
  if (sc_north_list_quick_facts) {
    gsap.from('#sc-north-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_north_list_common_challenges_applicants_face = document.getElementById('sc-north-list-common-challenges-applicants-face');
  if (sc_north_list_common_challenges_applicants_face) {
    gsap.from('#sc-north-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_north_list_how_we_solve_these_challenges = document.getElementById('sc-north-list-how-we-solve-these-challenges');
  if (sc_north_list_how_we_solve_these_challenges) {
    gsap.from('#sc-north-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_north_section_trip_overview = document.getElementById('sc-north-section-trip-overview');
  if (sc_north_section_trip_overview) {
    gsap.fromTo('#sc-north-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_north_form_who_is_this_trip_for = document.getElementById('sc-north-form-who-is-this-trip-for');
  if (sc_north_form_who_is_this_trip_for) {
    gsap.from('#sc-north-form-who-is-this-trip-for input, #sc-north-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_north_list_required_documents = document.getElementById('sc-north-list-required-documents');
  if (sc_north_list_required_documents) {
    gsap.from('#sc-north-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_north_list_booking_process = document.getElementById('sc-north-list-booking-process');
  if (sc_north_list_booking_process) {
    gsap.from('#sc-north-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_north_section_timelines_deadlines = document.getElementById('sc-north-section-timelines-deadlines');
  if (sc_north_section_timelines_deadlines) {
    gsap.fromTo('#sc-north-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_north_section_fees_costs = document.getElementById('sc-north-section-fees-costs');
  if (sc_north_section_fees_costs) {
    gsap.fromTo('#sc-north-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_north_list_risks_common_mistakes = document.getElementById('sc-north-list-risks-common-mistakes');
  if (sc_north_list_risks_common_mistakes) {
    gsap.from('#sc-north-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_north_section_diy_vs_professional_assistance = document.getElementById('sc-north-section-diy-vs-professional-assistance');
  if (sc_north_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-north-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_north_section_santa_catarina_specific_context = document.getElementById('sc-north-section-santa-catarina-specific-context');
  if (sc_north_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-north-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_north_section_what_our_clients_say = document.getElementById('sc-north-section-what-our-clients-say');
  if (sc_north_section_what_our_clients_say) {
    gsap.fromTo('#sc-north-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_north_section_frequently_asked_questions = document.getElementById('sc-north-section-frequently-asked-questions');
  if (sc_north_section_frequently_asked_questions) {
    gsap.fromTo('#sc-north-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_north_section_international_support = document.getElementById('sc-north-section-international-support');
  if (sc_north_section_international_support) {
    gsap.fromTo('#sc-north-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_north_list_our_credentials = document.getElementById('sc-north-list-our-credentials');
  if (sc_north_list_our_credentials) {
    gsap.from('#sc-north-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_north_list_related_services = document.getElementById('sc-north-list-related-services');
  if (sc_north_list_related_services) {
    gsap.from('#sc-north-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_north_section_youre_in_good_hands = document.getElementById('sc-north-section-youre-in-good-hands');
  if (sc_north_section_youre_in_good_hands) {
    gsap.fromTo('#sc-north-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_north_section_21 = document.getElementById('sc-north-section-21');
  if (sc_north_section_21) {
    gsap.fromTo('#sc-north-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const central_west.html = document.getElementById('central-west.html');
  if (central_west.html) {
    gsap.fromTo('#central-west.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_centralwest_form_wild_centralwest_pantanal_and_cerrado = document.getElementById('sc-centralwest-form-wild-centralwest-pantanal-and-cerrado');
  if (sc_centralwest_form_wild_centralwest_pantanal_and_cerrado) {
    gsap.from('#sc-centralwest-form-wild-centralwest-pantanal-and-cerrado input, #sc-centralwest-form-wild-centralwest-pantanal-and-cerrado textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_centralwest_list_quick_facts = document.getElementById('sc-centralwest-list-quick-facts');
  if (sc_centralwest_list_quick_facts) {
    gsap.from('#sc-centralwest-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_centralwest_list_common_challenges_applicants_face = document.getElementById('sc-centralwest-list-common-challenges-applicants-face');
  if (sc_centralwest_list_common_challenges_applicants_face) {
    gsap.from('#sc-centralwest-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_centralwest_list_how_we_solve_these_challenges = document.getElementById('sc-centralwest-list-how-we-solve-these-challenges');
  if (sc_centralwest_list_how_we_solve_these_challenges) {
    gsap.from('#sc-centralwest-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_centralwest_section_trip_overview = document.getElementById('sc-centralwest-section-trip-overview');
  if (sc_centralwest_section_trip_overview) {
    gsap.fromTo('#sc-centralwest-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_centralwest_form_who_is_this_trip_for = document.getElementById('sc-centralwest-form-who-is-this-trip-for');
  if (sc_centralwest_form_who_is_this_trip_for) {
    gsap.from('#sc-centralwest-form-who-is-this-trip-for input, #sc-centralwest-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_centralwest_list_required_documents = document.getElementById('sc-centralwest-list-required-documents');
  if (sc_centralwest_list_required_documents) {
    gsap.from('#sc-centralwest-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_centralwest_list_booking_process = document.getElementById('sc-centralwest-list-booking-process');
  if (sc_centralwest_list_booking_process) {
    gsap.from('#sc-centralwest-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_centralwest_section_timelines_deadlines = document.getElementById('sc-centralwest-section-timelines-deadlines');
  if (sc_centralwest_section_timelines_deadlines) {
    gsap.fromTo('#sc-centralwest-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_centralwest_section_fees_costs = document.getElementById('sc-centralwest-section-fees-costs');
  if (sc_centralwest_section_fees_costs) {
    gsap.fromTo('#sc-centralwest-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_centralwest_list_risks_common_mistakes = document.getElementById('sc-centralwest-list-risks-common-mistakes');
  if (sc_centralwest_list_risks_common_mistakes) {
    gsap.from('#sc-centralwest-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_centralwest_section_diy_vs_professional_assistance = document.getElementById('sc-centralwest-section-diy-vs-professional-assistance');
  if (sc_centralwest_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-centralwest-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_centralwest_section_santa_catarina_specific_context = document.getElementById('sc-centralwest-section-santa-catarina-specific-context');
  if (sc_centralwest_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-centralwest-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_centralwest_section_what_our_clients_say = document.getElementById('sc-centralwest-section-what-our-clients-say');
  if (sc_centralwest_section_what_our_clients_say) {
    gsap.fromTo('#sc-centralwest-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_centralwest_section_frequently_asked_questions = document.getElementById('sc-centralwest-section-frequently-asked-questions');
  if (sc_centralwest_section_frequently_asked_questions) {
    gsap.fromTo('#sc-centralwest-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_centralwest_section_international_support = document.getElementById('sc-centralwest-section-international-support');
  if (sc_centralwest_section_international_support) {
    gsap.fromTo('#sc-centralwest-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_centralwest_list_our_credentials = document.getElementById('sc-centralwest-list-our-credentials');
  if (sc_centralwest_list_our_credentials) {
    gsap.from('#sc-centralwest-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_centralwest_list_related_services = document.getElementById('sc-centralwest-list-related-services');
  if (sc_centralwest_list_related_services) {
    gsap.from('#sc-centralwest-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_centralwest_section_youre_in_good_hands = document.getElementById('sc-centralwest-section-youre-in-good-hands');
  if (sc_centralwest_section_youre_in_good_hands) {
    gsap.fromTo('#sc-centralwest-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_centralwest_section_21 = document.getElementById('sc-centralwest-section-21');
  if (sc_centralwest_section_21) {
    gsap.fromTo('#sc-centralwest-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_southeast_form_dynamic_southeast_cities_and_history = document.getElementById('sc-southeast-form-dynamic-southeast-cities-and-history');
  if (sc_southeast_form_dynamic_southeast_cities_and_history) {
    gsap.from('#sc-southeast-form-dynamic-southeast-cities-and-history input, #sc-southeast-form-dynamic-southeast-cities-and-history textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_southeast_list_quick_facts = document.getElementById('sc-southeast-list-quick-facts');
  if (sc_southeast_list_quick_facts) {
    gsap.from('#sc-southeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_southeast_list_common_challenges_applicants_face = document.getElementById('sc-southeast-list-common-challenges-applicants-face');
  if (sc_southeast_list_common_challenges_applicants_face) {
    gsap.from('#sc-southeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_southeast_list_how_we_solve_these_challenges = document.getElementById('sc-southeast-list-how-we-solve-these-challenges');
  if (sc_southeast_list_how_we_solve_these_challenges) {
    gsap.from('#sc-southeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_southeast_section_trip_overview = document.getElementById('sc-southeast-section-trip-overview');
  if (sc_southeast_section_trip_overview) {
    gsap.fromTo('#sc-southeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_southeast_form_who_is_this_trip_for = document.getElementById('sc-southeast-form-who-is-this-trip-for');
  if (sc_southeast_form_who_is_this_trip_for) {
    gsap.from('#sc-southeast-form-who-is-this-trip-for input, #sc-southeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_southeast_list_required_documents = document.getElementById('sc-southeast-list-required-documents');
  if (sc_southeast_list_required_documents) {
    gsap.from('#sc-southeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_southeast_list_booking_process = document.getElementById('sc-southeast-list-booking-process');
  if (sc_southeast_list_booking_process) {
    gsap.from('#sc-southeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_southeast_section_timelines_deadlines = document.getElementById('sc-southeast-section-timelines-deadlines');
  if (sc_southeast_section_timelines_deadlines) {
    gsap.fromTo('#sc-southeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_southeast_section_fees_costs = document.getElementById('sc-southeast-section-fees-costs');
  if (sc_southeast_section_fees_costs) {
    gsap.fromTo('#sc-southeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_southeast_list_risks_common_mistakes = document.getElementById('sc-southeast-list-risks-common-mistakes');
  if (sc_southeast_list_risks_common_mistakes) {
    gsap.from('#sc-southeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_southeast_section_diy_vs_professional_assistance = document.getElementById('sc-southeast-section-diy-vs-professional-assistance');
  if (sc_southeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-southeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_southeast_section_santa_catarina_specific_context = document.getElementById('sc-southeast-section-santa-catarina-specific-context');
  if (sc_southeast_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-southeast-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_southeast_section_what_our_clients_say = document.getElementById('sc-southeast-section-what-our-clients-say');
  if (sc_southeast_section_what_our_clients_say) {
    gsap.fromTo('#sc-southeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_southeast_section_frequently_asked_questions = document.getElementById('sc-southeast-section-frequently-asked-questions');
  if (sc_southeast_section_frequently_asked_questions) {
    gsap.fromTo('#sc-southeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_southeast_section_international_support = document.getElementById('sc-southeast-section-international-support');
  if (sc_southeast_section_international_support) {
    gsap.fromTo('#sc-southeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_southeast_list_our_credentials = document.getElementById('sc-southeast-list-our-credentials');
  if (sc_southeast_list_our_credentials) {
    gsap.from('#sc-southeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_southeast_list_related_services = document.getElementById('sc-southeast-list-related-services');
  if (sc_southeast_list_related_services) {
    gsap.from('#sc-southeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_southeast_section_youre_in_good_hands = document.getElementById('sc-southeast-section-youre-in-good-hands');
  if (sc_southeast_section_youre_in_good_hands) {
    gsap.fromTo('#sc-southeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_southeast_section_21 = document.getElementById('sc-southeast-section-21');
  if (sc_southeast_section_21) {
    gsap.fromTo('#sc-southeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_northeast_form_vibrant_northeast_beaches_and_culture = document.getElementById('sc-northeast-form-vibrant-northeast-beaches-and-culture');
  if (sc_northeast_form_vibrant_northeast_beaches_and_culture) {
    gsap.from('#sc-northeast-form-vibrant-northeast-beaches-and-culture input, #sc-northeast-form-vibrant-northeast-beaches-and-culture textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_northeast_list_quick_facts = document.getElementById('sc-northeast-list-quick-facts');
  if (sc_northeast_list_quick_facts) {
    gsap.from('#sc-northeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_northeast_list_common_challenges_applicants_face = document.getElementById('sc-northeast-list-common-challenges-applicants-face');
  if (sc_northeast_list_common_challenges_applicants_face) {
    gsap.from('#sc-northeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_northeast_list_how_we_solve_these_challenges = document.getElementById('sc-northeast-list-how-we-solve-these-challenges');
  if (sc_northeast_list_how_we_solve_these_challenges) {
    gsap.from('#sc-northeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_northeast_section_trip_overview = document.getElementById('sc-northeast-section-trip-overview');
  if (sc_northeast_section_trip_overview) {
    gsap.fromTo('#sc-northeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_northeast_form_who_is_this_trip_for = document.getElementById('sc-northeast-form-who-is-this-trip-for');
  if (sc_northeast_form_who_is_this_trip_for) {
    gsap.from('#sc-northeast-form-who-is-this-trip-for input, #sc-northeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_northeast_list_required_documents = document.getElementById('sc-northeast-list-required-documents');
  if (sc_northeast_list_required_documents) {
    gsap.from('#sc-northeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_northeast_list_booking_process = document.getElementById('sc-northeast-list-booking-process');
  if (sc_northeast_list_booking_process) {
    gsap.from('#sc-northeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_northeast_section_timelines_deadlines = document.getElementById('sc-northeast-section-timelines-deadlines');
  if (sc_northeast_section_timelines_deadlines) {
    gsap.fromTo('#sc-northeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_northeast_section_fees_costs = document.getElementById('sc-northeast-section-fees-costs');
  if (sc_northeast_section_fees_costs) {
    gsap.fromTo('#sc-northeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_northeast_list_risks_common_mistakes = document.getElementById('sc-northeast-list-risks-common-mistakes');
  if (sc_northeast_list_risks_common_mistakes) {
    gsap.from('#sc-northeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_northeast_section_diy_vs_professional_assistance = document.getElementById('sc-northeast-section-diy-vs-professional-assistance');
  if (sc_northeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-northeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_northeast_section_santa_catarina_specific_context = document.getElementById('sc-northeast-section-santa-catarina-specific-context');
  if (sc_northeast_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-northeast-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_northeast_section_what_our_clients_say = document.getElementById('sc-northeast-section-what-our-clients-say');
  if (sc_northeast_section_what_our_clients_say) {
    gsap.fromTo('#sc-northeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_northeast_section_frequently_asked_questions = document.getElementById('sc-northeast-section-frequently-asked-questions');
  if (sc_northeast_section_frequently_asked_questions) {
    gsap.fromTo('#sc-northeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_northeast_section_international_support = document.getElementById('sc-northeast-section-international-support');
  if (sc_northeast_section_international_support) {
    gsap.fromTo('#sc-northeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_northeast_list_our_credentials = document.getElementById('sc-northeast-list-our-credentials');
  if (sc_northeast_list_our_credentials) {
    gsap.from('#sc-northeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_northeast_list_related_services = document.getElementById('sc-northeast-list-related-services');
  if (sc_northeast_list_related_services) {
    gsap.from('#sc-northeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_northeast_section_youre_in_good_hands = document.getElementById('sc-northeast-section-youre-in-good-hands');
  if (sc_northeast_section_youre_in_good_hands) {
    gsap.fromTo('#sc-northeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_northeast_section_21 = document.getElementById('sc-northeast-section-21');
  if (sc_northeast_section_21) {
    gsap.fromTo('#sc-northeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_south_form_charming_south_wine_and_gauchos = document.getElementById('sc-south-form-charming-south-wine-and-gauchos');
  if (sc_south_form_charming_south_wine_and_gauchos) {
    gsap.from('#sc-south-form-charming-south-wine-and-gauchos input, #sc-south-form-charming-south-wine-and-gauchos textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_south_list_quick_facts = document.getElementById('sc-south-list-quick-facts');
  if (sc_south_list_quick_facts) {
    gsap.from('#sc-south-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_south_list_common_challenges_applicants_face = document.getElementById('sc-south-list-common-challenges-applicants-face');
  if (sc_south_list_common_challenges_applicants_face) {
    gsap.from('#sc-south-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_south_list_how_we_solve_these_challenges = document.getElementById('sc-south-list-how-we-solve-these-challenges');
  if (sc_south_list_how_we_solve_these_challenges) {
    gsap.from('#sc-south-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_south_section_trip_overview = document.getElementById('sc-south-section-trip-overview');
  if (sc_south_section_trip_overview) {
    gsap.fromTo('#sc-south-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_south_form_who_is_this_trip_for = document.getElementById('sc-south-form-who-is-this-trip-for');
  if (sc_south_form_who_is_this_trip_for) {
    gsap.from('#sc-south-form-who-is-this-trip-for input, #sc-south-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_south_list_required_documents = document.getElementById('sc-south-list-required-documents');
  if (sc_south_list_required_documents) {
    gsap.from('#sc-south-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_south_list_booking_process = document.getElementById('sc-south-list-booking-process');
  if (sc_south_list_booking_process) {
    gsap.from('#sc-south-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_south_section_timelines_deadlines = document.getElementById('sc-south-section-timelines-deadlines');
  if (sc_south_section_timelines_deadlines) {
    gsap.fromTo('#sc-south-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_south_section_fees_costs = document.getElementById('sc-south-section-fees-costs');
  if (sc_south_section_fees_costs) {
    gsap.fromTo('#sc-south-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_south_list_risks_common_mistakes = document.getElementById('sc-south-list-risks-common-mistakes');
  if (sc_south_list_risks_common_mistakes) {
    gsap.from('#sc-south-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_south_section_diy_vs_professional_assistance = document.getElementById('sc-south-section-diy-vs-professional-assistance');
  if (sc_south_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sc-south-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_south_section_santa_catarina_specific_context = document.getElementById('sc-south-section-santa-catarina-specific-context');
  if (sc_south_section_santa_catarina_specific_context) {
    gsap.fromTo('#sc-south-section-santa-catarina-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_south_section_what_our_clients_say = document.getElementById('sc-south-section-what-our-clients-say');
  if (sc_south_section_what_our_clients_say) {
    gsap.fromTo('#sc-south-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_south_section_frequently_asked_questions = document.getElementById('sc-south-section-frequently-asked-questions');
  if (sc_south_section_frequently_asked_questions) {
    gsap.fromTo('#sc-south-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_south_section_international_support = document.getElementById('sc-south-section-international-support');
  if (sc_south_section_international_support) {
    gsap.fromTo('#sc-south-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_south_list_our_credentials = document.getElementById('sc-south-list-our-credentials');
  if (sc_south_list_our_credentials) {
    gsap.from('#sc-south-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_south_list_related_services = document.getElementById('sc-south-list-related-services');
  if (sc_south_list_related_services) {
    gsap.from('#sc-south-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_south_section_youre_in_good_hands = document.getElementById('sc-south-section-youre-in-good-hands');
  if (sc_south_section_youre_in_good_hands) {
    gsap.fromTo('#sc-south-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const sc_south_section_21 = document.getElementById('sc-south-section-21');
  if (sc_south_section_21) {
    gsap.fromTo('#sc-south-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

    })
    .catch(error => console.error('Error loading js_data.json:', error));
});
