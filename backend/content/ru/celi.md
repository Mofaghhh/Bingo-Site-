# Каталог целей Bingo Ranked

В этом разделе собраны игровые цели, блоки и предметы, которые могут встретиться на бинго-карте 5×5 в матчах Bingo Ranked.

Каждый матч генерирует уникальную сетку из 25 случайных задач. Некоторые цели содержат группу взаимозаменяемых предметов (например, любой цвет шерсти или любой вид древесины) - в каталоге такие блоки циклично сменяются в ячейке.

{% hint style="info" %}
**Тестовая заготовка каталога:** база целей наполняется и согласовывается. Кликните по любой карточке с группой вариантов (обозначена значком `⇄`), чтобы открыть полное окно всех допустимых предметов.
{% endhint %}

---

<div class="targets-catalog-wrapper">
<div class="targets-controls-panel">
<div class="targets-search-row">
<div class="targets-search-input-wrap">
<input type="text" id="targets-search" class="targets-search-input" placeholder="Поиск по названию цели, предмету или подсказке..." autocomplete="off" spellcheck="false" />
</div>
<label class="targets-toggle-wrap">
<input type="checkbox" id="targets-cycling-toggle" checked />
<span>⇄ Анимация смены вариантов</span>
</label>
</div>

<div class="targets-filter-row">
<div class="targets-filter-pills" id="targets-category-tabs">
<button type="button" class="targets-filter-btn active" data-category="all">Все категории</button>
<button type="button" class="targets-filter-btn" data-category="blocks">Блоки</button>
<button type="button" class="targets-filter-btn" data-category="items">Предметы</button>
<button type="button" class="targets-filter-btn" data-category="food">Еда</button>
<button type="button" class="targets-filter-btn" data-category="redstone">Механизмы</button>
<button type="button" class="targets-filter-btn" data-category="nether">Незер</button>
</div>

<div class="targets-filter-pills" id="targets-diff-tabs">
<button type="button" class="targets-filter-btn active" data-diff="all">Любая сложность</button>
<button type="button" class="targets-filter-btn" data-diff="easy">Легко</button>
<button type="button" class="targets-filter-btn" data-diff="medium">Средне</button>
<button type="button" class="targets-filter-btn" data-diff="hard">Сложно</button>
</div>

<div class="targets-count-badge">
Найдено целей: <strong id="targets-count">0</strong>
</div>
</div>
</div>

<div class="targets-grid" id="targets-grid">
<!-- Заполняется динамически скриптом scripts/targets.js -->
</div>

<div class="targets-modal" id="targets-modal" role="dialog" aria-modal="true">
<div class="targets-modal-dialog">
<div class="targets-modal-header">
<h3 id="targets-modal-title">Варианты цели</h3>
<button type="button" class="targets-modal-close-btn" id="targets-modal-close" aria-label="Закрыть">✕</button>
</div>
<div class="targets-modal-body" id="targets-modal-body">
<!-- Контент группы вариантов -->
</div>
</div>
</div>
</div>

---

## Как засчитываются цели в матче

1. **Моментальная фиксация:** как только целевой предмет попадает в инвентарь игрока (из крафта, сундука, дропа моба или раскопки), ячейка на карте немедленно загорается зелёным.
2. **Предметы не изымаются:** ресурсы остаются у вас, их можно использовать для крафта следующих инструментов или снаряжения.
3. **Групповые цели:** для целей с пометкой группы достаточно получить **любой один** предмет из списка (например, достаточно добыть 1 любое бревно берёзы, чтобы закрыть цель на брёвна).
