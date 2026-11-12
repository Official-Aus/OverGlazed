(function () {
  const UI_ID = 'overglazed-bookmarklet-ui';

  // 1. Toggle off if it's already open on the page
  const existing = document.getElementById(UI_ID);
  if (existing) {
    existing.remove();
    return;
  }

  // 2. Create the floating container
  const panel = document.createElement('div');
  panel.id = UI_ID;
  Object.assign(panel.style, {
    position: 'fixed',
    top: '20px',
    right: '20px',
    zIndex: '2147483647',
    backgroundColor: '#1e1e2e',
    color: '#cdd6f4',
    padding: '16px',
    borderRadius: '10px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    fontSize: '14px',
    width: '260px',
    border: '1px solid #313244'
  });

  // 3. Add content and a close button
  panel.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
      <strong style="font-size:16px; color:#89b4fa;">OverGlazed</strong>
      <button id="${UI_ID}-close" style="background:none; border:none; color:#f38ba8; cursor:pointer; font-size:18px; line-height:1;">&times;</button>
    </div>
    <p style="margin:0 0 12px 0; line-height:1.4;">Loaded successfully from GitHub!</p>
    <button id="${UI_ID}-action" style="width:100%; padding:8px; background:#89b4fa; color:#11111b; border:none; border-radius:6px; font-weight:600; cursor:pointer;">
      Run Action
    </button>
  `;

  document.body.appendChild(panel);

  // 4. Attach button events
  document.getElementById(`${UI_ID}-close`).onclick = () => panel.remove();

  document.getElementById(`${UI_ID}-action`).onclick = () => {
    alert(`Current page title: ${document.title}`);
  };
})();
