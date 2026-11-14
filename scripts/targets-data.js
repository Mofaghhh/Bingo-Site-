/**
 * Bingo Ranked - Objectives Catalog Database
 * Модульная база целей соревновательного Бинго.
 * Поддерживает одиночные цели и циклические группы вариантов (шерсть, брёвна, руды и т.д.).
 */
(function () {
	'use strict';

	window.BINGO_TARGETS = [
		// 1. Цикличная группа: Цветная шерсть (13 цветов)
		{
			id: 'wool_colored',
			title: 'Цветная шерсть',
			titleEn: 'Colored Wool',
			category: 'items',
			difficulty: 'easy',
			description: 'Добыть или покрасить блок шерсти любого цвета.',
			descriptionEn: 'Obtain or dye a block of wool of any color.',
			tip: 'Подстригите овцу ножницами или скрафтите из 4 нитей, затем покрасьте красителем.',
			tipEn: 'Shear a sheep or craft from 4 string, then dye with any flower.',
			variants: [
				{ name: 'Белая шерсть', nameEn: 'White Wool', icon: 'white_wool.png' },
				{ name: 'Оранжевая шерсть', nameEn: 'Orange Wool', icon: 'orange_wool.png' },
				{ name: 'Пурпурная шерсть', nameEn: 'Magenta Wool', icon: 'magenta_wool.png' },
				{ name: 'Голубая шерсть', nameEn: 'Light Blue Wool', icon: 'light_blue_wool.png' },
				{ name: 'Жёлтая шерсть', nameEn: 'Yellow Wool', icon: 'yellow_wool.png' },
				{ name: 'Лаймовая шерсть', nameEn: 'Lime Wool', icon: 'lime_wool.png' },
				{ name: 'Розовая шерсть', nameEn: 'Pink Wool', icon: 'pink_wool.png' },
				{ name: 'Бирюзовая шерсть', nameEn: 'Cyan Wool', icon: 'cyan_wool.png' },
				{ name: 'Фиолетовая шерсть', nameEn: 'Purple Wool', icon: 'purple_wool.png' },
				{ name: 'Синяя шерсть', nameEn: 'Blue Wool', icon: 'blue_wool.png' },
				{ name: 'Зелёная шерсть', nameEn: 'Green Wool', icon: 'green_wool.png' },
				{ name: 'Красная шерсть', nameEn: 'Red Wool', icon: 'red_wool.png' },
				{ name: 'Чёрная шерсть', nameEn: 'Black Wool', icon: 'black_wool.png' }
			]
		},

		// 2. Цикличная группа: Древесина и брёвна (7 видов)
		{
			id: 'wood_logs',
			title: 'Брёвна деревьев',
			titleEn: 'Wood Logs',
			category: 'blocks',
			difficulty: 'easy',
			description: 'Срубить бревно любого дерева в мире.',
			descriptionEn: 'Chop a log from any tree in the overworld.',
			tip: 'Ищите соответствующий биом: тёмный лес, берёзовая роща, тайга, саванна или вишнёвая роща.',
			tipEn: 'Explore the right biome: dark forest, birch forest, taiga, savanna or cherry grove.',
			variants: [
				{ name: 'Дубовое бревно', nameEn: 'Oak Log', icon: 'oak_log.png' },
				{ name: 'Берёзовое бревно', nameEn: 'Birch Log', icon: 'birch_log.png' },
				{ name: 'Еловое бревно', nameEn: 'Spruce Log', icon: 'spruce_log.png' },
				{ name: 'Джунглевое бревно', nameEn: 'Jungle Log', icon: 'jungle_log.png' },
				{ name: 'Акациевое бревно', nameEn: 'Acacia Log', icon: 'acacia_log.png' },
				{ name: 'Тёмный дуб', nameEn: 'Dark Oak Log', icon: 'dark_oak_log.png' },
				{ name: 'Вишнёвое бревно', nameEn: 'Cherry Log', icon: 'cherry_log.png' }
			]
		},

		// 3. Цикличная группа: Руды Minecraft (8 видов)
		{
			id: 'ores_group',
			title: 'Природные руды',
			titleEn: 'Natural Ores',
			category: 'blocks',
			difficulty: 'medium',
			description: 'Добыть блок любой природной руды киркой с Шёлковым касанием или взорвать крипером.',
			descriptionEn: 'Obtain any ore block with Silk Touch or via creeper explosion.',
			tip: 'Уголь и железо встречаются на поверхности гор, алмазы залегают ниже Y=-16.',
			tipEn: 'Coal and iron spawn in mountains, diamonds generate below Y=-16.',
			variants: [
				{ name: 'Угольная руда', nameEn: 'Coal Ore', icon: 'coal_ore.png' },
				{ name: 'Железная руда', nameEn: 'Iron Ore', icon: 'iron_ore.png' },
				{ name: 'Медная руда', nameEn: 'Copper Ore', icon: 'copper_ore.png' },
				{ name: 'Золотая руда', nameEn: 'Gold Ore', icon: 'gold_ore.png' },
				{ name: 'Редстоуновая руда', nameEn: 'Redstone Ore', icon: 'redstone_ore.png' },
				{ name: 'Лазуритовая руда', nameEn: 'Lapis Ore', icon: 'lapis_ore.png' },
				{ name: 'Алмазная руда', nameEn: 'Diamond Ore', icon: 'diamond_ore.png' },
				{ name: 'Изумрудная руда', nameEn: 'Emerald Ore', icon: 'emerald_ore.png' }
			]
		},

		// 4. Цикличная группа: Вёдра (вода / лава)
		{
			id: 'bucket_group',
			title: 'Ведро с жидкостью',
			titleEn: 'Fluid Bucket',
			category: 'items',
			difficulty: 'easy',
			description: 'Набрать ведро воды или лавы.',
			descriptionEn: 'Collect a bucket of water or lava.',
			tip: 'Скрафтите ведро из 3 слитков железа и зачерпните ближайший водоём или лавовое озеро.',
			tipEn: 'Craft a bucket with 3 iron ingots and right-click water or lava.',
			variants: [
				{ name: 'Ведро воды', nameEn: 'Water Bucket', icon: 'water_bucket.png' },
				{ name: 'Ведро лавы', nameEn: 'Lava Bucket', icon: 'lava_bucket.png' }
			]
		},

		// 5. Цикличная группа: Поршни
		{
			id: 'piston_group',
			title: 'Поршень / Липкий поршень',
			titleEn: 'Piston / Sticky Piston',
			category: 'redstone',
			difficulty: 'medium',
			description: 'Скрафтить обычный или липкий поршень.',
			descriptionEn: 'Craft a standard piston or sticky piston.',
			tip: 'Требуются 3 доски, 4 булыжника, 1 железо и 1 редстоун. Для липкого добавьте слизь.',
			tipEn: 'Requires 3 planks, 4 cobblestone, 1 iron, 1 redstone. Add slime for sticky.',
			variants: [
				{ name: 'Поршень', nameEn: 'Piston', icon: 'piston.png' },
				{ name: 'Липкий поршень', nameEn: 'Sticky Piston', icon: 'sticky_piston.png' }
			]
		},

		// 6. Одиночная цель: Алмазная кирка
		{
			id: 'diamond_pickaxe',
			title: 'Алмазная кирка',
			titleEn: 'Diamond Pickaxe',
			category: 'items',
			difficulty: 'hard',
			description: 'Скрафтить алмазную кирку на верстаке.',
			descriptionEn: 'Craft a diamond pickaxe at a crafting table.',
			tip: 'Добудьте 3 алмаза на высоте Y=-58 и скрафтите с 2 палками.',
			tipEn: 'Mine 3 diamonds at Y=-58 and craft with 2 sticks.',
			icon: 'diamond_pickaxe.png'
		},

		// 7. Одиночная цель: Золотое яблоко
		{
			id: 'golden_apple',
			title: 'Золотое яблоко',
			titleEn: 'Golden Apple',
			category: 'food',
			difficulty: 'medium',
			description: 'Скрафтить или найти золотое яблоко.',
			descriptionEn: 'Craft or discover a golden apple.',
			tip: 'Скрафтите из 1 обычного яблока (листва дуба) и 8 слитков золота.',
			tipEn: 'Surround 1 apple with 8 gold ingots on a crafting table.',
			icon: 'golden_apple.png'
		},

		// 8. Одиночная цель: Жемчуг Края
		{
			id: 'ender_pearl',
			title: 'Жемчуг Края',
			titleEn: 'Ender Pearl',
			category: 'items',
			difficulty: 'medium',
			description: 'Добыть жемчуг Края при победе над эндерменом или из сундука.',
			descriptionEn: 'Obtain an ender pearl by slaying an enderman or from dungeon loot.',
			tip: 'Убейте эндермена ночью на открытом пространстве или обменяйте у священника.',
			tipEn: 'Hunt an enderman at night or trade with an expert cleric.',
			icon: 'ender_pearl.png'
		},

		// 9. Одиночная цель: Огненный стержень (Ифрит)
		{
			id: 'blaze_rod',
			title: 'Огненный стержень',
			titleEn: 'Blaze Rod',
			category: 'nether',
			difficulty: 'hard',
			description: 'Отправиться в Незер и добыть стержень ифрита в крепости.',
			descriptionEn: 'Travel to the Nether and claim a blaze rod from a fortress.',
			tip: 'Постройте портал в Незер, найдите адскую крепость и победите ифрита.',
			tipEn: 'Build a Nether portal, locate a Nether fortress, and defeat a blaze.',
			icon: 'blaze_rod.png'
		},

		// 10. Одиночная цель: Наблюдатель (Observer)
		{
			id: 'observer',
			title: 'Наблюдатель',
			titleEn: 'Observer',
			category: 'redstone',
			difficulty: 'medium',
			description: 'Скрафтить блок наблюдателя.',
			descriptionEn: 'Craft an observer block.',
			tip: 'Требуется 6 булыжника, 2 редстоуна и 1 кварц Незера.',
			tipEn: 'Crafted from 6 cobblestone, 2 redstone dust, and 1 nether quartz.',
			icon: 'observer.png'
		},

		// 11. Одиночная цель: Динамит (TNT)
		{
			id: 'tnt',
			title: 'Динамит (TNT)',
			titleEn: 'TNT',
			category: 'blocks',
			difficulty: 'easy',
			description: 'Скрафтить блок взрывчатки TNT.',
			descriptionEn: 'Craft a block of TNT explosive.',
			tip: '5 пороха (криперы / пустынные храмы) + 4 песка в шахматном порядке.',
			tipEn: '5 gunpowder (creepers / temples) + 4 sand in an alternating grid.',
			icon: 'tnt.png'
		},

		// 12. Одиночная цель: Мокрая / Сухая губка
		{
			id: 'sponge',
			title: 'Губка',
			titleEn: 'Sponge',
			category: 'blocks',
			difficulty: 'hard',
			description: 'Найти мокрую губку в монументе океана или добыть со стража.',
			descriptionEn: 'Find a sponge inside an ocean monument or defeat an elder guardian.',
			tip: 'Осушите мокрую губку в печи для получения сухой.',
			tipEn: 'Smelt a wet sponge in a furnace to dry it out.',
			icon: 'sponge.png'
		},

		// 13. Одиночная цель: Плачущий обсидиан
		{
			id: 'crying_obsidian',
			title: 'Плачущий обсидиан',
			titleEn: 'Crying Obsidian',
			category: 'nether',
			difficulty: 'medium',
			description: 'Добыть блок светящегося плачущего обсидиана.',
			descriptionEn: 'Mine a block of glowing crying obsidian.',
			tip: 'Находится в разрушенных порталах либо выменивается у пиглинов за золотые слитки.',
			tipEn: 'Found at ruined portals or bartered from piglins with gold ingots.',
			icon: 'crying_obsidian.png'
		},

		// 14. Одиночная цель: Аметистовый бутон
		{
			id: 'amethyst_cluster',
			title: 'Аметистовый кластер',
			titleEn: 'Amethyst Cluster',
			category: 'blocks',
			difficulty: 'medium',
			description: 'Отыскать подземную аметистовую жеоду и сорвать кристалл.',
			descriptionEn: 'Locate an underground amethyst geode and collect a cluster.',
			tip: 'Жеоды встречаются под землёй и на дне глубоких океанов.',
			tipEn: 'Geodes generate underground and on deep ocean floors.',
			icon: 'amethyst_cluster.png'
		},

		// 15. Одиночная цель: Кальцит
		{
			id: 'calcite',
			title: 'Кальцит',
			titleEn: 'Calcite',
			category: 'blocks',
			difficulty: 'easy',
			description: 'Добыть белый блок кальцита.',
			descriptionEn: 'Mine a white calcite block.',
			tip: 'Образует средний слой вокруг аметистовой жеоды или залегает в каменистых пиках гор.',
			tipEn: 'Surrounds amethyst geodes or generates on stony mountain peaks.',
			icon: 'calcite.png'
		},

		// 16. Одиночная цель: Тотем бессмертия
		{
			id: 'totem_of_undying',
			title: 'Тотем бессмертия',
			titleEn: 'Totem of Undying',
			category: 'items',
			difficulty: 'hard',
			description: 'Победить заклинателя (эвокера) в рейде или лесном особняке.',
			descriptionEn: 'Defeat an Evoker during a village raid or woodland mansion.',
			tip: 'Вызовите рейд на деревню эффектом «Дурное знамение» и одолейте эвокера.',
			tipEn: 'Trigger a village raid with Bad Omen and defeat the evoker.',
			icon: 'totem_of_undying.png'
		},

		// 17. Одиночная цель: Подзорная труба
		{
			id: 'spyglass',
			title: 'Подзорная труба',
			titleEn: 'Spyglass',
			category: 'items',
			difficulty: 'easy',
			description: 'Скрафтить подзорную трубу для приближения обзора.',
			descriptionEn: 'Craft a spyglass for zoom exploration.',
			tip: 'Требуется 2 медных слитка и 1 осколок аметиста.',
			tipEn: 'Requires 2 copper ingots and 1 amethyst shard.',
			icon: 'spyglass.png'
		},

		// 18. Одиночная цель: Компас
		{
			id: 'compass',
			title: 'Компас',
			titleEn: 'Compass',
			category: 'items',
			difficulty: 'easy',
			description: 'Скрафтить компас, указывающий на точку мирового спавна.',
			descriptionEn: 'Craft a compass pointing to world spawn.',
			tip: 'Скрафтите из 4 слитков железа и 1 редстоуна на верстаке.',
			tipEn: 'Craft with 4 iron ingots surrounding 1 redstone dust.',
			icon: 'compass.png'
		},

		// 19. Одиночная цель: Часы
		{
			id: 'clock',
			title: 'Часы',
			titleEn: 'Clock',
			category: 'items',
			difficulty: 'easy',
			description: 'Скрафтить часы для отслеживания времени суток.',
			descriptionEn: 'Craft a clock to track day and night cycles.',
			tip: 'Скрафтите из 4 слитков золота и 1 редстоуна.',
			tipEn: 'Craft with 4 gold ingots surrounding 1 redstone dust.',
			icon: 'clock.png'
		},

		// 20. Одиночная цель: Бутылочка мёда
		{
			id: 'honey_bottle',
			title: 'Бутылочка мёда',
			titleEn: 'Honey Bottle',
			category: 'food',
			difficulty: 'easy',
			description: 'Собрать мёд из переполненного пчелиного гнезда стеклянной колбой.',
			descriptionEn: 'Collect honey from a full bee nest using a glass bottle.',
			tip: 'Ищите пчелиные ульи на деревьях в цветочных лесах и равнинах.',
			tipEn: 'Search for bee nests on trees in flower forests and plains.',
			icon: 'honey_bottle.png'
		},

		// 21. Одиночная цель: Тушёные грибы
		{
			id: 'mushroom_stew',
			title: 'Тушёные грибы',
			titleEn: 'Mushroom Stew',
			category: 'food',
			difficulty: 'easy',
			description: 'Сварить похлёбку из красного и коричневого гриба.',
			descriptionEn: 'Craft a bowl of mushroom stew.',
			tip: '1 деревянная миска + 1 красный гриб + 1 коричневый гриб (в пещерах или тёмном лесу).',
			tipEn: '1 bowl + 1 red mushroom + 1 brown mushroom in crafting grid.',
			icon: 'mushroom_stew.png'
		},

		// 22. Одиночная цель: Тыквенный пирог
		{
			id: 'pumpkin_pie',
			title: 'Тыквенный пирог',
			titleEn: 'Pumpkin Pie',
			category: 'food',
			difficulty: 'easy',
			description: 'Приготовить тыквенный пирог.',
			descriptionEn: 'Bake a fresh pumpkin pie.',
			tip: '1 тыква + 1 сахар + 1 куриное яйцо.',
			tipEn: '1 pumpkin + 1 sugar + 1 chicken egg.',
			icon: 'pumpkin_pie.png'
		},

		// 23. Одиночная цель: Печенье
		{
			id: 'cookie',
			title: 'Печенье',
			titleEn: 'Cookie',
			category: 'food',
			difficulty: 'medium',
			description: 'Испечь печенье из пшеницы и какао-бобов.',
			descriptionEn: 'Bake cookies using wheat and cocoa beans.',
			tip: 'Какао-бобы растут на стволах деревьев в джунглях.',
			tipEn: 'Cocoa beans grow on jungle tree trunks.',
			icon: 'cookie.png'
		},

		// 24. Одиночная цель: Лук
		{
			id: 'bow',
			title: 'Лук',
			titleEn: 'Bow',
			category: 'items',
			difficulty: 'easy',
			description: 'Скрафтить охотничий лук.',
			descriptionEn: 'Craft a standard hunting bow.',
			tip: '3 палки и 3 нити (пауки / паутина в заброшенных шахтах).',
			tipEn: '3 sticks and 3 string (spiders / cobwebs).',
			icon: 'bow.png'
		},

		// 25. Одиночная цель: Железный нагрудник
		{
			id: 'iron_chestplate',
			title: 'Железный нагрудник',
			titleEn: 'Iron Chestplate',
			category: 'items',
			difficulty: 'easy',
			description: 'Сковать железную броню на верстаке.',
			descriptionEn: 'Forge an iron chestplate.',
			tip: 'Требуется 8 слитков переплавленного железа.',
			tipEn: 'Requires 8 smelted iron ingots.',
			icon: 'iron_chestplate.png'
		},

		// 26. Одиночная цель: Седло
		{
			id: 'saddle',
			title: 'Седло',
			titleEn: 'Saddle',
			category: 'items',
			difficulty: 'medium',
			description: 'Отыскать седло в сокровищнице, деревне или выловить удочкой.',
			descriptionEn: 'Find a saddle in dungeon chests, villages, or through fishing.',
			tip: 'Седло нельзя скрафтить, ищите в сундуках кузниц, шахт или пустынных храмов.',
			tipEn: 'Cannot be crafted; loot from blacksmith chests, mineshafts or temples.',
			icon: 'saddle.png'
		},

		// 27. Одиночная цель: Бирка (Name Tag)
		{
			id: 'name_tag',
			title: 'Именная бирка',
			titleEn: 'Name Tag',
			category: 'items',
			difficulty: 'medium',
			description: 'Найти бирку для именования существ.',
			descriptionEn: 'Find a name tag to name mobs.',
			tip: 'Встречается в сундуках спавнеров, затонувших кораблей или выменивается у библиотекаря.',
			tipEn: 'Found in spawner dungeons, shipwrecks, or traded from master librarians.',
			icon: 'name_tag.png'
		}
	];
})();
