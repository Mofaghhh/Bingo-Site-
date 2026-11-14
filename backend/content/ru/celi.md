# Каталог целей Bingo Ranked

В этом разделе собраны все 256 игровых целей, блоков и предметов, которые могут встретиться на бинго-карте 5×5 в матчах Bingo Ranked.

Каждый матч генерирует уникальную сетку из 25 случайных задач. Групповые цели (например, любые брёвна, цветная шерсть или стеклянные панели) циклично сменяются в ячейке каждые 1.5 сек.

{% hint style="info" %}
**Удобное меню вариантов:** наведите курсор или нажмите **ПКМ** на любую ячейку с вариантами (`⇄`), чтобы открыть плавающее меню со всеми допустимыми предметами прямо над блоком. Клик по предмету в меню зафиксирует нужный вариант.
{% endhint %}

---

<div class="pepe-catalog-wrapper">
<div class="pepe-controls-bar">
<div class="pepe-search-wrap">
<svg class="pepe-search-icon" viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" /></svg>
<input type="text" id="pepe-search" class="pepe-search-input" placeholder="Поиск цели, предмета или ID (например: glass_pane, алмаз, шерсть)..." autocomplete="off" spellcheck="false" />
</div>
<label class="pepe-toggle-wrap">
<input type="checkbox" id="pepe-cycling-toggle" checked />
<span>⇄ Цикличная анимация</span>
</label>
<div class="pepe-counter-badge">
Целей: <strong id="pepe-count">256 / 256</strong>
</div>
</div>

<div class="pepe-category-tabs" id="pepe-category-tabs">
<!-- Категории: Все, Блоки, Предметы, Инструменты, Броня, Еда, Растения, Механизмы, Убийства, Незер -->
</div>

<div class="pepe-catalog-body" id="pepe-catalog">
<!-- Сетки генерируются динамически scripts/targets.js -->
</div>

<div id="pepe-tooltip" class="pepe-tooltip" style="display: none;"></div>
<div id="pepe-popover" class="pepe-popover" style="display: none;"></div>
</div>

---

## Как засчитываются цели в матче

1. **Моментальная фиксация:** как только целевой предмет попадает в инвентарь игрока (из крафта, сундука, дропа моба или раскопки), ячейка на карте немедленно загорается зелёным цветом.
2. **Предметы не изымаются:** полученные ресурсы остаются у вас, их можно использовать для создания инструментов, брони или продвижения по следующим целям.
3. **Групповые цели:** для целей с пометкой группы достаточно получить **любой один** предмет из списка (например, достаточно добыть 1 любое бревно берёзы, чтобы закрыть цель на брёвна).
