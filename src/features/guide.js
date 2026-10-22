// A guided tour links directly to each supported journey; progress reflects this session only.
function journeyGuide() {
 const steps = [
  ['accounts', 'wallet', '1. Get to know your accounts', 'View balances, demo IBANs and account confirmations.'],
  ['transfers', 'send', '2. Send your first demo transfer', 'Choose a recipient, review the fee and approve with 123456.'],
  ['cards', 'card', '3. Set your card preferences', 'Freeze or unfreeze the card, control purchases and set daily limits.'],
  ['loans', 'loan', '4. Explore a loan from start to finish', 'Calculate → documents → assessment → offer → agreement → simulated signing.']
 ];
 openDialog('Your banking, step by step', `<p class="muted">Choose where to start. Every journey uses fictional information.</p><div class="flow-list">${steps.map(([route, glyph, title, description]) => `<button class="service-result" onclick="closeDialog();goto('${route}')"><span class="roundicon">${icon(glyph)}</span><span><strong>${title}</strong><small>${description}</small></span>${icon('chevron')}</button>`).join('')}</div><div class="notice">Demo approvals and signatures use <strong>123456</strong>. No SMS is sent and no funds move.</div>`);
}
