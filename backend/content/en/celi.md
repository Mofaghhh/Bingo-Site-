# Bingo Ranked Objectives Catalog

This catalog features all 256 Minecraft objectives, blocks, and items available on the 5×5 bingo card during Bingo Ranked matches.

Each match generates a unique randomized 5×5 board of 25 goals. Group objectives (such as logs, colored wool, or glass panes) cycle through allowable variants right on the tile every 1.5s.

{% hint style="info" %}
**Interactive Variant Menu:** Hover or **Right-Click** any tile with variants (`⇄`) to open a floating popover of all acceptable items directly above the block. Click any variant to lock it in place.
{% endhint %}

---

<div class="pepe-catalog-wrapper">
<div class="pepe-controls-bar">
<div class="pepe-search-wrap">
<svg class="pepe-search-icon" viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" /></svg>
<input type="text" id="pepe-search" class="pepe-search-input" placeholder="Search objectives, items, or IDs (e.g. glass_pane, diamond, wool)..." autocomplete="off" spellcheck="false" />
</div>
<label class="pepe-toggle-wrap">
<input type="checkbox" id="pepe-cycling-toggle" checked />
<span>⇄ Cycle Animation</span>
</label>
<div class="pepe-counter-badge">
Objectives: <strong id="pepe-count">256 / 256</strong>
</div>
</div>

<div class="pepe-category-tabs" id="pepe-category-tabs">
<!-- Categories: All, Blocks, Items, Tools, Armor, Food, Plants, Mechanisms, Kills, Nether -->
</div>

<div class="pepe-catalog-body" id="pepe-catalog">
<!-- Item grids rendered dynamically by scripts/targets.js -->
</div>

<div id="pepe-tooltip" class="pepe-tooltip" style="display: none;"></div>
<div id="pepe-popover" class="pepe-popover" style="display: none;"></div>
</div>

---

## How Objectives Are Scored

1. **Instant Detection:** The moment an objective item enters the player's inventory (via crafting, mining, chests, or mob drops), the slot on the card turns green.
2. **Items Are Kept:** Gathered items are not consumed by the card and remain available to craft further tools, gear, or subsequent goals.
3. **Group Objectives:** For multi-variant objectives, obtaining **any single** listed item satisfies the card slot.
