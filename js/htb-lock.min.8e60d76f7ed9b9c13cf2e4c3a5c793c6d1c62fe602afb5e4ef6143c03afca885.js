(function(){"use strict";const s="2a014fc27d8aa2453a5d68ccde6ab21741ada82708f74c0884faadda95c9a9b4";async function o(e){const t=(new TextEncoder).encode(e),n=await crypto.subtle.digest("SHA-256",t),s=Array.from(new Uint8Array(n));return s.map(e=>e.toString(16).padStart(2,"0")).join("")}function i(e){if(!e)return!1;try{const t=new Date(e),n=new Date;return n>=t}catch{return!1}}function e(){if(!window.location.pathname.includes("/pentesting/htb/"))return;const e=document.querySelector("article")||document.querySelector("main");if(!e)return;const t=document.querySelector('meta[name="htb-status"]'),n=document.querySelector('meta[name="htb-retire"]'),s=document.querySelector('meta[name="htb-machine"]');if(!t)return;const l=t.getAttribute("content"),o=n?n.getAttribute("content"):null,d=s?s.getAttribute("content"):"HTB Machine",c=e;if(l==="retired"||i(o)){a(c);return}r(d,o,c,e)}function a(e){e&&(e.style.display="block",e.style.filter="none",e.style.pointerEvents="auto",e.style.userSelect="auto",e.style.opacity="1")}function r(e,n,s){const i=document.createElement("div");i.className="htb-lock-overlay";const c=n?new Date(n).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):"TBD";i.innerHTML=`
      <div class="htb-lock-modal">
        <div class="htb-lock-icon">🔒</div>
        <h2 class="htb-lock-title">${e||"HTB Machine"} Writeup</h2>
        <p class="htb-lock-status">This machine is still <strong>ACTIVE</strong> on Hack The Box.</p>
        <p class="htb-lock-retire">Automatically unlocks: <strong>${c}</strong></p>
        
        <div class="htb-lock-form">
          <input 
            type="password" 
            id="htb-password-input" 
            placeholder="Enter unlock password"
            class="htb-password-input"
          />
          <button id="htb-unlock-btn" class="htb-unlock-btn">Unlock Content</button>
          <div id="htb-error-msg" class="htb-error-msg" style="display: none;"></div>
        </div>

        <p class="htb-lock-footer">
          Respecting HTB rules: Active machine writeups are password-protected. 🛡️
        </p>
      </div>
    `,document.body.appendChild(i),s&&(s.style.filter="blur(25px) brightness(0.3)",s.style.pointerEvents="none",s.style.userSelect="none",s.style.opacity="0.3");const a=document.getElementById("htb-password-input"),l=document.getElementById("htb-unlock-btn"),r=document.getElementById("htb-error-msg");l.addEventListener("click",async()=>{await t(a,r,s,i)}),a.addEventListener("keypress",async e=>{e.key==="Enter"&&await t(a,r,s,i)}),a.focus()}async function t(e,t,i,a){const l=e.value.trim();if(!l){n(t,"Please enter a password");return}const r=document.getElementById("htb-unlock-btn");r.textContent="Unlocking...",r.disabled=!0;const d=await o(l);d===s?c(i,a):(r.textContent="Unlock Content",r.disabled=!1,n(t,"❌ Incorrect password. Please try again."),e.value="",e.focus())}function c(e,t){e&&(e.style.filter="none",e.style.pointerEvents="auto",e.style.userSelect="auto",e.style.opacity="1"),t&&(t.style.opacity="0",setTimeout(()=>t.remove(),300))}function n(e,t){e.textContent=t,e.style.display="block",setTimeout(()=>{e.style.display="none"},3e3)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e()})()