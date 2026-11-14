# Bingo Ranked Objectives Catalog

This catalog features all 256 Minecraft objectives, blocks, and items available on the 5×5 bingo card during Bingo Ranked matches.

Each match generates a unique randomized 5×5 board of 25 goals. Group objectives (such as any wool color or wood type) cycle through allowable variants right on the tile.

{% hint style="info" %}
**Interactive Guide:** Hover over any tile to view its objective title, item ID, and completion requirements. Click any tile marked with `⇄` to inspect all valid variant items in an interactive modal.
{% endhint %}

---

<div class="pepe-catalog-wrapper">
<div class="pepe-controls-bar">
<div class="pepe-search-wrap">
<svg class="pepe-search-icon" viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" /></svg>
<input type="text" id="pepe-search" class="pepe-search-input" placeholder="Search objectives, items, or IDs (e.g. oak_log, diamond, wool)..." autocomplete="off" spellcheck="false" />
</div>
<label class="pepe-toggle-wrap">
<input type="checkbox" id="pepe-cycling-toggle" checked />
<span>⇄ Cycle Variant Animation</span>
</label>
<div class="pepe-counter-badge">
Objectives: <strong id="pepe-count">256 / 256</strong>
</div>
</div>

<div class="pepe-category-tabs" id="pepe-category-tabs">
<!-- Categories rendered dynamically -->
</div>

<div class="pepe-catalog-body" id="pepe-catalog">
<!-- Item grids rendered dynamically by scripts/targets.js -->
</div>

<div id="pepe-tooltip" class="pepe-tooltip" style="display: none;"></div>

<div class="pepe-modal-overlay" id="pepe-modal" role="dialog" aria-modal="true">
<div class="pepe-modal-dialog">
<div class="pepe-modal-header">
<div>
<h3 id="pepe-modal-title" class="pepe-modal-title">Objective Variants</h3>
<p id="pepe-modal-subtitle" class="pepe-modal-subtitle">Any item below satisfies this objective</p>
</div>
<button type="button" class="pepe-modal-close" id="pepe-modal-close" aria-label="Close">✕</button>
</div>
<div class="pepe-modal-grid" id="pepe-modal-grid">
<!-- Variant items -->
</div>
</div>
</div>
</div>

---

## How Objectives Are Scored

1. **Instant Detection:** The moment an objective item enters the player's inventory (via crafting, mining, chests, or mob drops), the slot on the card turns green.
2. **Items Are Kept:** Gathered items are not consumed by the card and remain available to craft further tools, gear, or subsequent goals.
3. **Group Objectives:** For multi-variant objectives, obtaining **any single** listed item satisfies the card slot.
