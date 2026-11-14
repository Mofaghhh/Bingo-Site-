# Bingo Ranked Objectives Catalog

This catalog outlines the in-game objectives, blocks, and items that appear on the 5×5 bingo board in Bingo Ranked matches.

Each match generates a unique board of 25 random tasks. Certain objectives accept a group of interchangeable items (such as any wool color or any tree log) - in this catalog, these items cycle dynamically within their slot.

{% hint style="info" %}
**Interactive Prototype:** the objectives database is currently being populated and calibrated. Click any card with a group icon (`⇄`) to view all valid interchangeable items for that objective.
{% endhint %}

---

<div class="targets-catalog-wrapper">
<div class="targets-controls-panel">
<div class="targets-search-row">
<div class="targets-search-input-wrap">
<input type="text" id="targets-search" class="targets-search-input" placeholder="Search by objective name, item, or hint..." autocomplete="off" spellcheck="false" />
</div>
<label class="targets-toggle-wrap">
<input type="checkbox" id="targets-cycling-toggle" checked />
<span>⇄ Cycle Variant Animation</span>
</label>
</div>

<div class="targets-filter-row">
<div class="targets-filter-pills" id="targets-category-tabs">
<button type="button" class="targets-filter-btn active" data-category="all">All Categories</button>
<button type="button" class="targets-filter-btn" data-category="blocks">Blocks</button>
<button type="button" class="targets-filter-btn" data-category="items">Items</button>
<button type="button" class="targets-filter-btn" data-category="food">Food</button>
<button type="button" class="targets-filter-btn" data-category="redstone">Mechanisms</button>
<button type="button" class="targets-filter-btn" data-category="nether">Nether</button>
</div>

<div class="targets-filter-pills" id="targets-diff-tabs">
<button type="button" class="targets-filter-btn active" data-diff="all">Any Difficulty</button>
<button type="button" class="targets-filter-btn" data-diff="easy">Easy</button>
<button type="button" class="targets-filter-btn" data-diff="medium">Medium</button>
<button type="button" class="targets-filter-btn" data-diff="hard">Hard</button>
</div>

<div class="targets-count-badge">
Objectives Found: <strong id="targets-count">0</strong>
</div>
</div>
</div>

<div class="targets-grid" id="targets-grid">
<!-- Populated dynamically by scripts/targets.js -->
</div>

<div class="targets-modal" id="targets-modal" role="dialog" aria-modal="true">
<div class="targets-modal-dialog">
<div class="targets-modal-header">
<h3 id="targets-modal-title">Objective Variants</h3>
<button type="button" class="targets-modal-close-btn" id="targets-modal-close" aria-label="Close">✕</button>
</div>
<div class="targets-modal-body" id="targets-modal-body">
<!-- Group variants content -->
</div>
</div>
</div>
</div>

---

## How Objectives Are Claimed

1. **Instant Detection:** as soon as an item enters player inventory (via crafting, chest looting, mining, or mob drops), the corresponding board slot turns green.
2. **Items Retained:** collected items remain in your inventory and can be used to craft subsequent tools, armor, or weapons.
3. **Group Objectives:** for group objectives, collecting **any single variant** completes the requirement (e.g. obtaining 1 birch log completes the Wood Logs objective).
