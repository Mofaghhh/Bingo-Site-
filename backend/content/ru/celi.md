# Каталог целей Bingo Ranked

В этом разделе собраны все 256 игровых целей, блоков и предметов, которые могут встретиться на бинго-карте 5×5 в матчах Bingo Ranked.

Каждый матч генерирует уникальную сетку из 25 случайных задач. Некоторые цели содержат группу взаимозаменяемых предметов (например, любой цвет шерсти или любой вид древесины) - в каталоге такие блоки циклично сменяются прямо в ячейке.

{% hint style="info" %}
**Навигация по каталогу:** наведите курсор на любую ячейку, чтобы увидеть точное название цели, ID предмета и условия выполнения. Если у цели есть несколько вариантов (обозначены значком `⇄`), кликните по ячейке, чтобы открыть список всех допустимых предметов.
{% endhint %}

---

<div class="pepe-catalog-wrapper">
<div class="pepe-controls-bar">
<div class="pepe-search-wrap">
<svg class="pepe-search-icon" viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" /></svg>
<input type="text" id="pepe-search" class="pepe-search-input" placeholder="Поиск цели, предмета или ID (например: oak_log, алмаз, шерсть)..." autocomplete="off" spellcheck="false" />
</div>
<label class="pepe-toggle-wrap">
<input type="checkbox" id="pepe-cycling-toggle" checked />
<span>⇄ Цикличная анимация вариантов</span>
</label>
<div class="pepe-counter-badge">
Целей: <strong id="pepe-count">256 / 256</strong>
</div>
</div>

<div class="pepe-category-tabs" id="pepe-category-tabs">
<!-- Категории генерируются динамически -->
</div>

<div class="pepe-catalog-body" id="pepe-catalog">
<!-- Сетки блоков генерируются динамически scripts/targets.js -->
</div>

<div id="pepe-tooltip" class="pepe-tooltip" style="display: none;"></div>

<div class="pepe-modal-overlay" id="pepe-modal" role="dialog" aria-modal="true">
<div class="pepe-modal-dialog">
<div class="pepe-modal-header">
<div>
<h3 id="pepe-modal-title" class="pepe-modal-title">Варианты цели</h3>
<p id="pepe-modal-subtitle" class="pepe-modal-subtitle">Любой из предметов ниже засчитывает эту цель</p>
</div>
<button type="button" class="pepe-modal-close" id="pepe-modal-close" aria-label="Закрыть">✕</button>
</div>
<div class="pepe-modal-grid" id="pepe-modal-grid">
<!-- Элементы вариантов -->
</div>
</div>
</div>
</div>

---

## Как засчитываются цели в матче

1. **Моментальная фиксация:** как только целевой предмет попадает в инвентарь игрока (из крафта, сундука, дропа моба или раскопки), ячейка на карте немедленно загорается зелёным цветом.
2. **Предметы не изымаются:** полученные ресурсы остаются у вас, их можно использовать для создания инструментов, брони или продвижения по следующим целям.
3. **Групповые цели:** для целей с пометкой группы достаточно получить **любой один** предмет из списка (например, достаточно добыть 1 любое бревно берёзы, чтобы закрыть цель на брёвна).
