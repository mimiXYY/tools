const goods = {
    "blink": {
        "hint": [
            "Active: Blink Teleport to a target point up to 1200 units away. \n\nBlink Dagger cannot be used for 3 seconds after taking damage from an enemy hero or Roshan."
        ],
        "id": 1,
        "img": "/apps/dota2/images/dota_react/items/blink.png?t=1593393829403",
        "dname": "Blink Dagger",
        "qual": "component",
        "cost": 2250,
        "notes": "Self-casting will cause you to teleport in the direction of your team's fountain.\nIf you used Blink to teleport to a distance over the maximum range, you'll be teleported 4/5 of the maximum range instead.",
        "attrib": [
            {
                "key": "blink_range",
                "header": "BLINK RANGE:",
                "value": "1200"
            },
            {
                "key": "blink_damage_cooldown",
                "header": "BLINK DAMAGE COOLDOWN:",
                "value": "3.0"
            },
            {
                "key": "blink_range_clamp",
                "header": "BLINK RANGE CLAMP:",
                "value": "960"
            }
        ],
        "mc": false,
        "cd": 15,
        "lore": "The fabled dagger used by the fastest assassin ever to walk the lands.",
        "components": null,
        "created": false,
        "charges": false
    },
    "overwhelming_blink": {
        "hint": [
            "Active: Overwhelming Blink Teleport to a target point up to 1200 units away.\n\nAfter teleportation, all enemies in a 800 AoE take damage equal to 100 + 50% of your strength and an additional 100% over time, and have 50% movement speed slow and 50 attack speed slow for 6 seconds. \n\nOverwhelming Blink cannot be used for 3 seconds after taking damage from an enemy hero or Roshan."
        ],
        "id": 600,
        "img": "/apps/dota2/images/dota_react/items/overwhelming_blink.png?t=1593393829403",
        "dname": "Overwhelming Blink",
        "qual": "component",
        "cost": 6800,
        "notes": "Self-casting will cause you to teleport in the direction of your team's fountain.\nIf you used Overwhelming Blink to teleport to a distance over the maximum range, you'll be teleported 4/5 of the maximum range instead.",
        "attrib": [
            {
                "key": "blink_range",
                "header": "BLINK RANGE:",
                "value": "1200"
            },
            {
                "key": "blink_damage_cooldown",
                "header": "BLINK DAMAGE COOLDOWN:",
                "value": "3.0"
            },
            {
                "key": "blink_range_clamp",
                "header": "BLINK RANGE CLAMP:",
                "value": "960"
            },
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "25"
            },
            {
                "key": "radius",
                "header": "RADIUS:",
                "value": "800"
            },
            {
                "key": "movement_slow",
                "header": "MOVEMENT SLOW:",
                "value": "50"
            },
            {
                "key": "attack_slow",
                "header": "ATTACK SLOW:",
                "value": "50"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "6"
            },
            {
                "key": "damage_base",
                "header": "DAMAGE BASE:",
                "value": "100"
            },
            {
                "key": "damage_pct_instant",
                "header": "DAMAGE PCT INSTANT:",
                "value": "50"
            },
            {
                "key": "damage_pct_over_time",
                "header": "DAMAGE PCT OVER TIME:",
                "value": "100"
            }
        ],
        "mc": false,
        "cd": 15,
        "lore": "A horrifying dagger forged in the chaos maw and nigh untouchable by mortal hands.",
        "components": [
            "blink",
            "reaver"
        ],
        "created": true,
        "charges": false
    },
    "swift_blink": {
        "hint": [
            "Active: Swift Blink Teleport to a target point up to 1200 units away.\n\nAfter teleportation, you gain 40% phased movement speed and +35 Agility for 6 seconds. \n\nSwift Blink cannot be used for 3 seconds after taking damage from an enemy hero or Roshan."
        ],
        "id": 603,
        "img": "/apps/dota2/images/dota_react/items/swift_blink.png?t=1593393829403",
        "dname": "Swift Blink",
        "qual": "component",
        "cost": 6800,
        "notes": "Self-casting will cause you to teleport in the direction of your team's fountain.\nIf you used Swift Blink to teleport to a distance over the maximum range, you'll be teleported 4/5 of the maximum range instead.",
        "attrib": [
            {
                "key": "blink_range",
                "header": "BLINK RANGE:",
                "value": "1200"
            },
            {
                "key": "blink_damage_cooldown",
                "header": "BLINK DAMAGE COOLDOWN:",
                "value": "3.0"
            },
            {
                "key": "blink_range_clamp",
                "header": "BLINK RANGE CLAMP:",
                "value": "960"
            },
            {
                "key": "bonus_agility",
                "header": "BONUS AGILITY:",
                "value": "25"
            },
            {
                "key": "bonus_movement",
                "header": "BONUS MOVEMENT:",
                "value": "40"
            },
            {
                "key": "bonus_agi_active",
                "header": "BONUS AGI ACTIVE:",
                "value": "35"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "6"
            }
        ],
        "mc": false,
        "cd": 15,
        "lore": "A cunning blade able to anticipate and enable its bearer's movements.",
        "components": [
            "blink",
            "eagle"
        ],
        "created": true,
        "charges": false
    },
    "arcane_blink": {
        "hint": [
            "Active: Arcane Blink Teleport to a target point up to 1400 units away. \n\nAfter teleportation, you restore 200 health and 100 mana.\n\nArcane Blink cannot be used for 3 seconds after taking damage from an enemy hero or Roshan."
        ],
        "id": 604,
        "img": "/apps/dota2/images/dota_react/items/arcane_blink.png?t=1593393829403",
        "dname": "Arcane Blink",
        "qual": "component",
        "cost": 6800,
        "notes": "Self-casting will cause you to teleport in the direction of your team's fountain.\nIf you used Arcane Blink to teleport to a distance over the maximum range, you'll be teleported 4/5 of the maximum range instead.",
        "attrib": [
            {
                "key": "blink_range",
                "header": "BLINK RANGE:",
                "value": "1400"
            },
            {
                "key": "blink_damage_cooldown",
                "header": "BLINK DAMAGE COOLDOWN:",
                "value": "3.0"
            },
            {
                "key": "blink_range_clamp",
                "header": "BLINK RANGE CLAMP:",
                "value": "960"
            },
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "25"
            },
            {
                "key": "heal_amount",
                "header": "HEAL AMOUNT:",
                "value": "200"
            },
            {
                "key": "mana_amount",
                "header": "MANA AMOUNT:",
                "value": "100"
            }
        ],
        "mc": false,
        "cd": 7,
        "lore": "A revitalizing tool to help bear the weight of arcane expenditure.",
        "components": [
            "blink",
            "mystic_staff"
        ],
        "created": true,
        "charges": false
    },
    "recipe_arcane_blink": {
        "id": 606,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Arcane Blink Recipe",
        "cost": 1750,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "recipe_swift_blink": {
        "id": 607,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Swift Blink Recipe",
        "cost": 1750,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "recipe_overwhelming_blink": {
        "id": 608,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Overwhelming Blink Recipe",
        "cost": 1750,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "blades_of_attack": {
        "id": 2,
        "img": "/apps/dota2/images/dota_react/items/blades_of_attack.png?t=1593393829403",
        "dname": "Blades of Attack",
        "qual": "component",
        "cost": 450,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "9"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "The damage of these small, concealable blades should not be underestimated.",
        "components": null,
        "created": false,
        "charges": false
    },
    "broadsword": {
        "id": 3,
        "img": "/apps/dota2/images/dota_react/items/broadsword.png?t=1593393829403",
        "dname": "Broadsword",
        "qual": "component",
        "cost": 1000,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "15"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "The classic weapon of choice for knights, this blade is sturdy and reliable for slaying enemies.",
        "components": null,
        "created": false,
        "charges": false
    },
    "chainmail": {
        "id": 4,
        "img": "/apps/dota2/images/dota_react/items/chainmail.png?t=1593393829403",
        "dname": "Chainmail",
        "qual": "component",
        "cost": 550,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "4"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A medium weave of metal chains.",
        "components": null,
        "created": false,
        "charges": false
    },
    "claymore": {
        "id": 5,
        "img": "/apps/dota2/images/dota_react/items/claymore.png?t=1593393829403",
        "dname": "Claymore",
        "qual": "component",
        "cost": 1350,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "20"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A sword that can cut through armor, it's a commonly chosen first weapon for budding swordsmen.",
        "components": null,
        "created": false,
        "charges": false
    },
    "helm_of_iron_will": {
        "id": 6,
        "img": "/apps/dota2/images/dota_react/items/helm_of_iron_will.png?t=1593393829403",
        "dname": "Helm of Iron Will",
        "qual": "component",
        "cost": 975,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "5"
            },
            {
                "key": "bonus_regen",
                "header": "BONUS REGEN:",
                "value": "4"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "The helmet of a legendary warrior who fell in battle.",
        "components": null,
        "created": false,
        "charges": false
    },
    "javelin": {
        "hint": [
            "Passive: Pierce Grants each attack a 30% chance to pierce through evasion and deal 60 bonus magical damage."
        ],
        "id": 7,
        "img": "/apps/dota2/images/dota_react/items/javelin.png?t=1593393829403",
        "dname": "Javelin",
        "qual": "component",
        "cost": 900,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_chance",
                "header": "BONUS CHANCE:",
                "value": "30"
            },
            {
                "key": "bonus_chance_damage",
                "header": "BONUS CHANCE DAMAGE:",
                "value": "60"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A rather typical spear that can sometimes pierce through an enemy's armor when used to attack.",
        "components": null,
        "created": false,
        "charges": false
    },
    "mithril_hammer": {
        "id": 8,
        "img": "/apps/dota2/images/dota_react/items/mithril_hammer.png?t=1593393829403",
        "dname": "Mithril Hammer",
        "qual": "component",
        "cost": 1600,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "24"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A hammer forged of pure mithril.",
        "components": null,
        "created": false,
        "charges": false
    },
    "platemail": {
        "id": 9,
        "img": "/apps/dota2/images/dota_react/items/platemail.png?t=1593393829403",
        "dname": "Platemail",
        "qual": "secret_shop",
        "cost": 1400,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "10"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Thick metal plates that protect the entire upper body. Avoid dropping on feet.",
        "components": null,
        "created": false,
        "charges": false
    },
    "quarterstaff": {
        "id": 10,
        "img": "/apps/dota2/images/dota_react/items/quarterstaff.png?t=1593393829403",
        "dname": "Quarterstaff",
        "qual": "component",
        "cost": 875,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_speed",
                "header": "BONUS SPEED:",
                "value": "10"
            },
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "10"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A basic staff that allows you to strike quickly.",
        "components": null,
        "created": false,
        "charges": false
    },
    "quelling_blade": {
        "hint": [
            "Active: Chop Tree Destroy a target tree. \n\nCast Range: 350",
            "Passive: Quell  Increases attack damage against non-hero units by 8 for melee heroes, and 4 for ranged."
        ],
        "id": 11,
        "img": "/apps/dota2/images/dota_react/items/quelling_blade.png?t=1593393829403",
        "dname": "Quelling Blade",
        "qual": "component",
        "cost": 100,
        "notes": "Effects of multiple quelling blades do not stack.",
        "attrib": [
            {
                "key": "damage_bonus",
                "header": "DAMAGE BONUS:",
                "value": "8"
            },
            {
                "key": "damage_bonus_ranged",
                "header": "DAMAGE BONUS RANGED:",
                "value": "4"
            },
            {
                "key": "quelling_range_tooltip",
                "header": "QUELLING RANGE TOOLTIP:",
                "value": "350"
            }
        ],
        "mc": false,
        "cd": 4,
        "lore": "The axe of a fallen gnome, it allows you to effectively maneuver the forest.",
        "components": null,
        "created": false,
        "charges": false
    },
    "faerie_fire": {
        "hint": [
            "Use: Imbue Instantly restores 85 health."
        ],
        "id": 237,
        "img": "/apps/dota2/images/dota_react/items/faerie_fire.png?t=1593393829403",
        "dname": "Faerie Fire",
        "qual": "consumable",
        "cost": 65,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "2"
            },
            {
                "key": "hp_restore",
                "header": "HP RESTORE:",
                "value": "85"
            }
        ],
        "mc": false,
        "cd": 5,
        "lore": "The ethereal flames from the ever-burning ruins of Kindertree ignite across realities.",
        "components": null,
        "created": false,
        "charges": 1
    },
    "infused_raindrop": {
        "hint": [
            "Passive: Magical Damage Block Consumes a charge to block 120 magic damage from damage instances over 75 damage. \n\nComes with 6 charges. When the charges are gone, the item disappears."
        ],
        "id": 265,
        "img": "/apps/dota2/images/dota_react/items/infused_raindrop.png?t=1593393829403",
        "dname": "Infused Raindrops",
        "qual": "component",
        "cost": 225,
        "notes": "Uses at most one charge per damage instance.",
        "attrib": [
            {
                "key": "mana_regen",
                "header": "MANA REGEN:",
                "value": "0.8"
            },
            {
                "key": "magic_damage_block",
                "header": "MAGIC DAMAGE BLOCK:",
                "value": "120"
            },
            {
                "key": "min_damage",
                "header": "MIN DAMAGE:",
                "value": "75"
            },
            {
                "key": "initial_charges",
                "header": "INITIAL CHARGES:",
                "value": "6"
            }
        ],
        "mc": false,
        "cd": 7,
        "lore": "Elemental protection from magical assaults.",
        "components": null,
        "created": false,
        "charges": 6
    },
    "wind_lace": {
        "hint": [
            "Bonuses from multiple Wind Laces do not stack."
        ],
        "id": 244,
        "img": "/apps/dota2/images/dota_react/items/wind_lace.png?t=1593393829403",
        "dname": "Wind Lace",
        "qual": "component",
        "cost": 250,
        "notes": "",
        "attrib": [
            {
                "key": "movement_speed",
                "header": "MOVEMENT SPEED:",
                "value": "20"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Hasten to battle on wind-touched heels.",
        "components": null,
        "created": false,
        "charges": false
    },
    "ring_of_protection": {
        "id": 12,
        "img": "/apps/dota2/images/dota_react/items/ring_of_protection.png?t=1593393829403",
        "dname": "Ring of Protection",
        "qual": "component",
        "cost": 175,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "2"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A glimmering ring that defends its bearer.",
        "components": null,
        "created": false,
        "charges": false
    },
    "stout_shield": {
        "hint": [
            "Passive: Damage Block Grants a 50% chance to block 20 damage from incoming attacks on melee heroes, and 8 damage on ranged."
        ],
        "id": 182,
        "img": "/apps/dota2/images/dota_react/items/stout_shield.png?t=1593393829403",
        "dname": "Stout Shield",
        "qual": "component",
        "cost": 100,
        "notes": "Multiple sources of damage block do not stack.",
        "attrib": [
            {
                "key": "damage_block_melee",
                "header": "DAMAGE BLOCK MELEE:",
                "value": "20"
            },
            {
                "key": "damage_block_ranged",
                "header": "DAMAGE BLOCK RANGED:",
                "value": "8"
            },
            {
                "key": "block_chance",
                "header": "BLOCK CHANCE:",
                "value": "50"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "One man's wine barrel bottom is another man's shield.",
        "components": null,
        "created": false,
        "charges": false
    },
    "moon_shard": {
        "hint": [
            "Use: Consume Consume the Moon Shard to permanently gain 60 attack speed and 200 bonus night vision. Max 1 use.",
            "Passive: Shade Sight Grants bonus night vision."
        ],
        "id": 247,
        "img": "/apps/dota2/images/dota_react/items/moon_shard.png?t=1593393829403",
        "dname": "Moon Shard",
        "qual": "consumable",
        "cost": 4000,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_attack_speed",
                "header": "BONUS ATTACK SPEED:",
                "value": "140"
            },
            {
                "key": "bonus_night_vision",
                "header": "BONUS NIGHT VISION:",
                "value": "400"
            },
            {
                "key": "consumed_bonus",
                "header": "CONSUMED BONUS:",
                "value": "60"
            },
            {
                "key": "consumed_bonus_night_vision",
                "header": "CONSUMED BONUS NIGHT VISION:",
                "value": "200"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Said to be a tear from the lunar goddess Selemene.",
        "components": [
            "hyperstone",
            "hyperstone"
        ],
        "created": true,
        "charges": false
    },
    "gauntlets": {
        "id": 13,
        "img": "/apps/dota2/images/dota_react/items/gauntlets.png?t=1593393829403",
        "dname": "Gauntlets of Strength",
        "qual": "component",
        "cost": 140,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "3"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Studded leather gloves that add brute strength.",
        "components": null,
        "created": false,
        "charges": false
    },
    "slippers": {
        "id": 14,
        "img": "/apps/dota2/images/dota_react/items/slippers.png?t=1593393829403",
        "dname": "Slippers of Agility",
        "qual": "component",
        "cost": 140,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_agility",
                "header": "BONUS AGILITY:",
                "value": "3"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Light boots made from spider skin that tingles your senses.",
        "components": null,
        "created": false,
        "charges": false
    },
    "mantle": {
        "id": 15,
        "img": "/apps/dota2/images/dota_react/items/mantle.png?t=1593393829403",
        "dname": "Mantle of Intelligence",
        "qual": "component",
        "cost": 140,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "3"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A beautiful sapphire mantle worn by generations of queens.",
        "components": null,
        "created": false,
        "charges": false
    },
    "branches": {
        "hint": [
            "Use: Plant Tree Targets the ground to plant a happy little tree that lasts for 20 seconds.\n\nRange: 400"
        ],
        "id": 16,
        "img": "/apps/dota2/images/dota_react/items/branches.png?t=1593393829403",
        "dname": "Iron Branch",
        "qual": "consumable",
        "cost": 50,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_all_stats",
                "header": "BONUS ALL STATS:",
                "value": "1"
            },
            {
                "key": "tree_duration",
                "header": "TREE DURATION:",
                "value": "20"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A seemingly ordinary branch, its ironlike qualities are bestowed upon the bearer.",
        "components": null,
        "created": false,
        "charges": false
    },
    "belt_of_strength": {
        "id": 17,
        "img": "/apps/dota2/images/dota_react/items/belt_of_strength.png?t=1593393829403",
        "dname": "Belt of Strength",
        "qual": "component",
        "cost": 450,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "6"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A valued accessory for improving vitality.",
        "components": null,
        "created": false,
        "charges": false
    },
    "boots_of_elves": {
        "id": 18,
        "img": "/apps/dota2/images/dota_react/items/boots_of_elves.png?t=1593393829403",
        "dname": "Band of Elvenskin",
        "qual": "component",
        "cost": 450,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_agility",
                "header": "BONUS AGILITY:",
                "value": "6"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A tensile fabric often used for its light weight and ease of movement.",
        "components": null,
        "created": false,
        "charges": false
    },
    "robe": {
        "id": 19,
        "img": "/apps/dota2/images/dota_react/items/robe.png?t=1593393829403",
        "dname": "Robe of the Magi",
        "qual": "component",
        "cost": 450,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "6"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "This robe corrupts the soul of the user, but provides wisdom in return.",
        "components": null,
        "created": false,
        "charges": false
    },
    "circlet": {
        "id": 20,
        "img": "/apps/dota2/images/dota_react/items/circlet.png?t=1593393829403",
        "dname": "Circlet",
        "qual": "component",
        "cost": 155,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_all_stats",
                "header": "BONUS ALL STATS:",
                "value": "2"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "An elegant circlet designed for human princesses.",
        "components": null,
        "created": false,
        "charges": false
    },
    "crown": {
        "id": 261,
        "img": "/apps/dota2/images/dota_react/items/crown.png?t=1593393829403",
        "dname": "Crown",
        "qual": "component",
        "cost": 450,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_all_stats",
                "header": "BONUS ALL STATS:",
                "value": "4"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A stately crown created to ensure a well-meaning but ungifted heir could fend off usurpers and govern with a strong hand.",
        "components": null,
        "created": false,
        "charges": false
    },
    "diadem": {
        "id": 1122,
        "img": "/apps/dota2/images/dota_react/items/diadem.png?t=1593393829403",
        "dname": "Diadem",
        "qual": "component",
        "cost": 1000,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_all_stats",
                "header": "BONUS ALL STATS:",
                "value": "6"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "ogre_axe": {
        "id": 21,
        "img": "/apps/dota2/images/dota_react/items/ogre_axe.png?t=1593393829403",
        "dname": "Ogre Axe",
        "qual": "component",
        "cost": 1000,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "10"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "You grow stronger just by holding it.",
        "components": null,
        "created": false,
        "charges": false
    },
    "blade_of_alacrity": {
        "id": 22,
        "img": "/apps/dota2/images/dota_react/items/blade_of_alacrity.png?t=1593393829403",
        "dname": "Blade of Alacrity",
        "qual": "component",
        "cost": 1000,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_agility",
                "header": "BONUS AGILITY:",
                "value": "10"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A long blade imbued with time magic.",
        "components": null,
        "created": false,
        "charges": false
    },
    "staff_of_wizardry": {
        "id": 23,
        "img": "/apps/dota2/images/dota_react/items/staff_of_wizardry.png?t=1593393829403",
        "dname": "Staff of Wizardry",
        "qual": "component",
        "cost": 1000,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "10"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A staff of magical powers passed down from the eldest mages.",
        "components": null,
        "created": false,
        "charges": false
    },
    "ultimate_orb": {
        "id": 24,
        "img": "/apps/dota2/images/dota_react/items/ultimate_orb.png?t=1593393829403",
        "dname": "Ultimate Orb",
        "qual": "secret_shop",
        "cost": 2800,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_all_stats",
                "header": "BONUS ALL STATS:",
                "value": "15"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A mystical orb containing the essence of life.",
        "components": null,
        "created": false,
        "charges": false
    },
    "gloves": {
        "id": 25,
        "img": "/apps/dota2/images/dota_react/items/gloves.png?t=1593393829403",
        "dname": "Gloves of Haste",
        "qual": "component",
        "cost": 450,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_attack_speed",
                "header": "BONUS ATTACK SPEED:",
                "value": "20"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A pair of magical gloves that seems to render weapons weightless.",
        "components": null,
        "created": false,
        "charges": false
    },
    "blitz_knuckles": {
        "id": 485,
        "img": "/apps/dota2/images/dota_react/items/blitz_knuckles.png?t=1593393829403",
        "dname": "Blitz Knuckles",
        "qual": "component",
        "cost": 1000,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_attack_speed",
                "header": "BONUS ATTACK SPEED:",
                "value": "35"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "An underground arcanist's update of a back-alley classic.",
        "components": null,
        "created": false,
        "charges": false
    },
    "lifesteal": {
        "hint": [
            "Passive: Lifesteal Heals the attacker for a percentage of attack damage dealt. Lifesteal from creeps is reduced by 40%."
        ],
        "id": 26,
        "img": "/apps/dota2/images/dota_react/items/lifesteal.png?t=1593393829403",
        "dname": "Morbid Mask",
        "qual": "component",
        "cost": 900,
        "notes": "",
        "attrib": [
            {
                "key": "lifesteal_percent",
                "header": "LIFESTEAL PERCENT:",
                "value": "18"
            },
            {
                "key": "creep_lifesteal_reduction_pct",
                "header": "CREEP LIFESTEAL REDUCTION PCT:",
                "value": "40"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A mask that drains the energy of those caught in its gaze.",
        "components": null,
        "created": false,
        "charges": false
    },
    "voodoo_mask": {
        "hint": [
            "Passive: Spell Lifesteal Spell damage dealt to enemy heroes is returned to the caster as health, regardless of spell damage type. \n\nLifesteal reduced against creeps."
        ],
        "id": 473,
        "img": "/apps/dota2/images/dota_react/items/voodoo_mask.png?t=1593393829403",
        "dname": "Voodoo Mask",
        "qual": "component",
        "cost": 700,
        "notes": "",
        "attrib": [
            {
                "key": "spell_lifesteal",
                "header": "SPELL LIFESTEAL:",
                "value": "10"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A mask tuned to sip the arcane bindings that pass between caster and foe.",
        "components": null,
        "created": false,
        "charges": false
    },
    "ring_of_regen": {
        "id": 27,
        "img": "/apps/dota2/images/dota_react/items/ring_of_regen.png?t=1593393829403",
        "dname": "Ring of Regen",
        "qual": "component",
        "cost": 175,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_health_regen",
                "header": "BONUS HEALTH REGEN:",
                "value": "1.25"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "This ring is considered a good luck charm among the Gnomes.",
        "components": null,
        "created": false,
        "charges": false
    },
    "sobi_mask": {
        "id": 28,
        "img": "/apps/dota2/images/dota_react/items/sobi_mask.png?t=1593393829403",
        "dname": "Sage's Mask",
        "qual": "component",
        "cost": 175,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "0.7"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A mask commonly used by mages and warlocks for various rituals.",
        "components": null,
        "created": false,
        "charges": false
    },
    "boots": {
        "hint": [
            "Movement speed bonuses from multiple pairs of boots do not stack."
        ],
        "id": 29,
        "img": "/apps/dota2/images/dota_react/items/boots.png?t=1593393829403",
        "dname": "Boots of Speed",
        "qual": "component",
        "cost": 500,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_movement_speed",
                "header": "BONUS MOVEMENT SPEED:",
                "value": "45"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Fleet footwear, increasing movement.",
        "components": null,
        "created": false,
        "charges": false
    },
    "gem": {
        "hint": [
            "Active: Reveal Gives True Sight over a 300 radius revealing wards and units even in Fog of War.",
            "Passive: True Sight  Grants the ability to see invisible units and wards to any allied vision within 900 range of its carrier. ",
            "Passive: Everlasting Dropped on death, and cannot be destroyed. "
        ],
        "id": 30,
        "img": "/apps/dota2/images/dota_react/items/gem.png?t=1593393829403",
        "dname": "Gem of True Sight",
        "qual": "component",
        "cost": 900,
        "notes": "Disabled while on a courier.",
        "attrib": [
            {
                "key": "radius",
                "header": "RADIUS:",
                "value": "900"
            },
            {
                "key": "active_radius",
                "header": "ACTIVE RADIUS:",
                "value": "300"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "4"
            }
        ],
        "mc": false,
        "cd": 12,
        "lore": "Not one thrall creature of the depths,\r\nNor spirit bound in drowning's keep,\r\nNor Maelrawn the Tentacular,\r\nShall rest till seas, gem comes to sleep.",
        "components": null,
        "created": false,
        "charges": false
    },
    "cloak": {
        "id": 31,
        "img": "/apps/dota2/images/dota_react/items/cloak.png?t=1593393829403",
        "dname": "Cloak",
        "qual": "component",
        "cost": 800,
        "notes": "Stacks multiplicatively with other sources of spell resistance.",
        "attrib": [
            {
                "key": "bonus_magical_armor",
                "header": "BONUS MAGICAL ARMOR:",
                "value": "20"
            },
            {
                "key": "tooltip_resist",
                "header": "TOOLTIP RESIST:",
                "value": "20"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A cloak made of a magical material that works to dispel any magic cast on it.",
        "components": null,
        "created": false,
        "charges": false
    },
    "talisman_of_evasion": {
        "id": 32,
        "img": "/apps/dota2/images/dota_react/items/talisman_of_evasion.png?t=1593393829403",
        "dname": "Talisman of Evasion",
        "qual": "secret_shop",
        "cost": 1300,
        "notes": "Stacks diminishingly with other sources of Evasion.",
        "attrib": [
            {
                "key": "bonus_evasion",
                "header": "BONUS EVASION:",
                "value": "15"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A necklace that allows you to anticipate enemy attacks.",
        "components": null,
        "created": false,
        "charges": false
    },
    "cheese": {
        "hint": [
            "Use: Fondue Instantly restores 2500 health and 1500 mana."
        ],
        "id": 33,
        "img": "/apps/dota2/images/dota_react/items/cheese.png?t=1593393829403",
        "dname": "Cheese",
        "qual": "consumable",
        "cost": 1000,
        "notes": "Cheese is shareable.",
        "attrib": [
            {
                "key": "health_restore",
                "header": "HEALTH RESTORE:",
                "value": "2500"
            },
            {
                "key": "mana_restore",
                "header": "MANA RESTORE:",
                "value": "1500"
            }
        ],
        "mc": false,
        "cd": 40,
        "lore": "Made from the milk of a long lost Furbolg vendor, it restores the vitality of those who taste it.",
        "components": null,
        "created": false,
        "charges": 1
    },
    "magic_stick": {
        "hint": [
            "Active: Energy Charge Instantly restores 15 health and mana per charge stored.\n\n Max 10 charges. Gains a charge whenever a visible enemy within 1200 range uses an ability."
        ],
        "id": 34,
        "img": "/apps/dota2/images/dota_react/items/magic_stick.png?t=1593393829403",
        "dname": "Magic Stick",
        "qual": "component",
        "cost": 200,
        "notes": "Gains charges for spells cast by visible enemies in 1200 range.\nCertain abilities and item abilities will not add charges.",
        "attrib": [
            {
                "key": "max_charges",
                "header": "MAX CHARGES:",
                "value": "10"
            },
            {
                "key": "charge_radius",
                "header": "CHARGE RADIUS:",
                "value": "1200"
            },
            {
                "key": "restore_per_charge",
                "header": "RESTORE PER CHARGE:",
                "value": "15"
            }
        ],
        "mc": false,
        "cd": 13,
        "lore": "A simple wand used to channel magic energies, it is favored by apprentice wizards and great warlocks alike.",
        "components": null,
        "created": false,
        "charges": false
    },
    "recipe_magic_wand": {
        "id": 35,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Magic Wand Recipe",
        "cost": 150,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "magic_wand": {
        "hint": [
            "Active: Energy Charge Instantly restores 15 health and mana per charge stored. \n\nMax 20 charges. Gains a charge whenever a visible enemy within 1200 range uses an ability."
        ],
        "id": 36,
        "img": "/apps/dota2/images/dota_react/items/magic_wand.png?t=1593393829403",
        "dname": "Magic Wand",
        "qual": "common",
        "cost": 450,
        "notes": "Gains charges for spells cast by visible enemies in 1200 range.\nCertain abilities and item abilities will not add charges.",
        "attrib": [
            {
                "key": "max_charges",
                "header": "MAX CHARGES:",
                "value": "20"
            },
            {
                "key": "charge_radius",
                "header": "CHARGE RADIUS:",
                "value": "1200"
            },
            {
                "key": "bonus_all_stats",
                "header": "BONUS ALL STATS:",
                "value": "3"
            },
            {
                "key": "restore_per_charge",
                "header": "RESTORE PER CHARGE:",
                "value": "15"
            }
        ],
        "mc": false,
        "cd": 13,
        "lore": "A simple wand used to channel magic energies, it is favored by apprentice wizards and great warlocks alike.",
        "components": [
            "magic_stick",
            "branches",
            "branches"
        ],
        "created": true,
        "charges": false
    },
    "ghost": {
        "hint": [
            "Active: Ghost Form You enter ghost form for 4 seconds, becoming immune to physical damage, but are unable to attack and -40% more vulnerable to magic damage."
        ],
        "id": 37,
        "img": "/apps/dota2/images/dota_react/items/ghost.png?t=1593393829403",
        "dname": "Ghost Scepter",
        "qual": "component",
        "cost": 1500,
        "notes": "Ends if you become Spell Immune, and will have no effect if you are already Spell Immune.\nShares cooldown with Ethereal Blade.",
        "attrib": [
            {
                "key": "bonus_all_stats",
                "header": "BONUS ALL STATS:",
                "value": "5"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "4.0"
            },
            {
                "key": "extra_spell_damage_percent",
                "header": "EXTRA SPELL DAMAGE PERCENT:",
                "value": "-40"
            }
        ],
        "mc": false,
        "cd": 22,
        "lore": "Imbues the wielder with a ghostly presence, allowing them to evade physical damage.",
        "components": null,
        "created": false,
        "charges": false
    },
    "clarity": {
        "hint": [
            "Use: Replenish Grants 6 mana regeneration to the target for 25 seconds.\n\nIf the unit is attacked by an enemy hero or Roshan, the effect is lost.\n\nRange: 250"
        ],
        "id": 38,
        "img": "/apps/dota2/images/dota_react/items/clarity.png?t=1593393829403",
        "dname": "Clarity",
        "qual": "consumable",
        "cost": 50,
        "notes": "",
        "attrib": [
            {
                "key": "mana_regen",
                "header": "MANA REGEN:",
                "value": "6"
            },
            {
                "key": "buff_duration",
                "header": "BUFF DURATION:",
                "value": "25"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Clear water that enhances the ability to meditate.",
        "components": null,
        "created": false,
        "charges": 1
    },
    "enchanted_mango": {
        "hint": [
            "Use: Eat Mango Instantly restores 100 mana.\n\nRange: 400"
        ],
        "id": 216,
        "img": "/apps/dota2/images/dota_react/items/enchanted_mango.png?t=1593393829403",
        "dname": "Enchanted Mango",
        "qual": "consumable",
        "cost": 65,
        "notes": "Hold Control to use on a nearby allied hero.",
        "attrib": [
            {
                "key": "hp_regen",
                "header": "HP REGEN:",
                "value": "0.4"
            },
            {
                "key": "replenish_amount",
                "header": "REPLENISH AMOUNT:",
                "value": "100"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "The bittersweet flavors of Jidi Isle are irresistible to amphibians.",
        "components": null,
        "created": false,
        "charges": 1
    },
    "famango": {
        "hint": [
            "Use: Eat Lotus Instantly restores 125 health and mana.\n\nRange: 400"
        ],
        "id": 4204,
        "img": "/apps/dota2/images/dota_react/items/famango.png?t=1593393829403",
        "dname": "Healing Lotus",
        "qual": "consumable",
        "cost": 0,
        "notes": "Hold Control to use on a nearby allied hero.",
        "attrib": [
            {
                "key": "replenish_amount",
                "header": "REPLENISH AMOUNT:",
                "value": "125"
            }
        ],
        "mc": false,
        "cd": 5,
        "lore": "",
        "components": null,
        "created": false,
        "charges": 1
    },
    "great_famango": {
        "hint": [
            "Use: Eat Lotus Instantly restores 400 health and mana.\n\nRange: 400"
        ],
        "id": 4205,
        "img": "/apps/dota2/images/dota_react/items/great_famango.png?t=1593393829403",
        "dname": "Great Healing Lotus",
        "qual": "consumable",
        "cost": 0,
        "notes": "Hold Control to use on a nearby allied hero.",
        "attrib": [
            {
                "key": "replenish_amount",
                "header": "REPLENISH AMOUNT:",
                "value": "400"
            }
        ],
        "mc": false,
        "cd": 5,
        "lore": "",
        "components": [
            "famango",
            "famango",
            "famango"
        ],
        "created": true,
        "charges": 1
    },
    "greater_famango": {
        "hint": [
            "Use: Eat Lotus Instantly restores 900 health and mana.\n\nRange: 400"
        ],
        "id": 4206,
        "img": "/apps/dota2/images/dota_react/items/greater_famango.png?t=1593393829403",
        "dname": "Greater Healing Lotus",
        "qual": "consumable",
        "cost": 0,
        "notes": "Hold Control to use on a nearby allied hero.",
        "attrib": [
            {
                "key": "replenish_amount",
                "header": "REPLENISH AMOUNT:",
                "value": "900"
            }
        ],
        "mc": false,
        "cd": 5,
        "lore": "",
        "components": [
            "great_famango",
            "great_famango"
        ],
        "created": true,
        "charges": 1
    },
    "blood_grenade": {
        "hint": [
            "Use: Throw Grenade Throw a grenade at the target area. Enemies in the area will take 50 damage on impact, and be slowed by -15% and take 15 damage every 1s for 5 seconds. Radius 300. "
        ],
        "id": 1123,
        "img": "/apps/dota2/images/dota_react/items/blood_grenade.png?t=1593393829403",
        "dname": "Blood Grenade",
        "qual": "consumable",
        "cost": 50,
        "notes": "",
        "attrib": [
            {
                "key": "speed",
                "header": "SPEED:",
                "value": "1100"
            },
            {
                "key": "radius",
                "header": "RADIUS:",
                "value": "300"
            },
            {
                "key": "movespeed_slow",
                "header": "MOVESPEED SLOW:",
                "value": "-15"
            },
            {
                "key": "bonus_health",
                "header": "BONUS HEALTH:",
                "value": "50"
            },
            {
                "key": "damage_over_time",
                "header": "DAMAGE OVER TIME:",
                "value": "15"
            },
            {
                "key": "impact_damage",
                "header": "IMPACT DAMAGE:",
                "value": "50"
            },
            {
                "key": "tick_rate",
                "header": "TICK RATE:",
                "value": "1"
            },
            {
                "key": "debuff_duration",
                "header": "DEBUFF DURATION:",
                "value": "5"
            }
        ],
        "mc": false,
        "cd": 10,
        "lore": "",
        "components": null,
        "created": false,
        "charges": 1
    },
    "royale_with_cheese": {
        "hint": [
            "Use: Scrumptious Try me!"
        ],
        "id": 1154,
        "img": "/apps/dota2/images/dota_react/items/royale_with_cheese.png?t=1593393829403",
        "dname": "Block of Cheese",
        "qual": "consumable",
        "cost": 2,
        "notes": "",
        "attrib": [
            {
                "key": "shield",
                "header": "SHIELD:",
                "value": "500"
            },
            {
                "key": "regen",
                "header": "REGEN:",
                "value": "100"
            },
            {
                "key": "idle",
                "header": "IDLE:",
                "value": "5"
            }
        ],
        "mc": false,
        "cd": 40,
        "lore": "First there was the Belt of Strength. Then there were the Boots of Travel. Now, at long last, the Block of Cheese.",
        "components": null,
        "created": false,
        "charges": 1
    },
    "flask": {
        "hint": [
            "Use: Salve Grants 30 health regeneration to the target for 13 seconds.\n\nIf the unit is attacked by an enemy hero or Roshan, the effect is lost.\n\nHeals for half the amount when cast on an ally.\n\nRange: 250"
        ],
        "id": 39,
        "img": "/apps/dota2/images/dota_react/items/flask.png?t=1593393829403",
        "dname": "Healing Salve",
        "qual": "consumable",
        "cost": 100,
        "notes": "",
        "attrib": [
            {
                "key": "buff_duration",
                "header": "BUFF DURATION:",
                "value": "13"
            },
            {
                "key": "health_regen",
                "header": "HEALTH REGEN:",
                "value": "30"
            },
            {
                "key": "break_on_hero_damage",
                "header": "BREAK ON HERO DAMAGE:",
                "value": "1"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A magical salve that can quickly mend even the deepest of wounds.",
        "components": null,
        "created": false,
        "charges": 1
    },
    "dust": {
        "hint": [
            "Use: Reveal For 12 seconds, creates an area that reveals and slows invisible heroes by -20% in a 1050 radius where the caster was standing. Invisible units revealed by dust take 25 damage.\n\n The debuff effect on enemies lingers for 8s after leaving the area of effect."
        ],
        "id": 40,
        "img": "/apps/dota2/images/dota_react/items/dust.png?t=1593393829403",
        "dname": "Dust of Appearance",
        "qual": "consumable",
        "cost": 80,
        "notes": "Places a debuff on enemy units in the area that reveals them when they are invisible.",
        "attrib": [
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "12"
            },
            {
                "key": "radius",
                "header": "RADIUS:",
                "value": "1050"
            },
            {
                "key": "movespeed",
                "header": "MOVESPEED:",
                "value": "-20"
            },
            {
                "key": "damage",
                "header": "DAMAGE:",
                "value": "25"
            },
            {
                "key": "linger_duration",
                "header": "LINGER DURATION:",
                "value": "8"
            }
        ],
        "mc": false,
        "cd": 30,
        "lore": "One may hide visage, but never volume.",
        "components": null,
        "created": false,
        "charges": 1
    },
    "bottle": {
        "hint": [
            "Active: Regenerate Consumes a charge to restore 110 health and 60 mana over 2.7 seconds. If the hero is attacked by an enemy hero or Roshan, the effect is lost.\n\nThe Bottle automatically refills at the fountain.\n\nHold Control to use on an allied hero.\n\nRange: 350",
            "Passive: Store Rune Runes can be stored in the Bottle for later use by right-clicking them. Unused runes will automatically activate after 90 seconds.\n\nUsing a stored rune fully refills the Bottle."
        ],
        "id": 41,
        "img": "/apps/dota2/images/dota_react/items/bottle.png?t=1593393829403",
        "dname": "Bottle",
        "qual": "common",
        "cost": 675,
        "notes": "Bottle is shareable. Stored runes cannot be shared.\nUsing a stored Bounty or Water rune fully refills the bottle if the bottle was full when the rune was stored; otherwise, it refills two charges.",
        "attrib": [
            {
                "key": "health_restore",
                "header": "HEALTH RESTORE:",
                "value": "110"
            },
            {
                "key": "mana_restore",
                "header": "MANA RESTORE:",
                "value": "60"
            },
            {
                "key": "health_restore_pct",
                "header": "HEALTH RESTORE PCT:",
                "value": "0"
            },
            {
                "key": "mana_restore_pct",
                "header": "MANA RESTORE PCT:",
                "value": "0"
            },
            {
                "key": "restore_time",
                "header": "RESTORE TIME:",
                "value": "2.7"
            },
            {
                "key": "max_charges",
                "header": "MAX CHARGES:",
                "value": "3"
            },
            {
                "key": "break_on_hero_damage",
                "header": "BREAK ON HERO DAMAGE:",
                "value": "1"
            },
            {
                "key": "rune_expire_time",
                "header": "RUNE EXPIRE TIME:",
                "value": "90.0"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "An old bottle that survived the ages, the contents placed inside become enchanted.",
        "components": null,
        "created": false,
        "charges": 3
    },
    "ward_observer": {
        "hint": [
            "Use: Plant Plants an Observer Ward, an invisible watcher that gives ground vision in a 1600 radius to your team. Lasts 6 minutes.\n\nHold Control to give one Observer Ward to an allied hero.\n\nRange: 500"
        ],
        "id": 42,
        "img": "/apps/dota2/images/dota_react/items/ward_observer.png?t=1593393829403",
        "dname": "Observer Ward",
        "qual": "consumable",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "lifetime",
                "header": "LIFETIME:",
                "value": "360"
            },
            {
                "key": "vision_range_tooltip",
                "header": "VISION RANGE TOOLTIP:",
                "value": "1600"
            },
            {
                "key": "health",
                "header": "HEALTH:",
                "value": "200"
            },
            {
                "key": "duration_minutes_tooltip",
                "header": "DURATION MINUTES TOOLTIP:",
                "value": "6"
            }
        ],
        "mc": false,
        "cd": 1,
        "lore": "A form of half-sentient plant, often cultivated by apprentice wizards.",
        "components": null,
        "created": false,
        "charges": 1
    },
    "ward_sentry": {
        "hint": [
            "Use: Plant Plants a Sentry Ward, an invisible watcher that grants True Sight, the ability to see invisible enemy units and wards, to any existing allied vision within a 1000 radius.\nLasts 7 minutes.\n\nDoes not grant ground vision.\nHold Control to give one Sentry Ward to an allied hero. Range: 500"
        ],
        "id": 43,
        "img": "/apps/dota2/images/dota_react/items/ward_sentry.png?t=1593393829403",
        "dname": "Sentry Ward",
        "qual": "consumable",
        "cost": 50,
        "notes": "",
        "attrib": [
            {
                "key": "lifetime",
                "header": "LIFETIME:",
                "value": "420"
            },
            {
                "key": "vision_range",
                "header": "VISION RANGE:",
                "value": "0"
            },
            {
                "key": "true_sight_range",
                "header": "TRUE SIGHT RANGE:",
                "value": "1000"
            },
            {
                "key": "health",
                "header": "HEALTH:",
                "value": "200"
            },
            {
                "key": "duration_minutes_tooltip",
                "header": "DURATION MINUTES TOOLTIP:",
                "value": "7"
            }
        ],
        "mc": false,
        "cd": 1,
        "lore": "A form of plant originally grown in the garden of a fearful king.",
        "components": null,
        "created": false,
        "charges": 1
    },
    "ward_dispenser": {
        "hint": [
            "Use: Plant Plant the currently active ward.  Double-Click to switch the currently active ward.\n\nRange: 500"
        ],
        "id": 218,
        "img": "/apps/dota2/images/dota_react/items/ward_dispenser.png?t=1593393829403",
        "dname": "Observer and Sentry Wards",
        "qual": "common",
        "cost": 50,
        "notes": "Hold Control to give one ward to an allied hero.",
        "attrib": [
            {
                "key": "bonus_health",
                "header": "BONUS HEALTH:",
                "value": "75"
            },
            {
                "key": "observer_cost",
                "header": "OBSERVER COST:",
                "value": "75"
            },
            {
                "key": "sentry_cost",
                "header": "SENTRY COST:",
                "value": "100"
            },
            {
                "key": "lifetime_observer",
                "header": "LIFETIME OBSERVER:",
                "value": "360"
            },
            {
                "key": "lifetime_sentry",
                "header": "LIFETIME SENTRY:",
                "value": "420"
            },
            {
                "key": "creation_delay",
                "header": "CREATION DELAY:",
                "value": "0"
            },
            {
                "key": "observer_vision_range_tooltip",
                "header": "OBSERVER VISION RANGE TOOLTIP:",
                "value": "1200"
            },
            {
                "key": "observer_duration_minutes_tooltip",
                "header": "OBSERVER DURATION MINUTES TOOLTIP:",
                "value": "6"
            },
            {
                "key": "sentry_duration_minutes_tooltip",
                "header": "SENTRY DURATION MINUTES TOOLTIP:",
                "value": "8"
            },
            {
                "key": "true_sight_range",
                "header": "TRUE SIGHT RANGE:",
                "value": "1000"
            },
            {
                "key": "cast_range_observer",
                "header": "CAST RANGE OBSERVER:",
                "value": "500"
            },
            {
                "key": "cast_range_sentry",
                "header": "CAST RANGE SENTRY:",
                "value": "500"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Advancements in stacking efficiency have made wards easier to carry than ever.",
        "components": [
            "ward_sentry",
            "ward_observer"
        ],
        "created": true,
        "charges": false
    },
    "tango": {
        "hint": [
            "Use: Devour Consumes a target tree to gain 7 health regeneration for 16 seconds. Consuming an Ironwood Tree doubles the heal amount.\n\nComes with 3 charges.  Can be used on an allied hero to give them one Tango.\n\nTree Range: 165"
        ],
        "id": 44,
        "img": "/apps/dota2/images/dota_react/items/tango.png?t=1593393829403",
        "dname": "Tango",
        "qual": "consumable",
        "cost": 90,
        "notes": "",
        "attrib": [
            {
                "key": "health_regen",
                "header": "HEALTH REGEN:",
                "value": "7.0"
            },
            {
                "key": "buff_duration",
                "header": "BUFF DURATION:",
                "value": "16.0"
            },
            {
                "key": "tooltip_charges",
                "header": "TOOLTIP CHARGES:",
                "value": "3"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Forage to survive on the battlefield.",
        "components": null,
        "created": false,
        "charges": 3
    },
    "tango_single": {
        "hint": [
            "Use: Devour Consumes a target tree to gain 7 health regeneration for 16 seconds. Consuming an Ironwood Tree doubles the heal amount.\n\nTree Range: 165"
        ],
        "id": 241,
        "img": "/apps/dota2/images/dota_react/items/tango_single.png?t=1593393829403",
        "dname": "Tango (Shared)",
        "qual": "consumable",
        "cost": 30,
        "notes": "",
        "attrib": [
            {
                "key": "health_regen",
                "header": "HEALTH REGEN:",
                "value": "7.0"
            },
            {
                "key": "buff_duration",
                "header": "BUFF DURATION:",
                "value": "16.0"
            },
            {
                "key": "duration_to_use",
                "header": "DURATION TO USE:",
                "value": "40"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Om nom nom.",
        "components": null,
        "created": false,
        "charges": 1
    },
    "courier": {
        "hint": [
            "Use: Deploy Courier Deploys a creature to carry items to and from your team's base."
        ],
        "id": 45,
        "img": "/apps/dota2/images/dota_react/items/courier.png?t=1593393829403",
        "dname": "Animal Courier",
        "qual": "consumable",
        "cost": 50,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "Losing the courier is punishable by death.",
        "components": null,
        "created": false,
        "charges": false
    },
    "flying_courier": {
        "hint": [
            "Use: Upgrade Courier Upgrades your team's Animal Courier to a Flying Courier, granting it swift, unobstructed movement to carry items to and from your team's base. \n\nRequires a deployed Animal Courier."
        ],
        "id": 286,
        "img": "/apps/dota2/images/dota_react/items/flying_courier.png?t=1593393829403",
        "dname": "Flying Courier",
        "qual": "consumable",
        "cost": 100,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "The faithful mount upon which soar the fortunes of battle.",
        "components": null,
        "created": false,
        "charges": false
    },
    "tpscroll": {
        "hint": [
            "Use: Teleport After channeling for 3 seconds, teleports you to a target friendly building. \n\nDouble-click to teleport to your team's base fountain."
        ],
        "id": 46,
        "img": "/apps/dota2/images/dota_react/items/tpscroll.png?t=1593393829403",
        "dname": "Town Portal Scroll",
        "qual": "consumable",
        "cost": 100,
        "notes": "If multiple heroes teleport to the same location in succession, the channeling time will be increased for each successive hero.\nTeleport can be prevented or canceled by Root abilities.",
        "attrib": [
            {
                "key": "minimun_distance",
                "header": "MINIMUN DISTANCE:",
                "value": "70"
            },
            {
                "key": "maximum_distance",
                "header": "MAXIMUM DISTANCE:",
                "value": "800"
            },
            {
                "key": "vision_radius",
                "header": "VISION RADIUS:",
                "value": "200"
            },
            {
                "key": "tooltip_channel_time",
                "header": "TOOLTIP CHANNEL TIME:",
                "value": "3.0"
            }
        ],
        "mc": 75,
        "cd": 80,
        "lore": "What a hero truly needs.",
        "components": null,
        "created": false,
        "charges": 1
    },
    "recipe_travel_boots": {
        "id": 47,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Boots of Travel Recipe",
        "cost": 2000,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "travel_boots": {
        "hint": [
            "Upgrade: Town Portal Scroll Upgrades your Town Portal Scroll, allowing it to target units, reduces cooldown and does not consume a charge on usage. ",
            "Movement speed bonuses from multiple pairs of boots do not stack."
        ],
        "id": 48,
        "img": "/apps/dota2/images/dota_react/items/travel_boots.png?t=1593393829403",
        "dname": "Boots of Travel",
        "qual": "common",
        "cost": 2500,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_movement_speed",
                "header": "BONUS MOVEMENT SPEED:",
                "value": "90"
            },
            {
                "key": "maximum_distance",
                "header": "MAXIMUM DISTANCE:",
                "value": "800"
            },
            {
                "key": "vision_radius",
                "header": "VISION RADIUS:",
                "value": "200"
            },
            {
                "key": "tp_cooldown",
                "header": "TP COOLDOWN:",
                "value": "40"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Winged boots that grant omnipresence.",
        "components": [
            "boots"
        ],
        "created": true,
        "charges": false
    },
    "travel_boots_2": {
        "hint": [
            "Upgrade: Town Portal Scroll Upgrades your Town Portal Scroll, allowing it to target units and heroes, reduces cooldown, channel time and does not consume a charge on usage. ",
            "Movement speed bonuses from multiple pairs of boots do not stack."
        ],
        "id": 220,
        "img": "/apps/dota2/images/dota_react/items/travel_boots_2.png?t=1593393829403",
        "dname": "Boots of Travel 2",
        "qual": "common",
        "cost": 4500,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_movement_speed",
                "header": "BONUS MOVEMENT SPEED:",
                "value": "110"
            },
            {
                "key": "maximum_distance",
                "header": "MAXIMUM DISTANCE:",
                "value": "800"
            },
            {
                "key": "vision_radius",
                "header": "VISION RADIUS:",
                "value": "200"
            },
            {
                "key": "tp_cooldown",
                "header": "TP COOLDOWN:",
                "value": "40"
            },
            {
                "key": "tp_channel_time",
                "header": "TP CHANNEL TIME:",
                "value": "2"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Winged boots that grant omnipresence.",
        "components": [
            "travel_boots",
            "recipe_travel_boots"
        ],
        "created": true,
        "charges": false
    },
    "phase_boots": {
        "hint": [
            "Active: Phase Gives 20% increased movement speed on melee heroes, and 10% on ranged heroes, and lets you move through units and turn more quickly for 3 seconds.",
            "Movement speed bonuses from multiple pairs of boots do not stack."
        ],
        "id": 50,
        "img": "/apps/dota2/images/dota_react/items/phase_boots.png?t=1593393829403",
        "dname": "Phase Boots",
        "qual": "common",
        "cost": 1500,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_movement_speed",
                "header": "BONUS MOVEMENT SPEED:",
                "value": "50"
            },
            {
                "key": "bonus_damage_melee",
                "header": "BONUS DAMAGE MELEE:",
                "value": "18"
            },
            {
                "key": "bonus_damage_range",
                "header": "BONUS DAMAGE RANGE:",
                "value": "12"
            },
            {
                "key": "damage_block_melee",
                "header": "DAMAGE BLOCK MELEE:",
                "value": "0"
            },
            {
                "key": "damage_block_ranged",
                "header": "DAMAGE BLOCK RANGED:",
                "value": "0"
            },
            {
                "key": "block_chance",
                "header": "BLOCK CHANCE:",
                "value": "0"
            },
            {
                "key": "phase_movement_speed",
                "header": "PHASE MOVEMENT SPEED:",
                "value": "20"
            },
            {
                "key": "phase_movement_speed_range",
                "header": "PHASE MOVEMENT SPEED RANGE:",
                "value": "10"
            },
            {
                "key": "phase_duration",
                "header": "PHASE DURATION:",
                "value": "3.0"
            },
            {
                "key": "bonus_attack_speed",
                "header": "BONUS ATTACK SPEED:",
                "value": "0"
            },
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "4"
            }
        ],
        "mc": false,
        "cd": 8,
        "lore": "Boots that allow the wearer to travel between the ether.",
        "components": [
            "boots",
            "chainmail",
            "blades_of_attack"
        ],
        "created": true,
        "charges": false
    },
    "demon_edge": {
        "id": 51,
        "img": "/apps/dota2/images/dota_react/items/demon_edge.png?t=1593393829403",
        "dname": "Demon Edge",
        "qual": "secret_shop",
        "cost": 2200,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "40"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "One of the oldest weapons forged by the Demon-Smith Abzidian, it killed its maker when he tested its edge.",
        "components": null,
        "created": false,
        "charges": false
    },
    "eagle": {
        "id": 52,
        "img": "/apps/dota2/images/dota_react/items/eagle.png?t=1593393829403",
        "dname": "Eaglesong",
        "qual": "secret_shop",
        "cost": 2800,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_agility",
                "header": "BONUS AGILITY:",
                "value": "25"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Capturing the majestic call of an eagle, this mystical horn brings limitless dexterity to those who hear it.",
        "components": null,
        "created": false,
        "charges": false
    },
    "reaver": {
        "id": 53,
        "img": "/apps/dota2/images/dota_react/items/reaver.png?t=1593393829403",
        "dname": "Reaver",
        "qual": "secret_shop",
        "cost": 2800,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "25"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A massive axe capable of tearing whole mountains down.",
        "components": null,
        "created": false,
        "charges": false
    },
    "relic": {
        "id": 54,
        "img": "/apps/dota2/images/dota_react/items/relic.png?t=1593393829403",
        "dname": "Sacred Relic",
        "qual": "secret_shop",
        "cost": 3400,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "55"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "An ancient weapon that often turns the tides of war.",
        "components": null,
        "created": false,
        "charges": false
    },
    "hyperstone": {
        "id": 55,
        "img": "/apps/dota2/images/dota_react/items/hyperstone.png?t=1593393829403",
        "dname": "Hyperstone",
        "qual": "secret_shop",
        "cost": 2000,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_attack_speed",
                "header": "BONUS ATTACK SPEED:",
                "value": "60"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A mystical, carved stone that boosts the fervor of the holder.",
        "components": null,
        "created": false,
        "charges": false
    },
    "ring_of_health": {
        "id": 56,
        "img": "/apps/dota2/images/dota_react/items/ring_of_health.png?t=1593393829403",
        "dname": "Ring of Health",
        "qual": "component",
        "cost": 700,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_health_regen",
                "header": "BONUS HEALTH REGEN:",
                "value": "4.5"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A shiny ring found beneath a fat halfling's corpse.",
        "components": null,
        "created": false,
        "charges": false
    },
    "ring_of_tarrasque": {
        "id": 279,
        "img": "/apps/dota2/images/dota_react/items/ring_of_tarrasque.png?t=1593393829403",
        "dname": "Ring of Tarrasque",
        "qual": "component",
        "cost": 1800,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_health_regen",
                "header": "BONUS HEALTH REGEN:",
                "value": "12"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "An ageless ring forged with an otherwise simple blood magic amplified by the presumed source of its key component.",
        "components": null,
        "created": false,
        "charges": false
    },
    "void_stone": {
        "id": 57,
        "img": "/apps/dota2/images/dota_react/items/void_stone.png?t=1593393829403",
        "dname": "Void Stone",
        "qual": "component",
        "cost": 700,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "1.75"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Jewelry that was once used to channel nether realm magic, this ring pulses with energy.",
        "components": null,
        "created": false,
        "charges": false
    },
    "tiara_of_selemene": {
        "id": 1802,
        "img": "/apps/dota2/images/dota_react/items/tiara_of_selemene.png?t=1593393829403",
        "dname": "Tiara of Selemene",
        "qual": "component",
        "cost": 1800,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "6"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Tiara!",
        "components": null,
        "created": false,
        "charges": false
    },
    "mystic_staff": {
        "id": 58,
        "img": "/apps/dota2/images/dota_react/items/mystic_staff.png?t=1593393829403",
        "dname": "Mystic Staff",
        "qual": "secret_shop",
        "cost": 2800,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "25"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Enigmatic staff made of only the most expensive crystals.",
        "components": null,
        "created": false,
        "charges": false
    },
    "energy_booster": {
        "id": 59,
        "img": "/apps/dota2/images/dota_react/items/energy_booster.png?t=1593393829403",
        "dname": "Energy Booster",
        "qual": "secret_shop",
        "cost": 800,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_mana",
                "header": "BONUS MANA:",
                "value": "250"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "This lapis gemstone is commonly added to the collection of wizards seeking to improve their presence in combat.",
        "components": null,
        "created": false,
        "charges": false
    },
    "point_booster": {
        "id": 60,
        "img": "/apps/dota2/images/dota_react/items/point_booster.png?t=1593393829403",
        "dname": "Point Booster",
        "qual": "secret_shop",
        "cost": 1200,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_mana",
                "header": "BONUS MANA:",
                "value": "175"
            },
            {
                "key": "bonus_health",
                "header": "BONUS HEALTH:",
                "value": "175"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A perfectly formed amethyst that nourishes body and mind when held.",
        "components": null,
        "created": false,
        "charges": false
    },
    "vitality_booster": {
        "id": 61,
        "img": "/apps/dota2/images/dota_react/items/vitality_booster.png?t=1593393829403",
        "dname": "Vitality Booster",
        "qual": "secret_shop",
        "cost": 1000,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_health",
                "header": "BONUS HEALTH:",
                "value": "250"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A ruby gemstone that has been passed down through generations of warrior kin.",
        "components": null,
        "created": false,
        "charges": false
    },
    "fluffy_hat": {
        "id": 593,
        "img": "/apps/dota2/images/dota_react/items/fluffy_hat.png?t=1593393829403",
        "dname": "Fluffy Hat",
        "qual": "secret_shop",
        "cost": 250,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_health",
                "header": "BONUS HEALTH:",
                "value": "125"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Fine and functional foppery for the fashion-forward fighter.",
        "components": null,
        "created": false,
        "charges": false
    },
    "power_treads": {
        "hint": [
            "Active: Switch Attribute Switches between +10 Strength, +10 Agility, or +10 Intelligence.",
            "Movement speed bonuses from multiple pairs of boots do not stack."
        ],
        "id": 63,
        "img": "/apps/dota2/images/dota_react/items/power_treads.png?t=1593393829403",
        "dname": "Power Treads",
        "qual": "common",
        "cost": 1400,
        "notes": "Power Treads can be built using a Belt of Strength, Band of Elvenskin, or a Robe of the Magi.",
        "attrib": [
            {
                "key": "bonus_movement_speed_ranged",
                "header": "BONUS MOVEMENT SPEED RANGED:",
                "value": "45"
            },
            {
                "key": "bonus_movement_speed_melee",
                "header": "BONUS MOVEMENT SPEED MELEE:",
                "value": "55"
            },
            {
                "key": "bonus_stat",
                "header": "BONUS STAT:",
                "value": "10"
            },
            {
                "key": "bonus_attack_speed",
                "header": "BONUS ATTACK SPEED:",
                "value": "25"
            },
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "0"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A pair of tough-skinned boots that change to meet the demands of the wearer.",
        "components": [
            "boots",
            "gloves",
            "belt_of_strength"
        ],
        "created": true,
        "charges": false
    },
    "recipe_samurai_tabi": {
        "id": 1098,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Samurai Tabi Recipe",
        "cost": 1100,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "samurai_tabi": {
        "hint": [
            "Active: Switch Attribute Switches between an additional +24 Strength , +24 Agility , or +24 Intelligence , and provides the bonuses corresponding with that parameter. ",
            " Intelligence Once fully charged, deals 125 to 2 random targets in 700 range every 4 seconds.",
            "  Strength  Once fully charged an attack has a 20% chance to deal 80 bonus damage and root the target for 1 seconds. 4s Cooldown.",
            "  Agility   Once fully charged, when attacked, the hero has a 20 to counter-attack a target within their attack range. 4s Cooldown. "
        ],
        "id": 1091,
        "img": "/apps/dota2/images/dota_react/items/samurai_tabi.png?t=1593393829403",
        "dname": "Samurai Tabi",
        "qual": "common",
        "cost": 5250,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_all_stats",
                "header": "BONUS ALL STATS:",
                "value": "10"
            },
            {
                "key": "base_interval",
                "header": "BASE INTERVAL:",
                "value": "0.1"
            },
            {
                "key": "max_tick_count",
                "header": "MAX TICK COUNT:",
                "value": "8"
            },
            {
                "key": "stat_per_tick",
                "header": "STAT PER TICK:",
                "value": "3"
            },
            {
                "key": "bonus_stat_tooltip",
                "header": "BONUS STAT TOOLTIP:",
                "value": "24"
            },
            {
                "key": "int_damage_interval",
                "header": "INT DAMAGE INTERVAL:",
                "value": "4"
            },
            {
                "key": "int_damage_range",
                "header": "INT DAMAGE RANGE:",
                "value": "700"
            },
            {
                "key": "int_damage",
                "header": "INT DAMAGE:",
                "value": "125"
            },
            {
                "key": "int_max_targets",
                "header": "INT MAX TARGETS:",
                "value": "2"
            },
            {
                "key": "str_root_cooldown",
                "header": "STR ROOT COOLDOWN:",
                "value": "4"
            },
            {
                "key": "str_root_duration",
                "header": "STR ROOT DURATION:",
                "value": "1.0"
            },
            {
                "key": "str_bonus_damage",
                "header": "STR BONUS DAMAGE:",
                "value": "80"
            },
            {
                "key": "str_root_chance",
                "header": "STR ROOT CHANCE:",
                "value": "20"
            },
            {
                "key": "agi_counter_chance",
                "header": "AGI COUNTER CHANCE:",
                "value": "20"
            },
            {
                "key": "agi_counter_cooldown",
                "header": "AGI COUNTER COOLDOWN:",
                "value": "4"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": [
            "belt_of_strength",
            "boots_of_elves",
            "robe",
            "ultimate_orb"
        ],
        "created": true,
        "charges": false
    },
    "recipe_hermes_sandals": {
        "id": 1092,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Hermes Sandals Recipe",
        "cost": 500,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "hermes_sandals": {
        "hint": [
            "Active: Greater Phase When activated, the user cannot be slowed or rooted. Gives 20% increased movement speed on melee heroes, and 10% on ranged heroes, and lets you move through units and turn more quickly for 4 seconds. Does not dispel roots that are already in place.",
            "Movement speed bonuses from multiple pairs of boots do not stack."
        ],
        "id": 1093,
        "img": "/apps/dota2/images/dota_react/items/hermes_sandals.png?t=1593393829403",
        "dname": "Hermes Sandals",
        "qual": "common",
        "cost": 4800,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_movement_speed",
                "header": "BONUS MOVEMENT SPEED:",
                "value": "50"
            },
            {
                "key": "bonus_damage_melee",
                "header": "BONUS DAMAGE MELEE:",
                "value": "20"
            },
            {
                "key": "bonus_damage_range",
                "header": "BONUS DAMAGE RANGE:",
                "value": "20"
            },
            {
                "key": "phase_movement_speed",
                "header": "PHASE MOVEMENT SPEED:",
                "value": "20"
            },
            {
                "key": "phase_movement_speed_range",
                "header": "PHASE MOVEMENT SPEED RANGE:",
                "value": "10"
            },
            {
                "key": "phase_duration",
                "header": "PHASE DURATION:",
                "value": "4.0"
            },
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "5"
            },
            {
                "key": "bonus_agility",
                "header": "BONUS AGILITY:",
                "value": "30"
            }
        ],
        "mc": false,
        "cd": 10,
        "lore": "",
        "components": [
            "phase_boots",
            "eagle"
        ],
        "created": true,
        "charges": false
    },
    "recipe_witches_switch": {
        "id": 1099,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Witches Switch Recipe",
        "cost": 625,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "witches_switch": {
        "hint": [
            "Toggle: Switch When active, Increases allied armor, health regeneration and mana regeneration. When Switched, decreases enemy armor, health regeneration and mana regeneration by the same amount."
        ],
        "id": 1100,
        "img": "/apps/dota2/images/dota_react/items/witches_switch.png?t=1593393829403",
        "dname": "Witches Switch",
        "qual": "common",
        "cost": 1900,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_health_regen",
                "header": "BONUS HEALTH REGEN:",
                "value": "3.5"
            },
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "2"
            },
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "5"
            },
            {
                "key": "aura_health_regen",
                "header": "AURA HEALTH REGEN:",
                "value": "3"
            },
            {
                "key": "aura_mana_regen",
                "header": "AURA MANA REGEN:",
                "value": "1.5"
            },
            {
                "key": "aura_armor",
                "header": "AURA ARMOR:",
                "value": "4"
            },
            {
                "key": "aura_radius",
                "header": "AURA RADIUS:",
                "value": "900"
            }
        ],
        "mc": false,
        "cd": 1,
        "lore": "",
        "components": [
            "buckler",
            "ring_of_basilius",
            "headdress"
        ],
        "created": true,
        "charges": false
    },
    "recipe_lunar_crest": {
        "id": 1094,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Lunar Crest Recipe",
        "cost": 250,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "lunar_crest": {
        "hint": [
            "Active: Glow When cast on an enemy, doubles incoming magic damage on them up to a threshhold of 375 magic damage.\n\nLasts 12 seconds."
        ],
        "id": 1095,
        "img": "/apps/dota2/images/dota_react/items/lunar_crest.png?t=1593393829403",
        "dname": "Lunar Crest",
        "qual": "common",
        "cost": 2300,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_health",
                "header": "BONUS HEALTH:",
                "value": "300"
            },
            {
                "key": "bonus_spell_resist",
                "header": "BONUS SPELL RESIST:",
                "value": "22"
            },
            {
                "key": "tooltip_resist",
                "header": "TOOLTIP RESIST:",
                "value": "22"
            },
            {
                "key": "barrier_block",
                "header": "BARRIER BLOCK:",
                "value": "375"
            },
            {
                "key": "movement_speed",
                "header": "MOVEMENT SPEED:",
                "value": "20"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "12.0"
            }
        ],
        "mc": false,
        "cd": 30,
        "lore": "",
        "components": [
            "cloak",
            "wind_lace",
            "vitality_booster"
        ],
        "created": true,
        "charges": false
    },
    "recipe_phylactery": {
        "id": 1106,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Phylactery Recipe",
        "cost": 200,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "phylactery": {
        "hint": [
            "Passive: Empower Spell The next Unit Target spell you cast on an enemy deals a separate 150 bonus damage to the target, and slows them by 50% for 1.5s."
        ],
        "id": 1107,
        "img": "/apps/dota2/images/dota_react/items/phylactery.png?t=1593393829403",
        "dname": "Phylactery",
        "qual": "common",
        "cost": 2400,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_health",
                "header": "BONUS HEALTH:",
                "value": "200"
            },
            {
                "key": "bonus_mana",
                "header": "BONUS MANA:",
                "value": "200"
            },
            {
                "key": "bonus_all_stats",
                "header": "BONUS ALL STATS:",
                "value": "7"
            },
            {
                "key": "slow",
                "header": "SLOW:",
                "value": "50"
            },
            {
                "key": "bonus_spell_damage",
                "header": "BONUS SPELL DAMAGE:",
                "value": "150"
            },
            {
                "key": "slow_duration",
                "header": "SLOW DURATION:",
                "value": "1.5"
            }
        ],
        "mc": false,
        "cd": 6,
        "lore": "",
        "components": [
            "point_booster",
            "diadem"
        ],
        "created": true,
        "charges": false
    },
    "recipe_angels_demise": {
        "id": 1807,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Khanda Recipe",
        "cost": 600,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "angels_demise": {
        "hint": [
            "Passive: Empower Spell The next Unit Target spell you cast on an enemy deals 100 + 75% of your attack damage as bonus damage to the target, and slows them by 50% for 1.5s.",
            "Passive: Critical Strike Grants each attack a 30% chance to deal 160% damage."
        ],
        "id": 1808,
        "img": "/apps/dota2/images/dota_react/items/angels_demise.png?t=1593393829403",
        "dname": "Khanda",
        "qual": "common",
        "cost": 5000,
        "notes": "Critical Strike does not work against buildings.",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "50"
            },
            {
                "key": "crit_chance",
                "header": "CRIT CHANCE:",
                "value": "30"
            },
            {
                "key": "spell_crit_multiplier",
                "header": "SPELL CRIT MULTIPLIER:",
                "value": "75"
            },
            {
                "key": "spell_crit_flat",
                "header": "SPELL CRIT FLAT:",
                "value": "100"
            },
            {
                "key": "crit_multiplier",
                "header": "CRIT MULTIPLIER:",
                "value": "160"
            },
            {
                "key": "tooltip_crit_damage",
                "header": "TOOLTIP CRIT DAMAGE:",
                "value": "60"
            },
            {
                "key": "bonus_health",
                "header": "BONUS HEALTH:",
                "value": "200"
            },
            {
                "key": "bonus_mana",
                "header": "BONUS MANA:",
                "value": "200"
            },
            {
                "key": "bonus_all_stats",
                "header": "BONUS ALL STATS:",
                "value": "8"
            },
            {
                "key": "slow",
                "header": "SLOW:",
                "value": "50"
            },
            {
                "key": "slow_duration",
                "header": "SLOW DURATION:",
                "value": "1.5"
            }
        ],
        "mc": false,
        "cd": 6,
        "lore": "",
        "components": [
            "phylactery",
            "lesser_crit"
        ],
        "created": true,
        "charges": false
    },
    "grandmasters_glaive": {
        "id": 655,
        "img": "/apps/dota2/images/dota_react/items/grandmasters_glaive.png?t=1593393829403",
        "dname": "Grandmaster's Glaive",
        "qual": "common",
        "cost": 5000,
        "notes": "",
        "attrib": [
            {
                "key": "sange_bonus_strength",
                "header": "SANGE BONUS STRENGTH:",
                "value": "16"
            },
            {
                "key": "sange_status_resistance",
                "header": "SANGE STATUS RESISTANCE:",
                "value": "16"
            },
            {
                "key": "sange_hp_regen_amp",
                "header": "SANGE HP REGEN AMP:",
                "value": "24"
            },
            {
                "key": "kaya_bonus_intellect",
                "header": "KAYA BONUS INTELLECT:",
                "value": "16"
            },
            {
                "key": "kaya_spell_amp",
                "header": "KAYA SPELL AMP:",
                "value": "8"
            },
            {
                "key": "kaya_mana_regen_multiplier",
                "header": "KAYA MANA REGEN MULTIPLIER:",
                "value": "24"
            },
            {
                "key": "kaya_magic_damage_attack",
                "header": "KAYA MAGIC DAMAGE ATTACK:",
                "value": "14"
            },
            {
                "key": "yasha_bonus_agility",
                "header": "YASHA BONUS AGILITY:",
                "value": "16"
            },
            {
                "key": "yasha_bonus_attack_speed",
                "header": "YASHA BONUS ATTACK SPEED:",
                "value": "12"
            },
            {
                "key": "yasha_movement_speed_percent_bonus",
                "header": "YASHA MOVEMENT SPEED PERCENT BONUS:",
                "value": "8"
            },
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "25"
            },
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "10"
            },
            {
                "key": "bash_chance_melee",
                "header": "BASH CHANCE MELEE:",
                "value": "25"
            },
            {
                "key": "bash_chance_ranged",
                "header": "BASH CHANCE RANGED:",
                "value": "10"
            },
            {
                "key": "bash_duration",
                "header": "BASH DURATION:",
                "value": "1.5"
            },
            {
                "key": "bash_cooldown",
                "header": "BASH COOLDOWN:",
                "value": "2.3"
            },
            {
                "key": "bonus_chance_damage",
                "header": "BONUS CHANCE DAMAGE:",
                "value": "100"
            },
            {
                "key": "str_stance",
                "header": "STR STANCE:",
                "value": "10"
            },
            {
                "key": "agi_stance",
                "header": "AGI STANCE:",
                "value": "25"
            },
            {
                "key": "int_stance",
                "header": "INT STANCE:",
                "value": "25"
            },
            {
                "key": "stance_bonus_duration",
                "header": "STANCE BONUS DURATION:",
                "value": "6"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "created": true,
        "charges": false
    },
    "recipe_hand_of_midas": {
        "id": 64,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Hand of Midas Recipe",
        "cost": 1750,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "hand_of_midas": {
        "hint": [
            "Active: Transmute Kills a non-hero target for 160 gold and 2.1x experience. When used on a neutral creep, guarantees to create a neutral item if available. \n\n Cannot be used on Ancient creeps.\n\nRange: 600"
        ],
        "id": 65,
        "img": "/apps/dota2/images/dota_react/items/hand_of_midas.png?t=1593393829403",
        "dname": "Hand of Midas",
        "qual": "common",
        "cost": 2200,
        "notes": "The gold given is reliable gold (you do not get the normal creep bounty).\nExperience gained by using Transmute is not shared.",
        "attrib": [
            {
                "key": "bonus_attack_speed",
                "header": "BONUS ATTACK SPEED:",
                "value": "35"
            },
            {
                "key": "xp_multiplier",
                "header": "XP MULTIPLIER:",
                "value": "2.1"
            },
            {
                "key": "bonus_gold",
                "header": "BONUS GOLD:",
                "value": "160"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Preserved through unknown magical means, the Hand of Midas is a weapon of greed, sacrificing animals to line the owner's pockets.",
        "components": [
            "gloves"
        ],
        "created": true,
        "charges": 1
    },
    "aetherial_halo": {
        "hint": [
            "Active: Aetherial Hammer CHANNELED - After a successful channel, summons a meteor that strikes a 400 AoE, stunning enemies for 0.5 seconds and dealing impact damage. Continues to deal damage over time to enemies units and buildings for 6 seconds. Non-building units are also slowed for 20% for the duration of the burn. \n\nBuilding Impact Damage: 95 \nBuilding Over Time Damage: 60 \n\nNon-Building Impact Damage: 150 \nNon-Building Over Time Damage: 60 \n\nChannel Duration: 1.5 seconds.\nLanding Time: 0.5 seconds.",
            "Passive:Foci  Increases targeted spell and item Area of Effect by %bonus_aoe%."
        ],
        "id": 1164,
        "img": "/apps/dota2/images/dota_react/items/aetherial_halo.png?t=1593393829403",
        "dname": "Aetherial Hammer",
        "qual": "common",
        "cost": 5900,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "25"
            },
            {
                "key": "bonus_agility",
                "header": "BONUS AGILITY:",
                "value": "25"
            },
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "40"
            },
            {
                "key": "spell_amp",
                "header": "SPELL AMP:",
                "value": "12"
            },
            {
                "key": "mana_regen_multiplier",
                "header": "MANA REGEN MULTIPLIER:",
                "value": "100"
            },
            {
                "key": "spell_lifesteal_amp",
                "header": "SPELL LIFESTEAL AMP:",
                "value": "36"
            },
            {
                "key": "burn_dps_buildings",
                "header": "BURN DPS BUILDINGS:",
                "value": "60"
            },
            {
                "key": "burn_dps_units",
                "header": "BURN DPS UNITS:",
                "value": "60"
            },
            {
                "key": "burn_slow",
                "header": "BURN SLOW:",
                "value": "20"
            },
            {
                "key": "burn_duration",
                "header": "BURN DURATION:",
                "value": "6"
            },
            {
                "key": "stun_duration",
                "header": "STUN DURATION:",
                "value": "0.5"
            },
            {
                "key": "burn_interval",
                "header": "BURN INTERVAL:",
                "value": "1.0"
            },
            {
                "key": "land_time",
                "header": "LAND TIME:",
                "value": ".5"
            },
            {
                "key": "impact_radius",
                "header": "IMPACT RADIUS:",
                "value": "400"
            },
            {
                "key": "max_duration",
                "header": "MAX DURATION:",
                "value": "1.5"
            },
            {
                "key": "impact_damage_buildings",
                "header": "IMPACT DAMAGE BUILDINGS:",
                "value": "95"
            },
            {
                "key": "impact_damage_units",
                "header": "IMPACT DAMAGE UNITS:",
                "value": "150"
            },
            {
                "key": "enemy_particles_visible",
                "header": "ENEMY PARTICLES VISIBLE:",
                "value": "0"
            }
        ],
        "mc": 100,
        "cd": 24,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "oblivion_staff": {
        "id": 67,
        "img": "/apps/dota2/images/dota_react/items/oblivion_staff.png?t=1593393829403",
        "dname": "Oblivion Staff",
        "qual": "common",
        "cost": 1625,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "10"
            },
            {
                "key": "bonus_attack_speed",
                "header": "BONUS ATTACK SPEED:",
                "value": "35"
            },
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "1.25"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Deceptively hidden as an ordinary staff, it is actually very powerful, much like the Eldritch who originally possessed it.",
        "components": [
            "blitz_knuckles",
            "sobi_mask",
            "robe"
        ],
        "created": true,
        "charges": false
    },
    "recipe_witch_blade": {
        "id": 533,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Witch Blade Recipe",
        "cost": 600,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "witch_blade": {
        "hint": [
            "Passive: Witch Blade Causes your next attack to apply a poison for 4 seconds, slowing by 25% and dealing 0.75x your intelligence as damage every second. This attack has True Strike."
        ],
        "id": 534,
        "img": "/apps/dota2/images/dota_react/items/witch_blade.png?t=1593393829403",
        "dname": "Witch Blade",
        "qual": "common",
        "cost": 2775,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_attack_speed",
                "header": "BONUS ATTACK SPEED:",
                "value": "40"
            },
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "12"
            },
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "1.5"
            },
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "6"
            },
            {
                "key": "int_damage_multiplier",
                "header": "INT DAMAGE MULTIPLIER:",
                "value": "0.75"
            },
            {
                "key": "slow",
                "header": "SLOW:",
                "value": "25"
            },
            {
                "key": "slow_duration",
                "header": "SLOW DURATION:",
                "value": "4"
            },
            {
                "key": "projectile_speed",
                "header": "PROJECTILE SPEED:",
                "value": "300"
            }
        ],
        "mc": false,
        "cd": 9,
        "lore": "A spiteful blade inadvertently possessed by the soul of its incautious creator.",
        "components": [
            "oblivion_staff",
            "chainmail"
        ],
        "created": true,
        "charges": false
    },
    "pers": {
        "id": 69,
        "img": "/apps/dota2/images/dota_react/items/pers.png?t=1593393829403",
        "dname": "Perseverance",
        "qual": "common",
        "cost": 1400,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_health_regen",
                "header": "BONUS HEALTH REGEN:",
                "value": "6.5"
            },
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "2.25"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A gem that grants heart to the bearer.",
        "components": [
            "ring_of_health",
            "void_stone"
        ],
        "created": true,
        "charges": false
    },
    "cornucopia": {
        "id": 1125,
        "img": "/apps/dota2/images/dota_react/items/cornucopia.png?t=1593393829403",
        "dname": "Cornucopia",
        "qual": "common",
        "cost": 1200,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_health_regen",
                "header": "BONUS HEALTH REGEN:",
                "value": "5"
            },
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "2"
            },
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "7"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "poor_mans_shield": {
        "hint": [
            "Passive: Damage Block Gives a 100% chance to block 30 damage from incoming attacks on melee heroes, and 20 damage on ranged.\n\nHas a 50% chance to block damage from creeps."
        ],
        "id": 71,
        "img": "/apps/dota2/images/dota_react/items/poor_mans_shield.png?t=1593393829403",
        "dname": "Poor Man's Shield",
        "qual": "common",
        "cost": 0,
        "notes": "Multiple sources of damage block do not stack.",
        "attrib": [
            {
                "key": "bonus_agility",
                "header": "BONUS AGILITY:",
                "value": "8"
            },
            {
                "key": "damage_block_melee",
                "header": "DAMAGE BLOCK MELEE:",
                "value": "30"
            },
            {
                "key": "damage_block_ranged",
                "header": "DAMAGE BLOCK RANGED:",
                "value": "20"
            },
            {
                "key": "block_chance",
                "header": "BLOCK CHANCE:",
                "value": "50"
            },
            {
                "key": "block_chance_hero",
                "header": "BLOCK CHANCE HERO:",
                "value": "100"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A busted old shield that seems to block more than it should.",
        "created": true,
        "charges": false
    },
    "satchel": {
        "hint": [
            "Increases XP that you earn by 15%."
        ],
        "id": 731,
        "img": "/apps/dota2/images/dota_react/items/satchel.png?t=1593393829403",
        "dname": "Satchel",
        "qual": "common",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_all_stats",
                "header": "BONUS ALL STATS:",
                "value": "5"
            },
            {
                "key": "xp_gain",
                "header": "XP GAIN:",
                "value": "15"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "recipe_bracer": {
        "id": 72,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Bracer Recipe",
        "cost": 210,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "bracer": {
        "hint": [
            "Doubles its bonuses after minute 25."
        ],
        "id": 73,
        "img": "/apps/dota2/images/dota_react/items/bracer.png?t=1593393829403",
        "dname": "Bracer",
        "qual": "common",
        "cost": 505,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "5 / 10"
            },
            {
                "key": "bonus_agility",
                "header": "BONUS AGILITY:",
                "value": "2 / 4"
            },
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "2 / 4"
            },
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "3 / 6"
            },
            {
                "key": "bonus_health_regen",
                "header": "BONUS HEALTH REGEN:",
                "value": "0.75 / 1.5"
            },
            {
                "key": "clock_time",
                "header": "CLOCK TIME:",
                "value": "25"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "The bracer is a common choice to toughen up defenses and increase longevity.",
        "components": [
            "circlet",
            "gauntlets"
        ],
        "created": true,
        "charges": false
    },
    "recipe_wraith_band": {
        "id": 74,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Wraith Band Recipe",
        "cost": 210,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "wraith_band": {
        "hint": [
            "Doubles its bonuses after minute 25."
        ],
        "id": 75,
        "img": "/apps/dota2/images/dota_react/items/wraith_band.png?t=1593393829403",
        "dname": "Wraith Band",
        "qual": "common",
        "cost": 505,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_agility",
                "header": "BONUS AGILITY:",
                "value": "5 / 10"
            },
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "2 / 4"
            },
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "2 / 4"
            },
            {
                "key": "bonus_attack_speed",
                "header": "BONUS ATTACK SPEED:",
                "value": "5 / 10"
            },
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "2 / 4"
            },
            {
                "key": "clock_time",
                "header": "CLOCK TIME:",
                "value": "25"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A circlet with faint whispers echoing about it.",
        "components": [
            "circlet",
            "slippers"
        ],
        "created": true,
        "charges": false
    },
    "recipe_null_talisman": {
        "id": 76,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Null Talisman Recipe",
        "cost": 210,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "null_talisman": {
        "hint": [
            "Doubles its bonuses after minute 25."
        ],
        "id": 77,
        "img": "/apps/dota2/images/dota_react/items/null_talisman.png?t=1593393829403",
        "dname": "Null Talisman",
        "qual": "common",
        "cost": 505,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "5 / 10"
            },
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "2 / 4"
            },
            {
                "key": "bonus_agility",
                "header": "BONUS AGILITY:",
                "value": "2 / 4"
            },
            {
                "key": "bonus_max_mana_percentage",
                "header": "BONUS MAX MANA PERCENTAGE:",
                "value": "3 / 6"
            },
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "0.75 / 1.5"
            },
            {
                "key": "clock_time",
                "header": "CLOCK TIME:",
                "value": "25"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A small gemstone attached to several chains.",
        "components": [
            "circlet",
            "mantle"
        ],
        "created": true,
        "charges": false
    },
    "recipe_mekansm": {
        "id": 78,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Mekansm Recipe",
        "cost": 800,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "mekansm": {
        "hint": [
            "Active: Restore Restores 275 health to allied units in a 1200 radius.",
            "Passive: Mekansm Aura Grants 2.5 health regeneration to allied units in a 1200 radius."
        ],
        "id": 79,
        "img": "/apps/dota2/images/dota_react/items/mekansm.png?t=1593393829403",
        "dname": "Mekansm",
        "qual": "rare",
        "cost": 1775,
        "notes": "Restore does not affect units that have been affected by Restore or Guardian Greaves Mend within Mekansm's cooldown.\nMultiple instances of Mekansm Aura do not stack.",
        "attrib": [
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "4"
            },
            {
                "key": "aura_radius",
                "header": "AURA RADIUS:",
                "value": "1200"
            },
            {
                "key": "aura_health_regen",
                "header": "AURA HEALTH REGEN:",
                "value": "2.5"
            },
            {
                "key": "heal_amount",
                "header": "HEAL AMOUNT:",
                "value": "275"
            },
            {
                "key": "heal_radius",
                "header": "HEAL RADIUS:",
                "value": "1200"
            }
        ],
        "mc": 100,
        "cd": 50,
        "lore": "A glowing jewel formed out of assorted parts that somehow fit together perfectly.",
        "components": [
            "headdress",
            "chainmail"
        ],
        "created": true,
        "charges": false
    },
    "vladmir": {
        "hint": [
            "Passive: Vladmir's Aura Grants 20% lifesteal, 18% bonus damage, 1.75 mana regeneration, and 4 armor to nearby allies. Lifesteal from creeps is reduced by 40%.\n\nRadius: 1200"
        ],
        "id": 81,
        "img": "/apps/dota2/images/dota_react/items/vladmir.png?t=1593393829403",
        "dname": "Vladmir's Offering",
        "qual": "rare",
        "cost": 2200,
        "notes": "",
        "attrib": [
            {
                "key": "armor_aura",
                "header": "ARMOR AURA:",
                "value": "4.0"
            },
            {
                "key": "mana_regen_aura",
                "header": "MANA REGEN AURA:",
                "value": "1.75"
            },
            {
                "key": "lifesteal_aura",
                "header": "LIFESTEAL AURA:",
                "value": "20"
            },
            {
                "key": "creep_lifesteal_reduction_pct",
                "header": "CREEP LIFESTEAL REDUCTION PCT:",
                "value": "40"
            },
            {
                "key": "damage_aura",
                "header": "DAMAGE AURA:",
                "value": "18"
            },
            {
                "key": "aura_radius",
                "header": "AURA RADIUS:",
                "value": "1200"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "An eerie mask that is haunted with the malice of a fallen vampire.",
        "components": [
            "buckler",
            "ring_of_basilius",
            "lifesteal",
            "blades_of_attack"
        ],
        "created": true,
        "charges": false
    },
    "recipe_wraith_pact": {
        "id": 907,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Wraith Pact Recipe",
        "cost": 400,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "wraith_pact": {
        "hint": [
            "Active: Wraith's Reprisal Summons a movable totem in your location for 25 seconds that reduces all physical damage of enemies within 900 radius by 30% and deals 45 damage per second.\n\n The totem eminates the Vladmir's Aura around it. Totem can be destroyed in 4 hits. Creeps deal half damage to the totem.",
            "Passive: Vladmir's Aura Grants 24% lifesteal, 18% bonus damage, 2 mana regeneration, and 3 armor to nearby allies. Lifesteal from creeps is reduced by 50%.\n\nRadius: 1200"
        ],
        "id": 908,
        "img": "/apps/dota2/images/dota_react/items/wraith_pact.png?t=1593393829403",
        "dname": "Wraith Pact",
        "qual": "rare",
        "cost": 3800,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_health",
                "header": "BONUS HEALTH:",
                "value": "250"
            },
            {
                "key": "bonus_mana",
                "header": "BONUS MANA:",
                "value": "250"
            },
            {
                "key": "armor_aura",
                "header": "ARMOR AURA:",
                "value": "3.0"
            },
            {
                "key": "mana_regen_aura",
                "header": "MANA REGEN AURA:",
                "value": "2.0"
            },
            {
                "key": "lifesteal_aura",
                "header": "LIFESTEAL AURA:",
                "value": "24"
            },
            {
                "key": "creep_lifesteal_reduction_pct",
                "header": "CREEP LIFESTEAL REDUCTION PCT:",
                "value": "50"
            },
            {
                "key": "damage_aura",
                "header": "DAMAGE AURA:",
                "value": "18"
            },
            {
                "key": "aura_radius",
                "header": "AURA RADIUS:",
                "value": "1200"
            },
            {
                "key": "pact_aura_radius",
                "header": "PACT AURA RADIUS:",
                "value": "900"
            },
            {
                "key": "damage_penalty_aura",
                "header": "DAMAGE PENALTY AURA:",
                "value": "30"
            },
            {
                "key": "aura_dps",
                "header": "AURA DPS:",
                "value": "45"
            }
        ],
        "mc": 100,
        "cd": 60,
        "lore": "A sentient amulet whose animus shakes the courage of even the strongest foes.",
        "components": [
            "vladmir",
            "point_booster"
        ],
        "created": true,
        "charges": false
    },
    "recipe_buckler": {
        "id": 85,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Buckler Recipe",
        "cost": 250,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "buckler": {
        "hint": [
            "Passive: Buckler Aura Grants 2 armor to allied player units.\n\nRadius: 1200"
        ],
        "id": 86,
        "img": "/apps/dota2/images/dota_react/items/buckler.png?t=1593393829403",
        "dname": "Buckler",
        "qual": "rare",
        "cost": 425,
        "notes": "",
        "attrib": [
            {
                "key": "armor",
                "header": "ARMOR:",
                "value": "1"
            },
            {
                "key": "bonus_aoe_armor",
                "header": "BONUS AOE ARMOR:",
                "value": "2"
            },
            {
                "key": "bonus_aoe_radius",
                "header": "BONUS AOE RADIUS:",
                "value": "1200"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A powerful shield that imbues the bearer with the strength of heroes past, it is capable of protecting entire armies in battle.",
        "components": [
            "ring_of_protection"
        ],
        "created": true,
        "charges": false
    },
    "recipe_ring_of_basilius": {
        "id": 87,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Ring of Basilius Recipe",
        "cost": 250,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "ring_of_basilius": {
        "hint": [
            "Passive: Basilius Aura Grants 1 mana regeneration to allies. \n\nRadius: 1200"
        ],
        "id": 88,
        "img": "/apps/dota2/images/dota_react/items/ring_of_basilius.png?t=1593393829403",
        "dname": "Ring of Basilius",
        "qual": "rare",
        "cost": 425,
        "notes": "",
        "attrib": [
            {
                "key": "mana_regen",
                "header": "MANA REGEN:",
                "value": "0.5"
            },
            {
                "key": "aura_mana_regen",
                "header": "AURA MANA REGEN:",
                "value": "1.0"
            },
            {
                "key": "aura_radius",
                "header": "AURA RADIUS:",
                "value": "1200"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Ring given as a reward to the greatest mages.",
        "components": [
            "sobi_mask"
        ],
        "created": true,
        "charges": false
    },
    "recipe_holy_locket": {
        "id": 268,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Holy Locket Recipe",
        "cost": 900,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "holy_locket": {
        "hint": [
            "Active: Energy Charge Target an allied unit to instantly restore 17 health and mana per charge stored. \n\nAutomatically gains a charge every 8 seconds and whenever a visible enemy within 1200 range uses an ability.",
            "Passive: Holy Blessing Amplifies heals you provide by 30%."
        ],
        "id": 269,
        "img": "/apps/dota2/images/dota_react/items/holy_locket.png?t=1593393829403",
        "dname": "Holy Locket",
        "qual": "rare",
        "cost": 2350,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_health",
                "header": "BONUS HEALTH:",
                "value": "0"
            },
            {
                "key": "bonus_mana",
                "header": "BONUS MANA:",
                "value": "0"
            },
            {
                "key": "heal_increase",
                "header": "HEAL INCREASE:",
                "value": "30"
            },
            {
                "key": "max_charges",
                "header": "MAX CHARGES:",
                "value": "20"
            },
            {
                "key": "charge_radius",
                "header": "CHARGE RADIUS:",
                "value": "1200"
            },
            {
                "key": "bonus_all_stats",
                "header": "BONUS ALL STATS:",
                "value": "9"
            },
            {
                "key": "restore_per_charge",
                "header": "RESTORE PER CHARGE:",
                "value": "17"
            },
            {
                "key": "charge_gain_timer",
                "header": "CHARGE GAIN TIMER:",
                "value": "10"
            },
            {
                "key": "use_cooldown",
                "header": "USE COOLDOWN:",
                "value": "13"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A prized relic long thought lost forever in a failed crusade.",
        "components": [
            "diadem",
            "magic_wand"
        ],
        "created": true,
        "charges": 1
    },
    "recipe_pipe": {
        "id": 89,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Pipe of Insight Recipe",
        "cost": 700,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "pipe": {
        "hint": [
            "Active: Barrier Gives a magic damage barrier that absorbs 450 damage to all nearby allies. Lasts 12 seconds.\n\nRadius: 1200",
            "Passive: Insight Aura Gives allied units 2.5 health regeneration and 10% magic resistance.\n\nRadius: 1200"
        ],
        "id": 90,
        "img": "/apps/dota2/images/dota_react/items/pipe.png?t=1593393829403",
        "dname": "Pipe of Insight",
        "qual": "rare",
        "cost": 3725,
        "notes": "Multiple instances of Barrier do not stack.\nStacks multiplicatively with other sources of magic resistance.",
        "attrib": [
            {
                "key": "health_regen",
                "header": "HEALTH REGEN:",
                "value": "14.0"
            },
            {
                "key": "magic_resistance",
                "header": "MAGIC RESISTANCE:",
                "value": "20"
            },
            {
                "key": "barrier_debuff_duration",
                "header": "BARRIER DEBUFF DURATION:",
                "value": "50.0"
            },
            {
                "key": "tooltip_resist",
                "header": "TOOLTIP RESIST:",
                "value": "20"
            },
            {
                "key": "aura_health_regen",
                "header": "AURA HEALTH REGEN:",
                "value": "2.5"
            },
            {
                "key": "magic_resistance_aura",
                "header": "MAGIC RESISTANCE AURA:",
                "value": "10"
            },
            {
                "key": "aura_radius",
                "header": "AURA RADIUS:",
                "value": "1200"
            },
            {
                "key": "barrier_block",
                "header": "BARRIER BLOCK:",
                "value": "450"
            },
            {
                "key": "barrier_duration",
                "header": "BARRIER DURATION:",
                "value": "12.0"
            },
            {
                "key": "barrier_radius",
                "header": "BARRIER RADIUS:",
                "value": "1200"
            },
            {
                "key": "bonus_all_stats",
                "header": "BONUS ALL STATS:",
                "value": "0"
            },
            {
                "key": "barrier_block_creep",
                "header": "BARRIER BLOCK CREEP:",
                "value": "450"
            }
        ],
        "mc": 150,
        "cd": 60,
        "lore": "A powerful artifact of mysterious origin, it creates barriers against magical forces.",
        "components": [
            "cloak",
            "headdress",
            "ring_of_tarrasque"
        ],
        "created": true,
        "charges": false
    },
    "recipe_urn_of_shadows": {
        "id": 91,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Urn of Shadows Recipe",
        "cost": 375,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "urn_of_shadows": {
        "hint": [
            "Active: Soul Release Provides 30 health regeneration when cast on allies, and deals 25 damage per second when cast on enemies. \n\nLasts 8 seconds.  \n\nGains charges every time an enemy hero dies within 1400 units.  Only the closest Urn to the dying hero will gain a charge.\n\nCast Range: 750"
        ],
        "id": 92,
        "img": "/apps/dota2/images/dota_react/items/urn_of_shadows.png?t=1593393829403",
        "dname": "Urn of Shadows",
        "qual": "rare",
        "cost": 880,
        "notes": "Empty urns gain 2 charges.\nIf used on a hero with Soul Release already active on them, it will refresh its duration.",
        "attrib": [
            {
                "key": "mana_regen",
                "header": "MANA REGEN:",
                "value": "1.4"
            },
            {
                "key": "bonus_all_stats",
                "header": "BONUS ALL STATS:",
                "value": "2"
            },
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "2"
            },
            {
                "key": "soul_radius",
                "header": "SOUL RADIUS:",
                "value": "1400"
            },
            {
                "key": "soul_initial_charge",
                "header": "SOUL INITIAL CHARGE:",
                "value": "2"
            },
            {
                "key": "soul_additional_charges",
                "header": "SOUL ADDITIONAL CHARGES:",
                "value": "1"
            },
            {
                "key": "soul_heal_amount",
                "header": "SOUL HEAL AMOUNT:",
                "value": "30"
            },
            {
                "key": "soul_damage_amount",
                "header": "SOUL DAMAGE AMOUNT:",
                "value": "25"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "8.0"
            }
        ],
        "mc": false,
        "cd": 7,
        "lore": "Contains the ashes of powerful demons.",
        "components": [
            "sobi_mask",
            "ring_of_protection",
            "circlet"
        ],
        "created": true,
        "charges": false
    },
    "recipe_headdress": {
        "id": 93,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Headdress Recipe",
        "cost": 250,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "headdress": {
        "hint": [
            "Passive: Regeneration Aura Grants 2 health regeneration to allies.\n\nRadius: 1200"
        ],
        "id": 94,
        "img": "/apps/dota2/images/dota_react/items/headdress.png?t=1593393829403",
        "dname": "Headdress",
        "qual": "rare",
        "cost": 425,
        "notes": "",
        "attrib": [
            {
                "key": "health_regen",
                "header": "HEALTH REGEN:",
                "value": "0.5"
            },
            {
                "key": "aura_health_regen",
                "header": "AURA HEALTH REGEN:",
                "value": "2.0"
            },
            {
                "key": "aura_radius",
                "header": "AURA RADIUS:",
                "value": "1200"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Creates a soothing aura that restores allies in battle.",
        "components": [
            "ring_of_regen"
        ],
        "created": true,
        "charges": false
    },
    "recipe_sheepstick": {
        "id": 95,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Scythe of Vyse Recipe",
        "cost": 600,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "sheepstick": {
        "hint": [
            "Active: Hex Turns a target unit into a harmless critter for 2.8 seconds. The target has a base movement speed of 140 and will be silenced, muted, and disarmed.\nInstantly destroys illusions.\n\nRange: 800"
        ],
        "id": 96,
        "img": "/apps/dota2/images/dota_react/items/sheepstick.png?t=1593393829403",
        "dname": "Scythe of Vyse",
        "qual": "rare",
        "cost": 5200,
        "notes": "The target will have a base movement speed of 140, but buffs granting maximum movement speed won't be disabled.",
        "attrib": [
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "30"
            },
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "8.5"
            },
            {
                "key": "sheep_duration",
                "header": "SHEEP DURATION:",
                "value": "2.8"
            },
            {
                "key": "sheep_movement_speed",
                "header": "SHEEP MOVEMENT SPEED:",
                "value": "140"
            },
            {
                "key": "upgrade_radius",
                "header": "UPGRADE RADIUS:",
                "value": "200"
            }
        ],
        "mc": 250,
        "cd": 20,
        "lore": "The most guarded relic among the cult of Vyse, it is the most coveted weapon among magi.",
        "components": [
            "mystic_staff",
            "tiara_of_selemene"
        ],
        "created": true,
        "charges": false
    },
    "caster_rapier": {
        "hint": [
            "Passive: Everlasting Dropped on death, and cannot be destroyed.  \n\nBecomes unusable if picked up by an ally of its owner until it is returned to its owner. It is immediately usable by anybody if an enemy of the owner picks it up and is killed. A dropped Rapier cannot be picked up by a courier."
        ],
        "id": 1801,
        "img": "/apps/dota2/images/dota_react/items/caster_rapier.png?t=1593393829403",
        "dname": "Caster Rapier",
        "qual": "rare",
        "cost": 5600,
        "notes": "If Caster Rapier is dropped and picked up by an enemy of its original owner, it cannot be dropped again except by death.",
        "attrib": [
            {
                "key": "bonus_spell_amp",
                "header": "BONUS SPELL AMP:",
                "value": "50"
            },
            {
                "key": "cast_range_limit",
                "header": "CAST RANGE LIMIT:",
                "value": "2000"
            },
            {
                "key": "backstab_duration",
                "header": "BACKSTAB DURATION:",
                "value": "3"
            }
        ],
        "mc": false,
        "cd": 9,
        "lore": "It's like a rapier for casters!",
        "components": null,
        "created": false,
        "charges": false
    },
    "recipe_orchid": {
        "id": 97,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Orchid Malevolence Recipe",
        "cost": 650,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "orchid": {
        "hint": [
            "Active: Soul Burn Silences the target unit for 5 seconds. At the end of the silence, 30% of the damage received while silenced is inflicted as bonus magical damage.\n\nRange: 900"
        ],
        "id": 98,
        "img": "/apps/dota2/images/dota_react/items/orchid.png?t=1593393829403",
        "dname": "Orchid Malevolence",
        "qual": "rare",
        "cost": 3475,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_attack_speed",
                "header": "BONUS ATTACK SPEED:",
                "value": "40"
            },
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "10"
            },
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "3.5"
            },
            {
                "key": "bonus_health_regen",
                "header": "BONUS HEALTH REGEN:",
                "value": "6.0"
            },
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "12"
            },
            {
                "key": "silence_damage_percent",
                "header": "SILENCE DAMAGE PERCENT:",
                "value": "30"
            },
            {
                "key": "silence_duration",
                "header": "SILENCE DURATION:",
                "value": "5"
            }
        ],
        "mc": 100,
        "cd": 18,
        "lore": "A garnet rod constructed from the essence of a fire demon.",
        "components": [
            "oblivion_staff",
            "cornucopia"
        ],
        "created": true,
        "charges": false
    },
    "recipe_bloodthorn": {
        "id": 245,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Bloodthorn Recipe",
        "cost": 450,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "bloodthorn": {
        "hint": [
            "Active: Soul Rend Silences a target for 5 seconds. At the end of the silence, an additional 60% of all damage taken during the silence will be dealt to the target as magical damage.\n\nAll attacks on the silenced target will deal 60 extra damage and have True Strike.\n\nRange: 900",
            "Passive: Pierce Grants each attack a 40% chance to pierce through evasion and deal 60 bonus magical damage."
        ],
        "id": 250,
        "img": "/apps/dota2/images/dota_react/items/bloodthorn.png?t=1593393829403",
        "dname": "Bloodthorn",
        "qual": "epic",
        "cost": 6825,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "15"
            },
            {
                "key": "bonus_attack_speed",
                "header": "BONUS ATTACK SPEED:",
                "value": "100"
            },
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "3.5"
            },
            {
                "key": "bonus_health_regen",
                "header": "BONUS HEALTH REGEN:",
                "value": "6.5"
            },
            {
                "key": "silence_duration",
                "header": "SILENCE DURATION:",
                "value": "5"
            },
            {
                "key": "silence_damage_percent",
                "header": "SILENCE DAMAGE PERCENT:",
                "value": "60"
            },
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "10"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "6"
            },
            {
                "key": "spell_amp_debuff",
                "header": "SPELL AMP DEBUFF:",
                "value": "35"
            },
            {
                "key": "proc_damage",
                "header": "PROC DAMAGE:",
                "value": "60"
            },
            {
                "key": "proc_chance",
                "header": "PROC CHANCE:",
                "value": "40"
            }
        ],
        "mc": 100,
        "cd": 15,
        "lore": "A reviled blade that bites deeper with each wriggle of its victim's final throes.",
        "components": [
            "orchid",
            "javelin",
            "hyperstone"
        ],
        "created": true,
        "charges": false
    },
    "echo_sabre": {
        "hint": [
            "Passive: Echo Strike Causes melee attacks to attack twice in quick succession. The double attacks apply a 100% movement slow for 0.8 seconds on each strike."
        ],
        "id": 252,
        "img": "/apps/dota2/images/dota_react/items/echo_sabre.png?t=1593393829403",
        "dname": "Echo Sabre",
        "qual": "artifact",
        "cost": 2700,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "20"
            },
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "15"
            },
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "1.75"
            },
            {
                "key": "movement_slow",
                "header": "MOVEMENT SLOW:",
                "value": "100"
            },
            {
                "key": "slow_duration",
                "header": "SLOW DURATION:",
                "value": "0.8"
            }
        ],
        "mc": false,
        "cd": 5,
        "lore": "A deceptively swift blade imbued with resonant magic.",
        "components": [
            "ogre_axe",
            "broadsword",
            "void_stone"
        ],
        "created": true,
        "charges": false
    },
    "recipe_cyclone": {
        "id": 99,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Eul's Scepter Recipe",
        "cost": 675,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "cyclone": {
        "hint": [
            "Active: Cyclone Sweeps a target unit up into a cyclone, making them invulnerable for 2.5 seconds. Cyclone can only be cast on enemy units or yourself.\n\nEnemy units take 50 magical damage upon landing.\n\nRange: 550\nDispel Type: Basic Dispel "
        ],
        "id": 100,
        "img": "/apps/dota2/images/dota_react/items/cyclone.png?t=1593393829403",
        "dname": "Eul's Scepter of Divinity",
        "qual": "rare",
        "cost": 2625,
        "notes": "You cannot cyclone allies.\nCyclones cast on yourself go through spell immunity.\nCyclone can dispel some buffs and debuffs.\nCyclone duration is unaffected by status resistance.",
        "attrib": [
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "10"
            },
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "2.5"
            },
            {
                "key": "bonus_movement_speed",
                "header": "BONUS MOVEMENT SPEED:",
                "value": "20"
            },
            {
                "key": "cyclone_duration",
                "header": "CYCLONE DURATION:",
                "value": "2.5"
            },
            {
                "key": "tooltip_drop_damage",
                "header": "TOOLTIP DROP DAMAGE:",
                "value": "50"
            }
        ],
        "mc": 175,
        "cd": 23,
        "lore": "A mysterious scepter passed down through the ages, its disruptive winds can be used for good or evil.",
        "components": [
            "staff_of_wizardry",
            "void_stone",
            "wind_lace"
        ],
        "created": true,
        "charges": false
    },
    "recipe_wind_waker": {
        "id": 612,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Wind Waker Recipe",
        "cost": 1400,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "wind_waker": {
        "hint": [
            "Active: Cyclone Sweeps a target unit up into a cyclone, making them invulnerable for 2.5 seconds. Cyclone can be cast on yourself, enemy units or allied units.\n\nEnemy units take 50 magical damage upon landing.\n\nRange: 550\nDispel Type: Basic Dispel "
        ],
        "id": 610,
        "img": "/apps/dota2/images/dota_react/items/wind_waker.png?t=1593393829403",
        "dname": "Wind Waker",
        "qual": "rare",
        "cost": 6825,
        "notes": "Cyclone can dispel some buffs and debuffs.\nWhen cast on yourself, the cyclone can be moved anywhere at a speed of 360.\nCyclone duration is unaffected by status resistance.",
        "attrib": [
            {
                "key": "bonus_movement_speed",
                "header": "BONUS MOVEMENT SPEED:",
                "value": "30"
            },
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "3.0"
            },
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "35"
            },
            {
                "key": "cyclone_duration",
                "header": "CYCLONE DURATION:",
                "value": "2.5"
            },
            {
                "key": "tooltip_drop_damage",
                "header": "TOOLTIP DROP DAMAGE:",
                "value": "50"
            },
            {
                "key": "tornado_speed",
                "header": "TORNADO SPEED:",
                "value": "360"
            }
        ],
        "mc": 175,
        "cd": 13,
        "lore": "Proof enough to some that unseen forces manipulate the happenings of the material plane.",
        "components": [
            "cyclone",
            "mystic_staff"
        ],
        "created": true,
        "charges": false
    },
    "recipe_aether_lens": {
        "id": 233,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Aether Lens Recipe",
        "cost": 775,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "aether_lens": {
        "hint": [
            "Passive: Aethereal Focus Increases targeted spell and item cast range."
        ],
        "id": 232,
        "img": "/apps/dota2/images/dota_react/items/aether_lens.png?t=1593393829403",
        "dname": "Aether Lens",
        "qual": "rare",
        "cost": 2275,
        "notes": "Passive does not stack.",
        "attrib": [
            {
                "key": "bonus_mana",
                "header": "BONUS MANA:",
                "value": "300"
            },
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "2.5"
            },
            {
                "key": "cast_range_bonus",
                "header": "CAST RANGE BONUS:",
                "value": "225"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Polished with the incantation of his final breath, the gift of a dying mage to his sickly son.",
        "components": [
            "energy_booster",
            "void_stone"
        ],
        "created": true,
        "charges": false
    },
    "recipe_force_staff": {
        "id": 101,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Force Staff Recipe",
        "cost": 950,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "force_staff": {
        "hint": [
            "Active: Force Pushes any target unit 600 units in the direction it is facing. \n\nRange: 550"
        ],
        "id": 102,
        "img": "/apps/dota2/images/dota_react/items/force_staff.png?t=1593393829403",
        "dname": "Force Staff",
        "qual": "rare",
        "cost": 2200,
        "notes": "Self-cast will cause you to use Force on yourself.\nForce Staff doesn't interrupt the target's actions.\nWill not work on a unit inside Chronosphere, Duel, or Black Hole.",
        "attrib": [
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "10"
            },
            {
                "key": "bonus_health",
                "header": "BONUS HEALTH:",
                "value": "175"
            },
            {
                "key": "push_length",
                "header": "PUSH LENGTH:",
                "value": "600"
            },
            {
                "key": "enemy_cast_range",
                "header": "ENEMY CAST RANGE:",
                "value": "850"
            },
            {
                "key": "push_time",
                "header": "PUSH TIME:",
                "value": "0.5"
            }
        ],
        "mc": 150,
        "cd": 19,
        "lore": "Allows you to manipulate others, for good or evil.",
        "components": [
            "staff_of_wizardry",
            "fluffy_hat"
        ],
        "created": true,
        "charges": false
    },
    "recipe_hurricane_pike": {
        "id": 262,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Hurricane Pike Recipe",
        "cost": 350,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "hurricane_pike": {
        "hint": [
            "Active: Hurricane Thrust Pushes you and target enemy 450 units away from each other, and for 6 seconds, allows you to make 5 attacks against the target without range restrictions and with +100 attack speed.\n\nCan be cast on self or allies to push the target 600 units in the direction it is facing.\nEnemy Range: 450",
            "Passive:  Dragon's Reach  Increases attack range of ranged heroes."
        ],
        "id": 263,
        "img": "/apps/dota2/images/dota_react/items/hurricane_pike.png?t=1593393829403",
        "dname": "Hurricane Pike",
        "qual": "epic",
        "cost": 4450,
        "notes": "Self-cast will use Hurricane Pike on yourself.\nHurricane Pike doesn't interrupt the target's actions.\nWill not work on a unit inside Chronosphere, Duel, or Black Hole.",
        "attrib": [
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "15"
            },
            {
                "key": "bonus_health",
                "header": "BONUS HEALTH:",
                "value": "200"
            },
            {
                "key": "bonus_agility",
                "header": "BONUS AGILITY:",
                "value": "20"
            },
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "15"
            },
            {
                "key": "base_attack_range",
                "header": "BASE ATTACK RANGE:",
                "value": "150"
            },
            {
                "key": "push_length",
                "header": "PUSH LENGTH:",
                "value": "600"
            },
            {
                "key": "enemy_length",
                "header": "ENEMY LENGTH:",
                "value": "450"
            },
            {
                "key": "range_duration",
                "header": "RANGE DURATION:",
                "value": "6"
            },
            {
                "key": "cast_range_enemy",
                "header": "CAST RANGE ENEMY:",
                "value": "450"
            },
            {
                "key": "max_attacks",
                "header": "MAX ATTACKS:",
                "value": "5"
            },
            {
                "key": "bonus_attack_speed",
                "header": "BONUS ATTACK SPEED:",
                "value": "100"
            },
            {
                "key": "push_time",
                "header": "PUSH TIME:",
                "value": "0.5"
            },
            {
                "key": "dizzy_duration",
                "header": "DIZZY DURATION:",
                "value": "0"
            },
            {
                "key": "dizzy_distance_pct",
                "header": "DIZZY DISTANCE PCT:",
                "value": "0"
            }
        ],
        "mc": 150,
        "cd": 19,
        "lore": "A legendary pike once held as royal sigil of the ancient wyvern riders.",
        "components": [
            "force_staff",
            "dragon_lance"
        ],
        "created": true,
        "charges": false
    },
    "recipe_dagon": {
        "id": 103,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Dagon Recipe",
        "cost": 1150,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "dagon": {
        "hint": [
            "Active: Energy Burst Emits a powerful burst of magical damage upon a targeted enemy unit. Heals the caster 75% of damage dealt by Dagon. Upgradable.\n\nDamage: 400\nRange: 700\nMana Cost: 120"
        ],
        "id": 104,
        "img": "/apps/dota2/images/dota_react/items/dagon.png?t=1593393829403",
        "dname": "Dagon",
        "qual": "rare",
        "cost": 2850,
        "notes": "Instantly kills illusions.",
        "attrib": [
            {
                "key": "bonus_int",
                "header": "BONUS INT:",
                "value": "7 / 9 / 11 / 13 / 15"
            },
            {
                "key": "bonus_str",
                "header": "BONUS STR:",
                "value": "7 / 9 / 11 / 13 / 15"
            },
            {
                "key": "bonus_agi",
                "header": "BONUS AGI:",
                "value": "7 / 9 / 11 / 13 / 15"
            },
            {
                "key": "damage",
                "header": "DAMAGE:",
                "value": "400 / 500 / 600 / 700 / 800"
            },
            {
                "key": "damage_delay",
                "header": "DAMAGE DELAY:",
                "value": "0"
            },
            {
                "key": "mana_cost_tooltip",
                "header": "MANA COST TOOLTIP:",
                "value": "120 / 140 / 160 / 180 / 200"
            },
            {
                "key": "int_damage",
                "header": "INT DAMAGE:",
                "value": "0"
            },
            {
                "key": "passive_spell_lifesteal",
                "header": "PASSIVE SPELL LIFESTEAL:",
                "value": "11 / 12 / 13 / 14 / 15"
            },
            {
                "key": "dagon_spell_lifesteal",
                "header": "DAGON SPELL LIFESTEAL:",
                "value": "75"
            }
        ],
        "mc": 120,
        "cd": 35,
        "lore": "A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.",
        "components": [
            "diadem",
            "voodoo_mask"
        ],
        "created": true,
        "charges": false
    },
    "dagon_2": {
        "hint": [
            "Active: Energy Burst Emits a powerful burst of magical damage upon a targeted enemy unit. Upgradable.\n\nDamage: 400\nRange: 700\nMana Cost: 120"
        ],
        "id": 201,
        "img": "/apps/dota2/images/dota_react/items/dagon_2.png?t=1593393829403",
        "dname": "Dagon",
        "qual": "rare",
        "cost": 4000,
        "notes": "Instantly kills illusions.",
        "attrib": [
            {
                "key": "bonus_int",
                "header": "BONUS INT:",
                "value": "7 / 9 / 11 / 13 / 15"
            },
            {
                "key": "bonus_str",
                "header": "BONUS STR:",
                "value": "7 / 9 / 11 / 13 / 15"
            },
            {
                "key": "bonus_agi",
                "header": "BONUS AGI:",
                "value": "7 / 9 / 11 / 13 / 15"
            },
            {
                "key": "damage",
                "header": "DAMAGE:",
                "value": "400 / 500 / 600 / 700 / 800"
            },
            {
                "key": "damage_delay",
                "header": "DAMAGE DELAY:",
                "value": "0"
            },
            {
                "key": "mana_cost_tooltip",
                "header": "MANA COST TOOLTIP:",
                "value": "120 / 140 / 160 / 180 / 200"
            },
            {
                "key": "int_damage",
                "header": "INT DAMAGE:",
                "value": "0"
            },
            {
                "key": "passive_spell_lifesteal",
                "header": "PASSIVE SPELL LIFESTEAL:",
                "value": "11 / 12 / 13 / 14 / 15"
            },
            {
                "key": "dagon_spell_lifesteal",
                "header": "DAGON SPELL LIFESTEAL:",
                "value": "75"
            }
        ],
        "mc": 120,
        "cd": 35,
        "lore": "A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.",
        "created": true,
        "charges": false
    },
    "dagon_3": {
        "hint": [
            "Active: Energy Burst Emits a powerful burst of magical damage upon a targeted enemy unit. Upgradable.\n\nDamage: 400\nRange: 700\nMana Cost: 120"
        ],
        "id": 202,
        "img": "/apps/dota2/images/dota_react/items/dagon_3.png?t=1593393829403",
        "dname": "Dagon",
        "qual": "rare",
        "cost": 5150,
        "notes": "Instantly kills illusions.",
        "attrib": [
            {
                "key": "bonus_int",
                "header": "BONUS INT:",
                "value": "7 / 9 / 11 / 13 / 15"
            },
            {
                "key": "bonus_str",
                "header": "BONUS STR:",
                "value": "7 / 9 / 11 / 13 / 15"
            },
            {
                "key": "bonus_agi",
                "header": "BONUS AGI:",
                "value": "7 / 9 / 11 / 13 / 15"
            },
            {
                "key": "damage",
                "header": "DAMAGE:",
                "value": "400 / 500 / 600 / 700 / 800"
            },
            {
                "key": "damage_delay",
                "header": "DAMAGE DELAY:",
                "value": "0"
            },
            {
                "key": "mana_cost_tooltip",
                "header": "MANA COST TOOLTIP:",
                "value": "120 / 140 / 160 / 180 / 200"
            },
            {
                "key": "int_damage",
                "header": "INT DAMAGE:",
                "value": "0"
            },
            {
                "key": "passive_spell_lifesteal",
                "header": "PASSIVE SPELL LIFESTEAL:",
                "value": "11 / 12 / 13 / 14 / 15"
            },
            {
                "key": "dagon_spell_lifesteal",
                "header": "DAGON SPELL LIFESTEAL:",
                "value": "75"
            }
        ],
        "mc": 120,
        "cd": 35,
        "lore": "A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.",
        "created": true,
        "charges": false
    },
    "dagon_4": {
        "hint": [
            "Active: Energy Burst Emits a powerful burst of magical damage upon a targeted enemy unit. Upgradable.\n\nDamage: 400\nRange: 700\nMana Cost: 120"
        ],
        "id": 203,
        "img": "/apps/dota2/images/dota_react/items/dagon_4.png?t=1593393829403",
        "dname": "Dagon",
        "qual": "rare",
        "cost": 6300,
        "notes": "Instantly kills illusions.",
        "attrib": [
            {
                "key": "bonus_int",
                "header": "BONUS INT:",
                "value": "7 / 9 / 11 / 13 / 15"
            },
            {
                "key": "bonus_str",
                "header": "BONUS STR:",
                "value": "7 / 9 / 11 / 13 / 15"
            },
            {
                "key": "bonus_agi",
                "header": "BONUS AGI:",
                "value": "7 / 9 / 11 / 13 / 15"
            },
            {
                "key": "damage",
                "header": "DAMAGE:",
                "value": "400 / 500 / 600 / 700 / 800"
            },
            {
                "key": "damage_delay",
                "header": "DAMAGE DELAY:",
                "value": "0"
            },
            {
                "key": "mana_cost_tooltip",
                "header": "MANA COST TOOLTIP:",
                "value": "120 / 140 / 160 / 180 / 200"
            },
            {
                "key": "int_damage",
                "header": "INT DAMAGE:",
                "value": "0"
            },
            {
                "key": "passive_spell_lifesteal",
                "header": "PASSIVE SPELL LIFESTEAL:",
                "value": "11 / 12 / 13 / 14 / 15"
            },
            {
                "key": "dagon_spell_lifesteal",
                "header": "DAGON SPELL LIFESTEAL:",
                "value": "75"
            }
        ],
        "mc": 120,
        "cd": 35,
        "lore": "A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.",
        "created": true,
        "charges": false
    },
    "dagon_5": {
        "hint": [
            "Active: Energy Burst Emits a powerful burst of magical damage upon a targeted enemy unit.\n\nDamage: 400\nRange: 700\nMana Cost: 120"
        ],
        "id": 204,
        "img": "/apps/dota2/images/dota_react/items/dagon_5.png?t=1593393829403",
        "dname": "Dagon",
        "qual": "rare",
        "cost": 7450,
        "notes": "Instantly kills illusions.",
        "attrib": [
            {
                "key": "bonus_int",
                "header": "BONUS INT:",
                "value": "7 / 9 / 11 / 13 / 15"
            },
            {
                "key": "bonus_str",
                "header": "BONUS STR:",
                "value": "7 / 9 / 11 / 13 / 15"
            },
            {
                "key": "bonus_agi",
                "header": "BONUS AGI:",
                "value": "7 / 9 / 11 / 13 / 15"
            },
            {
                "key": "damage",
                "header": "DAMAGE:",
                "value": "400 / 500 / 600 / 700 / 800"
            },
            {
                "key": "damage_delay",
                "header": "DAMAGE DELAY:",
                "value": "0"
            },
            {
                "key": "mana_cost_tooltip",
                "header": "MANA COST TOOLTIP:",
                "value": "120 / 140 / 160 / 180 / 200"
            },
            {
                "key": "int_damage",
                "header": "INT DAMAGE:",
                "value": "0"
            },
            {
                "key": "passive_spell_lifesteal",
                "header": "PASSIVE SPELL LIFESTEAL:",
                "value": "11 / 12 / 13 / 14 / 15"
            },
            {
                "key": "dagon_spell_lifesteal",
                "header": "DAGON SPELL LIFESTEAL:",
                "value": "75"
            }
        ],
        "mc": 120,
        "cd": 35,
        "lore": "A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.",
        "created": true,
        "charges": false
    },
    "recipe_necronomicon": {
        "id": 105,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Necronomicon Recipe",
        "cost": 1250,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "necronomicon": {
        "hint": [
            "Active: Demonic Summoning Summons a Warrior and an Archer to fight for you for 60 seconds.\n\nWarrior: Burns mana every hit, and deals magical damage to whoever kills it. Gains True Sight at level 3.\nHealth: 800\nDamage: 25\nMana Break Damage: 30\nLast Will Damage: 600\n\nArcher: Has a passive movement and attack speed aura. Gains Purge at Level 3.\nHealth: 800\nDamage: 37\nAura Move Speed: 5\nAura Radius: 1200"
        ],
        "id": 106,
        "img": "/apps/dota2/images/dota_react/items/necronomicon.png?t=1593393829403",
        "dname": "Necronomicon",
        "qual": "rare",
        "cost": 2050,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "6 / 12 / 18"
            },
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "2 / 3 / 4"
            },
            {
                "key": "summon_duration",
                "header": "SUMMON DURATION:",
                "value": "60"
            },
            {
                "key": "warrior_health_tooltip",
                "header": "WARRIOR HEALTH TOOLTIP:",
                "value": "800 / 1200 / 1600"
            },
            {
                "key": "warrior_damage_tooltip",
                "header": "WARRIOR DAMAGE TOOLTIP:",
                "value": "25 / 45 / 65"
            },
            {
                "key": "warrior_mana_feedback",
                "header": "WARRIOR MANA FEEDBACK:",
                "value": "30 / 40 / 50"
            },
            {
                "key": "warrior_mana_break_tooltip",
                "header": "WARRIOR MANA BREAK TOOLTIP:",
                "value": "30 / 40 / 50"
            },
            {
                "key": "explosion",
                "header": "EXPLOSION:",
                "value": "600 / 700 / 800"
            },
            {
                "key": "warrior_truesight",
                "header": "WARRIOR TRUESIGHT:",
                "value": "400 / 800 / 1200"
            },
            {
                "key": "archer_health_tooltip",
                "header": "ARCHER HEALTH TOOLTIP:",
                "value": "800 / 1200 / 1600"
            },
            {
                "key": "archer_damage_tooltip",
                "header": "ARCHER DAMAGE TOOLTIP:",
                "value": "37 / 57 / 75"
            },
            {
                "key": "archer_mana_burn",
                "header": "ARCHER MANA BURN:",
                "value": "125 / 175 / 225"
            },
            {
                "key": "archer_aura_radius_tooltip",
                "header": "ARCHER AURA RADIUS TOOLTIP:",
                "value": "1200"
            },
            {
                "key": "archer_move_speed",
                "header": "ARCHER MOVE SPEED:",
                "value": "5 / 7 / 9"
            }
        ],
        "mc": 150,
        "cd": 80,
        "lore": "Considered the ultimate in necromancy and demonology, a powerful malefic force is locked within its pages.",
        "components": [
            "sobi_mask",
            "sobi_mask",
            "belt_of_strength"
        ],
        "created": true,
        "charges": false
    },
    "necronomicon_2": {
        "hint": [
            "Active: Demonic Summoning Summons a Warrior and an Archer to fight for you for 60 seconds.\n\nWarrior: Burns mana every hit, and deals magical damage to whoever kills it. Gains True Sight at level 3.\nHealth: 800\nDamage: 25\nMana Break Damage: 30\nLast Will Damage: 600\n\nArcher: Has a passive movement and attack speed aura. Gains Purge at Level 3.\nHealth: 800\nDamage: 37\nAura Move Speed: 5\nAura Radius: 1200"
        ],
        "id": 193,
        "img": "/apps/dota2/images/dota_react/items/necronomicon_2.png?t=1593393829403",
        "dname": "Necronomicon",
        "qual": "rare",
        "cost": 3300,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "6 / 12 / 18"
            },
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "2 / 3 / 4"
            },
            {
                "key": "summon_duration",
                "header": "SUMMON DURATION:",
                "value": "60"
            },
            {
                "key": "warrior_health_tooltip",
                "header": "WARRIOR HEALTH TOOLTIP:",
                "value": "800 / 1200 / 1600"
            },
            {
                "key": "warrior_damage_tooltip",
                "header": "WARRIOR DAMAGE TOOLTIP:",
                "value": "25 / 45 / 65"
            },
            {
                "key": "warrior_mana_feedback",
                "header": "WARRIOR MANA FEEDBACK:",
                "value": "30 / 40 / 50"
            },
            {
                "key": "warrior_mana_break_tooltip",
                "header": "WARRIOR MANA BREAK TOOLTIP:",
                "value": "30 / 40 / 50"
            },
            {
                "key": "explosion",
                "header": "EXPLOSION:",
                "value": "600 / 700 / 800"
            },
            {
                "key": "warrior_truesight",
                "header": "WARRIOR TRUESIGHT:",
                "value": "400 / 800 / 1200"
            },
            {
                "key": "archer_health_tooltip",
                "header": "ARCHER HEALTH TOOLTIP:",
                "value": "800 / 1200 / 1600"
            },
            {
                "key": "archer_damage_tooltip",
                "header": "ARCHER DAMAGE TOOLTIP:",
                "value": "37 / 57 / 75"
            },
            {
                "key": "archer_mana_burn",
                "header": "ARCHER MANA BURN:",
                "value": "125 / 175 / 225"
            },
            {
                "key": "archer_aura_radius_tooltip",
                "header": "ARCHER AURA RADIUS TOOLTIP:",
                "value": "1200"
            },
            {
                "key": "archer_move_speed",
                "header": "ARCHER MOVE SPEED:",
                "value": "5 / 7 / 9"
            }
        ],
        "mc": 150,
        "cd": 80,
        "lore": "Considered the ultimate in necromancy and demonology, a powerful malefic force is locked within its pages.",
        "components": [
            "necronomicon",
            "recipe_necronomicon"
        ],
        "created": true,
        "charges": false
    },
    "necronomicon_3": {
        "hint": [
            "Active: Demonic Summoning Summons a Warrior and an Archer to fight for you for 60 seconds.\n\nWarrior: Burns mana every hit, and deals magical damage to whoever kills it. Gains True Sight at level 3.\nHealth: 800\nDamage: 25\nMana Break Damage: 30\nLast Will Damage: 600\n\nArcher: Has a passive movement and attack speed aura. Gains Purge at Level 3.\nHealth: 800\nDamage: 37\nAura Move Speed: 5\nAura Radius: 1200"
        ],
        "id": 194,
        "img": "/apps/dota2/images/dota_react/items/necronomicon_3.png?t=1593393829403",
        "dname": "Necronomicon",
        "qual": "rare",
        "cost": 4550,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "6 / 12 / 18"
            },
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "2 / 3 / 4"
            },
            {
                "key": "summon_duration",
                "header": "SUMMON DURATION:",
                "value": "60"
            },
            {
                "key": "warrior_health_tooltip",
                "header": "WARRIOR HEALTH TOOLTIP:",
                "value": "800 / 1200 / 1600"
            },
            {
                "key": "warrior_damage_tooltip",
                "header": "WARRIOR DAMAGE TOOLTIP:",
                "value": "25 / 45 / 65"
            },
            {
                "key": "warrior_mana_feedback",
                "header": "WARRIOR MANA FEEDBACK:",
                "value": "30 / 40 / 50"
            },
            {
                "key": "warrior_mana_break_tooltip",
                "header": "WARRIOR MANA BREAK TOOLTIP:",
                "value": "30 / 40 / 50"
            },
            {
                "key": "explosion",
                "header": "EXPLOSION:",
                "value": "600 / 700 / 800"
            },
            {
                "key": "warrior_truesight",
                "header": "WARRIOR TRUESIGHT:",
                "value": "400 / 800 / 1200"
            },
            {
                "key": "archer_health_tooltip",
                "header": "ARCHER HEALTH TOOLTIP:",
                "value": "800 / 1200 / 1600"
            },
            {
                "key": "archer_damage_tooltip",
                "header": "ARCHER DAMAGE TOOLTIP:",
                "value": "37 / 57 / 75"
            },
            {
                "key": "archer_mana_burn",
                "header": "ARCHER MANA BURN:",
                "value": "125 / 175 / 225"
            },
            {
                "key": "archer_aura_radius_tooltip",
                "header": "ARCHER AURA RADIUS TOOLTIP:",
                "value": "1200"
            },
            {
                "key": "archer_move_speed",
                "header": "ARCHER MOVE SPEED:",
                "value": "5 / 7 / 9"
            }
        ],
        "mc": 150,
        "cd": 80,
        "lore": "Considered the ultimate in necromancy and demonology, a powerful malefic force is locked within its pages.",
        "components": [
            "necronomicon_2",
            "recipe_necronomicon"
        ],
        "created": true,
        "charges": false
    },
    "ultimate_scepter": {
        "hint": [
            "Passive: Ability Upgrade Upgrades the ultimate, and some abilities, of all heroes."
        ],
        "id": 108,
        "img": "/apps/dota2/images/dota_react/items/ultimate_scepter.png?t=1593393829403",
        "dname": "Aghanim's Scepter",
        "qual": "rare",
        "cost": 4200,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_all_stats",
                "header": "BONUS ALL STATS:",
                "value": "10"
            },
            {
                "key": "bonus_health",
                "header": "BONUS HEALTH:",
                "value": "175"
            },
            {
                "key": "bonus_mana",
                "header": "BONUS MANA:",
                "value": "175"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "The scepter of a wizard with demigod-like powers.",
        "components": [
            "point_booster",
            "staff_of_wizardry",
            "ogre_axe",
            "blade_of_alacrity"
        ],
        "created": true,
        "charges": false
    },
    "recipe_ultimate_scepter_2": {
        "id": 270,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Aghanim's Blessing Recipe",
        "cost": 1600,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "ultimate_scepter_2": {
        "hint": [
            "Passive: Ability Upgrade Upgrades the ultimate, and some abilities, of all heroes."
        ],
        "id": 271,
        "img": "/apps/dota2/images/dota_react/items/ultimate_scepter_2.png?t=1593393829403",
        "dname": "Aghanim's Blessing",
        "qual": "rare",
        "cost": 5800,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "The scepter of a wizard with demigod-like powers.",
        "components": [
            "ultimate_scepter"
        ],
        "created": true,
        "charges": false
    },
    "ultimate_scepter_roshan": {
        "hint": [
            "Passive: Ability Upgrade Upgrades the ultimate, and some abilities, of all heroes."
        ],
        "id": 727,
        "img": "/apps/dota2/images/dota_react/items/ultimate_scepter_roshan.png?t=1593393829403",
        "dname": "Aghanim's Blessing - Roshan",
        "qual": "rare",
        "cost": 5800,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "The scepter of a wizard with demigod-like powers.",
        "components": null,
        "created": false,
        "charges": false
    },
    "aghanims_shard": {
        "hint": [
            "Passive: Ability Upgrade Upgrades an existing ability or adds a new ability to your hero."
        ],
        "id": 609,
        "img": "/apps/dota2/images/dota_react/items/aghanims_shard.png?t=1593393829403",
        "dname": "Aghanim's Shard",
        "qual": "rare",
        "cost": 1400,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "With origins known only to a single wizard, fragments of this impossible crystal are nearly as coveted as the renowned scepter itself.",
        "components": null,
        "created": false,
        "charges": false
    },
    "aghanims_shard_roshan": {
        "hint": [
            "Passive: Ability Upgrade Upgrades an existing ability or adds a new ability to your hero.."
        ],
        "id": 725,
        "img": "/apps/dota2/images/dota_react/items/aghanims_shard_roshan.png?t=1593393829403",
        "dname": "Aghanim's Shard - Consumable",
        "qual": "rare",
        "cost": 1400,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "With origins known only to a single wizard, fragments of this impossible crystal are nearly as coveted as the renowned scepter itself.",
        "components": null,
        "created": false,
        "charges": false
    },
    "recipe_refresher": {
        "id": 109,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Refresher Orb Recipe",
        "cost": 200,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "refresher": {
        "hint": [
            "Active: Reset Cooldowns Resets the cooldowns of all your items and abilities. Shares a cooldown with Refresher Shard. This item's cooldown only progresses in your hero's main inventory."
        ],
        "id": 110,
        "img": "/apps/dota2/images/dota_react/items/refresher.png?t=1593393829403",
        "dname": "Refresher Orb",
        "qual": "rare",
        "cost": 5000,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_health_regen",
                "header": "BONUS HEALTH REGEN:",
                "value": "18"
            },
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "8.0"
            },
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "10"
            }
        ],
        "mc": 350,
        "cd": 180,
        "lore": "A powerful artifact created for wizards.",
        "components": [
            "cornucopia",
            "ring_of_tarrasque",
            "tiara_of_selemene"
        ],
        "created": true,
        "charges": false
    },
    "recipe_assault": {
        "id": 111,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Assault Cuirass Recipe",
        "cost": 1300,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "assault": {
        "hint": [
            "Passive: Assault Aura Grants 30 attack speed and 5 armor to nearby allied units and structures, and decreases nearby enemy unit and structure armor by -5.\n\nRadius: 1200"
        ],
        "id": 112,
        "img": "/apps/dota2/images/dota_react/items/assault.png?t=1593393829403",
        "dname": "Assault Cuirass",
        "qual": "epic",
        "cost": 5125,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_attack_speed",
                "header": "BONUS ATTACK SPEED:",
                "value": "30"
            },
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "10"
            },
            {
                "key": "aura_radius",
                "header": "AURA RADIUS:",
                "value": "1200"
            },
            {
                "key": "aura_attack_speed",
                "header": "AURA ATTACK SPEED:",
                "value": "30"
            },
            {
                "key": "aura_positive_armor",
                "header": "AURA POSITIVE ARMOR:",
                "value": "5"
            },
            {
                "key": "aura_negative_armor",
                "header": "AURA NEGATIVE ARMOR:",
                "value": "-5"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Forged in the depths of the nether reaches, this hellish mail provides an army with increased armor and attack speed.",
        "components": [
            "platemail",
            "hyperstone",
            "buckler"
        ],
        "created": true,
        "charges": false
    },
    "recipe_heart": {
        "id": 113,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Heart of Tarrasque Recipe",
        "cost": 600,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "heart": {
        "id": 114,
        "img": "/apps/dota2/images/dota_react/items/heart.png?t=1593393829403",
        "dname": "Heart of Tarrasque",
        "qual": "epic",
        "cost": 5200,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "35"
            },
            {
                "key": "health_regen_pct",
                "header": "HEALTH REGEN PCT:",
                "value": "1.6"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Preserved heart of an extinct monster, it bolsters the bearer's fortitude.",
        "components": [
            "ring_of_tarrasque",
            "reaver"
        ],
        "created": true,
        "charges": false
    },
    "recipe_black_king_bar": {
        "id": 115,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Black King Bar Recipe",
        "cost": 1450,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "black_king_bar": {
        "hint": [
            "Active: Avatar Applies a basic dispel. Grants 50% Magic resistance and immunity to pure and reflected damage. For the duration of the effect, any negative effect from enemy spells has no effect. \n\nDuration: 9 \nDispel Type: Basic Dispel "
        ],
        "id": 116,
        "img": "/apps/dota2/images/dota_react/items/black_king_bar.png?t=1593393829403",
        "dname": "Black King Bar",
        "qual": "epic",
        "cost": 4050,
        "notes": "Purchasing another Black King Bar will not reset its immunity duration.\nAbilities that pierce magic immunity will work fully even when Avatar is activated",
        "attrib": [
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "10"
            },
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "24"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "9 / 8 / 7 / 6"
            },
            {
                "key": "max_level",
                "header": "MAX LEVEL:",
                "value": "4"
            },
            {
                "key": "model_scale",
                "header": "MODEL SCALE:",
                "value": "30"
            },
            {
                "key": "magic_resist",
                "header": "MAGIC RESIST:",
                "value": "50"
            }
        ],
        "mc": 50,
        "cd": 90,
        "lore": "A powerful staff imbued with the strength of giants.",
        "components": [
            "ogre_axe",
            "mithril_hammer"
        ],
        "created": true,
        "charges": false
    },
    "aegis": {
        "hint": [
            "Passive: Reincarnation Brings you to life with full health and mana 5 seconds after you die, at the location where you died. \n\nReincarnation must be used within 5 minutes or Aegis of the Immortal disappears. If it expires, it will heal you over 5 seconds (dispels on damage)."
        ],
        "id": 117,
        "img": "/apps/dota2/images/dota_react/items/aegis.png?t=1593393829403",
        "dname": "Aegis of the Immortal",
        "qual": "artifact",
        "cost": 0,
        "notes": "Pronounced as ayy jis.",
        "attrib": [
            {
                "key": "reincarnate_time",
                "header": "REINCARNATE TIME:",
                "value": "5.0"
            },
            {
                "key": "disappear_time",
                "header": "DISAPPEAR TIME:",
                "value": "300.0"
            },
            {
                "key": "disappear_time_minutes_tooltip",
                "header": "DISAPPEAR TIME MINUTES TOOLTIP:",
                "value": "5"
            },
            {
                "key": "disappear_time_turbo",
                "header": "DISAPPEAR TIME TURBO:",
                "value": "240.0"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "The Immortal was said to own a shield that protected him from death itself.",
        "components": null,
        "created": false,
        "charges": false
    },
    "recipe_shivas_guard": {
        "id": 118,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Shiva's Guard Recipe",
        "cost": 1700,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "shivas_guard": {
        "hint": [
            "Active: Arctic Blast Emits a freezing wave that causes enemies to take 15% more damage from spells for 16 seconds, deals 200 magical damage and slows their movement by -40% for 4 seconds. Deals 150% damage to illusions.\n\nRadius: 900",
            "Passive: Freezing Aura  Reduces the attack speed of all enemies by -45 and all heals, regeneration and lifesteal by 25%. \n\nRadius: 1200"
        ],
        "id": 119,
        "img": "/apps/dota2/images/dota_react/items/shivas_guard.png?t=1593393829403",
        "dname": "Shiva's Guard",
        "qual": "epic",
        "cost": 4825,
        "notes": "The wave extends at a speed of 400 to a max size of 900.\nThe Arctic Blast follows its caster.\nMultiple instances of Freezing Aura do not stack.",
        "attrib": [
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "6"
            },
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "6"
            },
            {
                "key": "bonus_agility",
                "header": "BONUS AGILITY:",
                "value": "6"
            },
            {
                "key": "bonus_hp_regen",
                "header": "BONUS HP REGEN:",
                "value": "6"
            },
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "16"
            },
            {
                "key": "aura_radius",
                "header": "AURA RADIUS:",
                "value": "1200"
            },
            {
                "key": "aura_attack_speed",
                "header": "AURA ATTACK SPEED:",
                "value": "-45"
            },
            {
                "key": "blast_damage",
                "header": "BLAST DAMAGE:",
                "value": "200"
            },
            {
                "key": "blast_movement_speed",
                "header": "BLAST MOVEMENT SPEED:",
                "value": "-40"
            },
            {
                "key": "blast_debuff_duration",
                "header": "BLAST DEBUFF DURATION:",
                "value": "4.0"
            },
            {
                "key": "blast_radius",
                "header": "BLAST RADIUS:",
                "value": "900"
            },
            {
                "key": "blast_speed",
                "header": "BLAST SPEED:",
                "value": "400"
            },
            {
                "key": "hp_regen_degen_aura",
                "header": "HP REGEN DEGEN AURA:",
                "value": "25"
            },
            {
                "key": "illusion_multiplier_pct",
                "header": "ILLUSION MULTIPLIER PCT:",
                "value": "150"
            },
            {
                "key": "spell_amp",
                "header": "SPELL AMP:",
                "value": "15"
            },
            {
                "key": "resist_debuff_duration",
                "header": "RESIST DEBUFF DURATION:",
                "value": "16.0"
            }
        ],
        "mc": 75,
        "cd": 27,
        "lore": "Said to have belonged to a goddess, today it retains much of its former power.",
        "components": [
            "veil_of_discord",
            "platemail"
        ],
        "created": true,
        "charges": false
    },
    "recipe_bloodstone": {
        "id": 120,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Bloodstone Recipe",
        "cost": 700,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "bloodstone": {
        "hint": [
            "Active: Bloodpact Increases Bloodstone's Spell Lifesteal by 2.5x. Lasts 6 seconds."
        ],
        "id": 121,
        "img": "/apps/dota2/images/dota_react/items/bloodstone.png?t=1593393829403",
        "dname": "Bloodstone",
        "qual": "epic",
        "cost": 4400,
        "notes": "Using Bloodpact leaves you drained for 40 seconds and can't benefit from Bloodpact again during that time.",
        "attrib": [
            {
                "key": "bonus_aoe",
                "header": "BONUS AOE:",
                "value": "75"
            },
            {
                "key": "bonus_health",
                "header": "BONUS HEALTH:",
                "value": "500"
            },
            {
                "key": "bonus_mana",
                "header": "BONUS MANA:",
                "value": "500"
            },
            {
                "key": "spell_lifesteal",
                "header": "SPELL LIFESTEAL:",
                "value": "30"
            },
            {
                "key": "buff_duration",
                "header": "BUFF DURATION:",
                "value": "6"
            },
            {
                "key": "lifesteal_multiplier",
                "header": "LIFESTEAL MULTIPLIER:",
                "value": "2.5"
            },
            {
                "key": "hp_cost",
                "header": "HP COST:",
                "value": "0"
            }
        ],
        "mc": false,
        "cd": 35,
        "lore": "The Bloodstone's bright ruby color is unmistakable on the battlefield, as the owner seems to have infinite vitality and spirit.",
        "components": [
            "voodoo_mask",
            "soul_booster"
        ],
        "created": true,
        "charges": false
    },
    "recipe_sphere": {
        "id": 122,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Linken's Sphere Recipe",
        "cost": 600,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "sphere": {
        "hint": [
            "Passive: Spellblock Blocks most targeted spells once every 14 seconds.",
            "Active: Transfer Spellblock Temporarily removes Spellblock from the item's owner and transfers it to an allied unit for 14 seconds.\n\nRange: 700"
        ],
        "id": 123,
        "img": "/apps/dota2/images/dota_react/items/sphere.png?t=1593393829403",
        "dname": "Linken's Sphere",
        "qual": "epic",
        "cost": 4800,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_all_stats",
                "header": "BONUS ALL STATS:",
                "value": "16"
            },
            {
                "key": "bonus_health_regen",
                "header": "BONUS HEALTH REGEN:",
                "value": "6"
            },
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "4.25"
            },
            {
                "key": "block_cooldown",
                "header": "BLOCK COOLDOWN:",
                "value": "14.0"
            },
            {
                "key": "upgrade_absorb_duration",
                "header": "UPGRADE ABSORB DURATION:",
                "value": "10.0"
            },
            {
                "key": "damage_absorb",
                "header": "DAMAGE ABSORB:",
                "value": "300"
            }
        ],
        "mc": false,
        "cd": 14,
        "lore": "This magical sphere once protected one of the most famous heroes in history.",
        "components": [
            "ultimate_orb",
            "pers"
        ],
        "created": true,
        "charges": false
    },
    "recipe_lotus_orb": {
        "id": 221,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Lotus Orb Recipe",
        "cost": 250,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "lotus_orb": {
        "hint": [
            "Active: Echo Shell Applies a shield to the target unit for 6 seconds which re-casts most targeted spells back to their caster.\n\nThe shielded unit will still take damage from the spell. \n\nRange: 900\nDispel Type: Basic Dispel "
        ],
        "id": 226,
        "img": "/apps/dota2/images/dota_react/items/lotus_orb.png?t=1593393829403",
        "dname": "Lotus Orb",
        "qual": "epic",
        "cost": 3850,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "10"
            },
            {
                "key": "bonus_health_regen",
                "header": "BONUS HEALTH REGEN:",
                "value": "6.5"
            },
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "4.0"
            },
            {
                "key": "bonus_mana",
                "header": "BONUS MANA:",
                "value": "250"
            },
            {
                "key": "active_duration",
                "header": "ACTIVE DURATION:",
                "value": "6"
            }
        ],
        "mc": 175,
        "cd": 15,
        "lore": "The jewel at its center still reflects a pale image of its creator.",
        "components": [
            "pers",
            "platemail",
            "energy_booster"
        ],
        "created": true,
        "charges": false
    },
    "recipe_meteor_hammer": {
        "id": 222,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Meteor Hammer Recipe",
        "cost": 600,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "meteor_hammer": {
        "hint": [
            "Active: Meteor Hammer CHANNELED - After a successful channel, summons a meteor that strikes a 400 AoE, stunning enemies for 0.5 seconds and dealing impact damage. Continues to deal damage over time to enemies units and buildings for 6 seconds. Non-building units are also slowed for 20% for the duration of the burn. \n\nBuilding Impact Damage: 90 \nBuilding Over Time Damage: 50 \n\nNon-Building Impact Damage: 130 \nNon-Building Over Time Damage: 50 \n\nChannel Duration: 2 seconds.\nLanding Time: 0.5 seconds."
        ],
        "id": 223,
        "img": "/apps/dota2/images/dota_react/items/meteor_hammer.png?t=1593393829403",
        "dname": "Meteor Hammer",
        "qual": "epic",
        "cost": 3100,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "6"
            },
            {
                "key": "bonus_agility",
                "header": "BONUS AGILITY:",
                "value": "6"
            },
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "24"
            },
            {
                "key": "spell_amp",
                "header": "SPELL AMP:",
                "value": "10"
            },
            {
                "key": "mana_regen_multiplier",
                "header": "MANA REGEN MULTIPLIER:",
                "value": "75"
            },
            {
                "key": "spell_lifesteal_amp",
                "header": "SPELL LIFESTEAL AMP:",
                "value": "24"
            },
            {
                "key": "burn_dps_buildings",
                "header": "BURN DPS BUILDINGS:",
                "value": "50"
            },
            {
                "key": "burn_dps_units",
                "header": "BURN DPS UNITS:",
                "value": "50"
            },
            {
                "key": "burn_slow",
                "header": "BURN SLOW:",
                "value": "20"
            },
            {
                "key": "burn_duration",
                "header": "BURN DURATION:",
                "value": "6"
            },
            {
                "key": "stun_duration",
                "header": "STUN DURATION:",
                "value": "0.5"
            },
            {
                "key": "burn_interval",
                "header": "BURN INTERVAL:",
                "value": "1.0"
            },
            {
                "key": "land_time",
                "header": "LAND TIME:",
                "value": ".5"
            },
            {
                "key": "impact_radius",
                "header": "IMPACT RADIUS:",
                "value": "400"
            },
            {
                "key": "max_duration",
                "header": "MAX DURATION:",
                "value": "2"
            },
            {
                "key": "impact_damage_buildings",
                "header": "IMPACT DAMAGE BUILDINGS:",
                "value": "90"
            },
            {
                "key": "impact_damage_units",
                "header": "IMPACT DAMAGE UNITS:",
                "value": "130"
            },
            {
                "key": "enemy_particles_visible",
                "header": "ENEMY PARTICLES VISIBLE:",
                "value": "0"
            }
        ],
        "mc": 100,
        "cd": 24,
        "lore": "",
        "components": [
            "crown",
            "kaya"
        ],
        "created": true,
        "charges": false
    },
    "nullifier": {
        "hint": [
            "Active: Nullify Dispels the target and applies a debuff for 5 seconds. Continuously dispels the target.\n\nDispel Type: Basic Dispel "
        ],
        "id": 225,
        "img": "/apps/dota2/images/dota_react/items/nullifier.png?t=1593393829403",
        "dname": "Nullifier",
        "qual": "epic",
        "cost": 4375,
        "notes": "Can be cast on invulnerable units.\nPierces magic immunity.",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "75"
            },
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "10"
            },
            {
                "key": "bonus_regen",
                "header": "BONUS REGEN:",
                "value": "6"
            },
            {
                "key": "mute_duration",
                "header": "MUTE DURATION:",
                "value": "5.0"
            },
            {
                "key": "projectile_speed",
                "header": "PROJECTILE SPEED:",
                "value": "1100"
            },
            {
                "key": "slow_pct",
                "header": "SLOW PCT:",
                "value": "80"
            },
            {
                "key": "slow_interval_duration",
                "header": "SLOW INTERVAL DURATION:",
                "value": "0.5"
            }
        ],
        "mc": false,
        "cd": 10,
        "lore": "",
        "components": [
            "relic",
            "helm_of_iron_will"
        ],
        "created": true,
        "charges": false
    },
    "recipe_aeon_disk": {
        "id": 255,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Aeon Disk Recipe",
        "cost": 1200,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "aeon_disk": {
        "hint": [
            "Passive: Combo Breaker When you take damage and your health falls below 70%, a strong dispel is applied and you gain a 2.5 second buff that provides +75% Status Resistance and causes all damage you deal and are dealt to be reduced to zero. Only triggers on player based damage. Cooldown increases every time it triggers.Dispel Type: Strong Dispel "
        ],
        "id": 256,
        "img": "/apps/dota2/images/dota_react/items/aeon_disk.png?t=1593393829403",
        "dname": "Aeon Disk",
        "qual": "epic",
        "cost": 3000,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_health",
                "header": "BONUS HEALTH:",
                "value": "250"
            },
            {
                "key": "bonus_mana",
                "header": "BONUS MANA:",
                "value": "300"
            },
            {
                "key": "health_threshold_pct",
                "header": "HEALTH THRESHOLD PCT:",
                "value": "70"
            },
            {
                "key": "status_resistance",
                "header": "STATUS RESISTANCE:",
                "value": "75"
            },
            {
                "key": "buff_duration",
                "header": "BUFF DURATION:",
                "value": "2.5"
            },
            {
                "key": "max_level",
                "header": "MAX LEVEL:",
                "value": "4"
            },
            {
                "key": "cooldown_duration",
                "header": "COOLDOWN DURATION:",
                "value": "105.0 / 125.0 / 145.0 / 165.0"
            }
        ],
        "mc": false,
        "cd": 105,
        "lore": "",
        "components": [
            "vitality_booster",
            "energy_booster"
        ],
        "created": true,
        "charges": false
    },
    "recipe_kaya": {
        "id": 258,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Kaya Recipe",
        "cost": 600,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "kaya": {
        "id": 259,
        "img": "/apps/dota2/images/dota_react/items/kaya.png?t=1593393829403",
        "dname": "Kaya",
        "qual": "epic",
        "cost": 2050,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "16"
            },
            {
                "key": "spell_amp",
                "header": "SPELL AMP:",
                "value": "8"
            },
            {
                "key": "mana_regen_multiplier",
                "header": "MANA REGEN MULTIPLIER:",
                "value": "50"
            },
            {
                "key": "spell_lifesteal_amp",
                "header": "SPELL LIFESTEAL AMP:",
                "value": "24"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": [
            "staff_of_wizardry",
            "robe"
        ],
        "created": true,
        "charges": false
    },
    "trident": {
        "hint": [
            "Combines Sange, Yasha and Kaya together."
        ],
        "id": 369,
        "img": "/apps/dota2/images/dota_react/items/trident.png?t=1593393829403",
        "dname": "Trident",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "30"
            },
            {
                "key": "bonus_agility",
                "header": "BONUS AGILITY:",
                "value": "30"
            },
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "30"
            },
            {
                "key": "status_resistance",
                "header": "STATUS RESISTANCE:",
                "value": "30"
            },
            {
                "key": "bonus_attack_speed",
                "header": "BONUS ATTACK SPEED:",
                "value": "30"
            },
            {
                "key": "movement_speed_percent_bonus",
                "header": "MOVEMENT SPEED PERCENT BONUS:",
                "value": "10"
            },
            {
                "key": "hp_regen_amp",
                "header": "HP REGEN AMP:",
                "value": "30"
            },
            {
                "key": "mana_regen_multiplier",
                "header": "MANA REGEN MULTIPLIER:",
                "value": "30"
            },
            {
                "key": "spell_amp",
                "header": "SPELL AMP:",
                "value": "30"
            },
            {
                "key": "magic_damage_attack",
                "header": "MAGIC DAMAGE ATTACK:",
                "value": "30"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": [
            "kaya",
            "sange",
            "yasha",
            ""
        ],
        "created": true,
        "charges": false
    },
    "combo_breaker": {
        "id": 276,
        "img": "/apps/dota2/images/dota_react/items/combo_breaker.png?t=1593393829403",
        "cost": null,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "refresher_shard": {
        "hint": [
            "Use: Reset Cooldowns Resets the cooldowns of all your items and abilities. Shares a cooldown with Refresher Orb. This item's cooldown only progresses in your hero's main inventory."
        ],
        "id": 260,
        "img": "/apps/dota2/images/dota_react/items/refresher_shard.png?t=1593393829403",
        "dname": "Refresher Shard",
        "qual": "consumable",
        "cost": 1000,
        "notes": "Refresher Shard is shareable.",
        "attrib": [
            {
                "key": "bonus_health_regen",
                "header": "BONUS HEALTH REGEN:",
                "value": "12"
            },
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "6.0"
            },
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "20"
            }
        ],
        "mc": 200,
        "cd": 180,
        "lore": "",
        "components": null,
        "created": false,
        "charges": 1
    },
    "recipe_spirit_vessel": {
        "id": 266,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Spirit Vessel Recipe",
        "cost": 1200,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "spirit_vessel": {
        "hint": [
            "Active: Soul Release When used against enemies, it reduces health by 4% of current health per second, and reduces HP regeneration, healing, lifesteal and spell lifesteal by 45%. Deals 35 damage per second. \n\nWhen used on allies, it provides 40 health regeneration per second. \n\nLasts 8 seconds.  \n\nGains charges every time an enemy hero dies within 1400 units.  Only the closest Spirit Vessel to the dying hero will gain a charge.\n\nCast Range: 750"
        ],
        "id": 267,
        "img": "/apps/dota2/images/dota_react/items/spirit_vessel.png?t=1593393829403",
        "dname": "Spirit Vessel",
        "qual": "rare",
        "cost": 2780,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "1.75"
            },
            {
                "key": "bonus_all_stats",
                "header": "BONUS ALL STATS:",
                "value": "6"
            },
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "2"
            },
            {
                "key": "bonus_health",
                "header": "BONUS HEALTH:",
                "value": "125"
            },
            {
                "key": "soul_radius",
                "header": "SOUL RADIUS:",
                "value": "1400"
            },
            {
                "key": "soul_initial_charge",
                "header": "SOUL INITIAL CHARGE:",
                "value": "2"
            },
            {
                "key": "soul_additional_charges",
                "header": "SOUL ADDITIONAL CHARGES:",
                "value": "1"
            },
            {
                "key": "soul_heal_amount",
                "header": "SOUL HEAL AMOUNT:",
                "value": "40"
            },
            {
                "key": "soul_damage_amount",
                "header": "SOUL DAMAGE AMOUNT:",
                "value": "35"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "8.0"
            },
            {
                "key": "hp_regen_reduction_enemy",
                "header": "HP REGEN REDUCTION ENEMY:",
                "value": "45"
            },
            {
                "key": "enemy_hp_drain",
                "header": "ENEMY HP DRAIN:",
                "value": "4"
            }
        ],
        "mc": false,
        "cd": 7,
        "lore": "",
        "components": [
            "urn_of_shadows",
            "crown",
            "fluffy_hat"
        ],
        "created": true,
        "charges": false
    },
    "vanguard": {
        "hint": [
            "Passive: Damage Block Grants a 60% chance to block 50 damage from incoming attacks on melee heroes, and 25 damage on ranged."
        ],
        "id": 125,
        "img": "/apps/dota2/images/dota_react/items/vanguard.png?t=1593393829403",
        "dname": "Vanguard",
        "qual": "epic",
        "cost": 1700,
        "notes": "Multiple sources of damage block do not stack.",
        "attrib": [
            {
                "key": "bonus_health",
                "header": "BONUS HEALTH:",
                "value": "250"
            },
            {
                "key": "bonus_health_regen",
                "header": "BONUS HEALTH REGEN:",
                "value": "4.5"
            },
            {
                "key": "block_damage_melee",
                "header": "BLOCK DAMAGE MELEE:",
                "value": "50"
            },
            {
                "key": "block_damage_ranged",
                "header": "BLOCK DAMAGE RANGED:",
                "value": "25"
            },
            {
                "key": "block_chance",
                "header": "BLOCK CHANCE:",
                "value": "60"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A powerful shield that defends its wielder from even the most vicious of attacks.",
        "components": [
            "ring_of_health",
            "vitality_booster"
        ],
        "created": true,
        "charges": false
    },
    "recipe_crimson_guard": {
        "id": 243,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Crimson Guard Recipe",
        "cost": 1050,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "crimson_guard": {
        "hint": [
            "Active: Guard For 8 seconds, grant nearby allied heroes and buildings a 100% chance to block damage equal to 70 plus 50% of the casters Strength value from each incoming attack.\nUnits may only be affected by Guard once every 35 seconds.\n\nRadius: 1200",
            "Passive: Damage Block  Grants a 60% chance to block 75 damage from incoming attacks on melee heroes, and 50 damage on ranged."
        ],
        "id": 242,
        "img": "/apps/dota2/images/dota_react/items/crimson_guard.png?t=1593393829403",
        "dname": "Crimson Guard",
        "qual": "epic",
        "cost": 3725,
        "notes": "Multiple sources of damage block do not stack.",
        "attrib": [
            {
                "key": "bonus_health",
                "header": "BONUS HEALTH:",
                "value": "250"
            },
            {
                "key": "bonus_health_regen",
                "header": "BONUS HEALTH REGEN:",
                "value": "12"
            },
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "8"
            },
            {
                "key": "block_damage_melee",
                "header": "BLOCK DAMAGE MELEE:",
                "value": "75"
            },
            {
                "key": "block_damage_ranged",
                "header": "BLOCK DAMAGE RANGED:",
                "value": "50"
            },
            {
                "key": "block_chance",
                "header": "BLOCK CHANCE:",
                "value": "60"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "8"
            },
            {
                "key": "bonus_aoe_radius",
                "header": "BONUS AOE RADIUS:",
                "value": "1200"
            },
            {
                "key": "block_damage_active",
                "header": "BLOCK DAMAGE ACTIVE:",
                "value": "70"
            },
            {
                "key": "block_chance_active",
                "header": "BLOCK CHANCE ACTIVE:",
                "value": "100"
            },
            {
                "key": "tooltip_reapply_time",
                "header": "TOOLTIP REAPPLY TIME:",
                "value": "35"
            },
            {
                "key": "strength_pct",
                "header": "STRENGTH PCT:",
                "value": "50"
            }
        ],
        "mc": 75,
        "cd": 35,
        "lore": "A cuirass originally built to protect against the dreaded Year Beast.",
        "components": [
            "vanguard",
            "helm_of_iron_will"
        ],
        "created": true,
        "charges": false
    },
    "recipe_blade_mail": {
        "id": 126,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Blade Mail Recipe",
        "cost": 550,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "blade_mail": {
        "hint": [
            "Active: Damage Return For 5.5 seconds, the damage returned from all sources is increased by 85%.",
            "Passive: Damage Return Everytime you are attacked, you return 20 damage plus 20% of the attack damage dealt to you."
        ],
        "id": 127,
        "img": "/apps/dota2/images/dota_react/items/blade_mail.png?t=1593393829403",
        "dname": "Blade Mail",
        "qual": "epic",
        "cost": 2100,
        "notes": "Damage Return is calculated before any kind of reduction.\nDamage Return doesn't reflect damage from other forms of Blade Mail.\nReturned damage type is the same as it was received.",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "18"
            },
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "7"
            },
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "0"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "5.5"
            },
            {
                "key": "passive_reflection_constant",
                "header": "PASSIVE REFLECTION CONSTANT:",
                "value": "20"
            },
            {
                "key": "passive_reflection_pct",
                "header": "PASSIVE REFLECTION PCT:",
                "value": "20"
            },
            {
                "key": "active_reflection_pct",
                "header": "ACTIVE REFLECTION PCT:",
                "value": "85"
            }
        ],
        "mc": 25,
        "cd": 25,
        "lore": "A razor-sharp coat of mail, it is the choice of selfless martyrs in combat.",
        "components": [
            "broadsword",
            "chainmail"
        ],
        "created": true,
        "charges": false
    },
    "soul_booster": {
        "id": 129,
        "img": "/apps/dota2/images/dota_react/items/soul_booster.png?t=1593393829403",
        "dname": "Soul Booster",
        "qual": "epic",
        "cost": 3000,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_health",
                "header": "BONUS HEALTH:",
                "value": "425"
            },
            {
                "key": "bonus_mana",
                "header": "BONUS MANA:",
                "value": "425"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Regain lost courage.",
        "components": [
            "vitality_booster",
            "energy_booster",
            "point_booster"
        ],
        "created": true,
        "charges": false
    },
    "hood_of_defiance": {
        "hint": [
            "Active: Barrier Creates a spell shield that absorbs up to 350 magical damage.  Lasts 12 seconds."
        ],
        "id": 131,
        "img": "/apps/dota2/images/dota_react/items/hood_of_defiance.png?t=1593393829403",
        "dname": "Hood of Defiance",
        "qual": "epic",
        "cost": 0,
        "notes": "Stacks multiplicatively with other sources of spell resistance.",
        "attrib": [
            {
                "key": "bonus_spell_resist",
                "header": "BONUS SPELL RESIST:",
                "value": "18"
            },
            {
                "key": "bonus_health_regen",
                "header": "BONUS HEALTH REGEN:",
                "value": "8.5"
            },
            {
                "key": "tooltip_resist",
                "header": "TOOLTIP RESIST:",
                "value": "18"
            },
            {
                "key": "barrier_block",
                "header": "BARRIER BLOCK:",
                "value": "350"
            },
            {
                "key": "barrier_duration",
                "header": "BARRIER DURATION:",
                "value": "12.0"
            }
        ],
        "mc": 50,
        "cd": 60,
        "lore": "A furred, magic resistant headpiece that is feared by wizards.",
        "created": true,
        "charges": false
    },
    "recipe_eternal_shroud": {
        "id": 691,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Eternal Shroud Recipe",
        "cost": 800,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "eternal_shroud": {
        "hint": [
            "Passive: Shroud Restores mana equal to 20% of incoming enemy spell damage before reductions.",
            "Passive: Eternal Endurance  For every 300 spell damage that equipped hero receives, it gains a stack of Endurance for 6s up to a maximum of 6 charges. Each charge increases Eternal Shroud's magic resistance by 4% ."
        ],
        "id": 692,
        "img": "/apps/dota2/images/dota_react/items/eternal_shroud.png?t=1593393829403",
        "dname": "Eternal Shroud",
        "qual": "epic",
        "cost": 3600,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_spell_resist",
                "header": "BONUS SPELL RESIST:",
                "value": "25"
            },
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "14"
            },
            {
                "key": "bonus_health",
                "header": "BONUS HEALTH:",
                "value": "300"
            },
            {
                "key": "stack_threshold",
                "header": "STACK THRESHOLD:",
                "value": "300"
            },
            {
                "key": "stack_duration",
                "header": "STACK DURATION:",
                "value": "6"
            },
            {
                "key": "stack_resist",
                "header": "STACK RESIST:",
                "value": "4"
            },
            {
                "key": "mana_restore_pct",
                "header": "MANA RESTORE PCT:",
                "value": "20"
            },
            {
                "key": "max_stacks",
                "header": "MAX STACKS:",
                "value": "6"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A pristine hood that feeds upon strife to empower its owner.",
        "components": [
            "cloak",
            "ogre_axe",
            "vitality_booster"
        ],
        "created": true,
        "charges": false
    },
    "rapier": {
        "hint": [
            "Passive: Everlasting Dropped on death, and cannot be destroyed.  \n\nBecomes unusable if picked up by an ally of its owner until it is returned to its owner. It is immediately usable by anybody if an enemy of the owner picks it up and is killed. A dropped Rapier cannot be picked up by a courier."
        ],
        "id": 133,
        "img": "/apps/dota2/images/dota_react/items/rapier.png?t=1593393829403",
        "dname": "Divine Rapier",
        "qual": "epic",
        "cost": 5600,
        "notes": "If Divine Rapier is dropped and picked up by an enemy of its original owner, it cannot be dropped again except by death.",
        "attrib": [
            {
                "key": "bonus_spell_amp",
                "header": "BONUS SPELL AMP:",
                "value": "25"
            },
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "350"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "So powerful, it cannot have a single owner.",
        "components": [
            "relic",
            "demon_edge"
        ],
        "created": true,
        "charges": false
    },
    "recipe_monkey_king_bar": {
        "id": 134,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Monkey King Bar Recipe",
        "cost": 800,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "monkey_king_bar": {
        "hint": [
            "Passive: Pierce Grants each attack a 80% chance to pierce through evasion and deal 70 bonus magical damage."
        ],
        "id": 135,
        "img": "/apps/dota2/images/dota_react/items/monkey_king_bar.png?t=1593393829403",
        "dname": "Monkey King Bar",
        "qual": "epic",
        "cost": 4900,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "40"
            },
            {
                "key": "bonus_attack_speed",
                "header": "BONUS ATTACK SPEED:",
                "value": "45"
            },
            {
                "key": "bonus_chance",
                "header": "BONUS CHANCE:",
                "value": "80"
            },
            {
                "key": "bonus_chance_damage",
                "header": "BONUS CHANCE DAMAGE:",
                "value": "70"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A powerful staff used by a master warrior.",
        "components": [
            "demon_edge",
            "javelin",
            "blitz_knuckles"
        ],
        "created": true,
        "charges": false
    },
    "radiance": {
        "hint": [
            "Toggle: Burn When active, scorches enemies for 60 magical damage per second and causes them to miss 15% of their attacks. Deals 150% damage to illusions. Illusions deal 35 magical damage per second.\n\nRadius: 700"
        ],
        "id": 137,
        "img": "/apps/dota2/images/dota_react/items/radiance.png?t=1593393829403",
        "dname": "Radiance",
        "qual": "epic",
        "cost": 4700,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "55"
            },
            {
                "key": "aura_damage",
                "header": "AURA DAMAGE:",
                "value": "60"
            },
            {
                "key": "aura_damage_illusions",
                "header": "AURA DAMAGE ILLUSIONS:",
                "value": "35"
            },
            {
                "key": "upgrade_day_vision",
                "header": "UPGRADE DAY VISION:",
                "value": "250"
            },
            {
                "key": "evasion",
                "header": "EVASION:",
                "value": "15"
            },
            {
                "key": "blind_pct",
                "header": "BLIND PCT:",
                "value": "15"
            },
            {
                "key": "aura_radius",
                "header": "AURA RADIUS:",
                "value": "700"
            },
            {
                "key": "illusion_multiplier_pct",
                "header": "ILLUSION MULTIPLIER PCT:",
                "value": "150"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A divine weapon that causes damage and a bright burning effect that lays waste to nearby enemies.",
        "components": [
            "relic",
            "talisman_of_evasion"
        ],
        "created": true,
        "charges": false
    },
    "butterfly": {
        "id": 139,
        "img": "/apps/dota2/images/dota_react/items/butterfly.png?t=1593393829403",
        "dname": "Butterfly",
        "qual": "epic",
        "cost": 5450,
        "notes": "Stacks diminishingly with other sources of Evasion.",
        "attrib": [
            {
                "key": "bonus_agility",
                "header": "BONUS AGILITY:",
                "value": "35"
            },
            {
                "key": "bonus_evasion",
                "header": "BONUS EVASION:",
                "value": "35"
            },
            {
                "key": "bonus_attack_speed_pct",
                "header": "BONUS ATTACK SPEED PCT:",
                "value": "20"
            },
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "25"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Only the mightiest and most experienced of warriors can wield the Butterfly, but it provides incredible dexterity in combat.",
        "components": [
            "eagle",
            "talisman_of_evasion",
            "claymore"
        ],
        "created": true,
        "charges": false
    },
    "recipe_greater_crit": {
        "id": 140,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Daedalus Recipe",
        "cost": 900,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "greater_crit": {
        "hint": [
            "Passive: Critical Strike Grants each attack a 30% chance to deal 225% damage."
        ],
        "id": 141,
        "img": "/apps/dota2/images/dota_react/items/greater_crit.png?t=1593393829403",
        "dname": "Daedalus",
        "qual": "epic",
        "cost": 5100,
        "notes": "Critical Strike does not work against buildings.",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "88"
            },
            {
                "key": "crit_chance",
                "header": "CRIT CHANCE:",
                "value": "30"
            },
            {
                "key": "crit_multiplier",
                "header": "CRIT MULTIPLIER:",
                "value": "225"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A weapon of incredible power that is difficult for even the strongest of warriors to control.",
        "components": [
            "lesser_crit",
            "demon_edge"
        ],
        "created": true,
        "charges": false
    },
    "recipe_basher": {
        "id": 142,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Skull Basher Recipe",
        "cost": 825,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "basher": {
        "hint": [
            "Passive: Bash Grants melee heroes a 25% chance on hit to stun the target for 1.2 seconds and deal 100 bonus physical damage.  Bash chance for ranged heroes is 10%."
        ],
        "id": 143,
        "img": "/apps/dota2/images/dota_react/items/basher.png?t=1593393829403",
        "dname": "Skull Basher",
        "qual": "epic",
        "cost": 2875,
        "notes": "Does not stack with other sources of Bash.\nThe following heroes cannot trigger Bash on this item: Spirit Breaker, Faceless Void, and Slardar.\nDoes not grant Bash to Clones and Tempest Doubles.",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "30"
            },
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "10"
            },
            {
                "key": "bash_chance_melee",
                "header": "BASH CHANCE MELEE:",
                "value": "25"
            },
            {
                "key": "bash_chance_ranged",
                "header": "BASH CHANCE RANGED:",
                "value": "10"
            },
            {
                "key": "bash_duration",
                "header": "BASH DURATION:",
                "value": "1.2"
            },
            {
                "key": "bash_cooldown",
                "header": "BASH COOLDOWN:",
                "value": "2.3"
            },
            {
                "key": "bonus_chance_damage",
                "header": "BONUS CHANCE DAMAGE:",
                "value": "100"
            }
        ],
        "mc": false,
        "cd": 2,
        "lore": "A feared weapon in the right hands, this maul's ability to shatter the defenses of its opponents should not be underestimated.",
        "components": [
            "mithril_hammer",
            "belt_of_strength"
        ],
        "created": true,
        "charges": false
    },
    "recipe_bfury": {
        "id": 144,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Battle Fury Recipe",
        "cost": 450,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "bfury": {
        "hint": [
            "Active: Chop Tree Destroy a target tree.\n\nCast Range: 350",
            "Passive: Quell  Increases attack damage against non-hero units by 10 for melee heroes, and 5 for ranged. ",
            "Passive: Cleave  Deals 70% of attack damage as physical damage in a cone up to 650 around the target. Deals 40% against creeps. (Melee Only)"
        ],
        "id": 145,
        "img": "/apps/dota2/images/dota_react/items/bfury.png?t=1593393829403",
        "dname": "Battle Fury",
        "qual": "epic",
        "cost": 4100,
        "notes": "Cleave damage goes through spell immunity.\nIf multiple sources of Cleave are present, each Cleave's damage is applied separately.",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "65"
            },
            {
                "key": "bonus_health_regen",
                "header": "BONUS HEALTH REGEN:",
                "value": "7.5"
            },
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "2.75"
            },
            {
                "key": "cleave_damage_percent",
                "header": "CLEAVE DAMAGE PERCENT:",
                "value": "70"
            },
            {
                "key": "cleave_damage_percent_creep",
                "header": "CLEAVE DAMAGE PERCENT CREEP:",
                "value": "40"
            },
            {
                "key": "quelling_bonus",
                "header": "QUELLING BONUS:",
                "value": "10"
            },
            {
                "key": "quelling_bonus_ranged",
                "header": "QUELLING BONUS RANGED:",
                "value": "5"
            },
            {
                "key": "cleave_starting_width",
                "header": "CLEAVE STARTING WIDTH:",
                "value": "150"
            },
            {
                "key": "cleave_ending_width",
                "header": "CLEAVE ENDING WIDTH:",
                "value": "360"
            },
            {
                "key": "cleave_distance",
                "header": "CLEAVE DISTANCE:",
                "value": "650"
            },
            {
                "key": "upgraded_cleave_bonus",
                "header": "UPGRADED CLEAVE BONUS:",
                "value": "25"
            },
            {
                "key": "upgraded_damage_bonus",
                "header": "UPGRADED DAMAGE BONUS:",
                "value": "15"
            }
        ],
        "mc": false,
        "cd": 4,
        "lore": "The bearer of this mighty axe gains the ability to cut down swaths of enemies at once.",
        "components": [
            "broadsword",
            "claymore",
            "cornucopia",
            "quelling_blade"
        ],
        "created": true,
        "charges": false
    },
    "recipe_manta": {
        "id": 146,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Manta Style Recipe",
        "cost": 1550,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "manta": {
        "hint": [
            "Active: Mirror Image Creates 2 images of your hero that last 20 seconds. \n\nMelee images deal 33% damage, while Ranged images deal 28%. Illusions take 300% damage. \n\nDispel Type: Basic Dispel "
        ],
        "id": 147,
        "img": "/apps/dota2/images/dota_react/items/manta.png?t=1593393829403",
        "dname": "Manta Style",
        "qual": "epic",
        "cost": 4600,
        "notes": "Has a 0.1 second cast time during which you are invulnerable.\nMany effects are removed upon using Manta.\nYasha based movement speed bonuses from multiple items do not stack.",
        "attrib": [
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "10"
            },
            {
                "key": "bonus_agility",
                "header": "BONUS AGILITY:",
                "value": "26"
            },
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "10"
            },
            {
                "key": "bonus_attack_speed",
                "header": "BONUS ATTACK SPEED:",
                "value": "15"
            },
            {
                "key": "bonus_movement_speed",
                "header": "BONUS MOVEMENT SPEED:",
                "value": "10"
            },
            {
                "key": "images_count",
                "header": "IMAGES COUNT:",
                "value": "2"
            },
            {
                "key": "tooltip_illusion_duration",
                "header": "TOOLTIP ILLUSION DURATION:",
                "value": "20"
            },
            {
                "key": "images_do_damage_percent_melee",
                "header": "IMAGES DO DAMAGE PERCENT MELEE:",
                "value": "-67"
            },
            {
                "key": "tooltip_damage_outgoing_melee",
                "header": "TOOLTIP DAMAGE OUTGOING MELEE:",
                "value": "33"
            },
            {
                "key": "images_take_damage_percent",
                "header": "IMAGES TAKE DAMAGE PERCENT:",
                "value": "200"
            },
            {
                "key": "tooltip_damage_incoming_total_pct",
                "header": "TOOLTIP DAMAGE INCOMING TOTAL PCT:",
                "value": "300"
            },
            {
                "key": "images_do_damage_percent_ranged",
                "header": "IMAGES DO DAMAGE PERCENT RANGED:",
                "value": "-72"
            },
            {
                "key": "tooltip_damage_outgoing_ranged",
                "header": "TOOLTIP DAMAGE OUTGOING RANGED:",
                "value": "28"
            },
            {
                "key": "invuln_duration",
                "header": "INVULN DURATION:",
                "value": "0.1"
            },
            {
                "key": "vision_radius",
                "header": "VISION RADIUS:",
                "value": "1000"
            }
        ],
        "mc": 125,
        "cd": 30,
        "lore": "An axe made of reflective materials that causes confusion amongst enemy ranks.",
        "components": [
            "yasha",
            "diadem"
        ],
        "created": true,
        "charges": false
    },
    "recipe_lesser_crit": {
        "id": 148,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Crystalys Recipe",
        "cost": 200,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "lesser_crit": {
        "hint": [
            "Passive: Critical Strike Grants each attack a 30% chance to deal 160% damage."
        ],
        "id": 149,
        "img": "/apps/dota2/images/dota_react/items/lesser_crit.png?t=1593393829403",
        "dname": "Crystalys",
        "qual": "epic",
        "cost": 2000,
        "notes": "Critical Strike does not work against buildings.",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "32"
            },
            {
                "key": "crit_chance",
                "header": "CRIT CHANCE:",
                "value": "30"
            },
            {
                "key": "crit_multiplier",
                "header": "CRIT MULTIPLIER:",
                "value": "160"
            },
            {
                "key": "tooltip_crit_damage",
                "header": "TOOLTIP CRIT DAMAGE:",
                "value": "60"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A blade forged from rare crystals, it seeks weak points in enemy armor.",
        "components": [
            "claymore",
            "blades_of_attack"
        ],
        "created": true,
        "charges": false
    },
    "recipe_dragon_lance": {
        "id": 234,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Dragon Lance Recipe",
        "cost": 450,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "dragon_lance": {
        "hint": [
            "Passive: Dragon's Reach Increases attack range of ranged heroes."
        ],
        "id": 236,
        "img": "/apps/dota2/images/dota_react/items/dragon_lance.png?t=1593393829403",
        "dname": "Dragon Lance",
        "qual": "artifact",
        "cost": 1900,
        "notes": "Passive does not stack.",
        "attrib": [
            {
                "key": "bonus_agility",
                "header": "BONUS AGILITY:",
                "value": "15"
            },
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "10"
            },
            {
                "key": "base_attack_range",
                "header": "BASE ATTACK RANGE:",
                "value": "150"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "The forward charge of the wyvern host grants no quarter.",
        "components": [
            "blade_of_alacrity",
            "belt_of_strength"
        ],
        "created": true,
        "charges": false
    },
    "recipe_armlet": {
        "id": 150,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Armlet of Mordiggian Recipe",
        "cost": 625,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "armlet": {
        "hint": [
            "Toggle: Unholy Strength When active, Unholy Strength grants +35 damage, +25 strength, +35% slow resistance and +4 armor, but drains 45 health per second.\n\n You cannot die from the health drain when Unholy Strength is activated, nor from the strength loss when Unholy Strength is deactivated."
        ],
        "id": 151,
        "img": "/apps/dota2/images/dota_react/items/armlet.png?t=1593393829403",
        "dname": "Armlet of Mordiggian",
        "qual": "epic",
        "cost": 2500,
        "notes": "The strength change will affect both maximum and current HP, but you cannot die from the change.\nThe strength change occurs over 0.6 seconds.\nActivating or deactivating Unholy Strength does not interrupt channeling.",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "15"
            },
            {
                "key": "bonus_attack_speed",
                "header": "BONUS ATTACK SPEED:",
                "value": "25"
            },
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "6"
            },
            {
                "key": "bonus_health_regen",
                "header": "BONUS HEALTH REGEN:",
                "value": "5"
            },
            {
                "key": "unholy_bonus_damage",
                "header": "UNHOLY BONUS DAMAGE:",
                "value": "35"
            },
            {
                "key": "unholy_bonus_strength",
                "header": "UNHOLY BONUS STRENGTH:",
                "value": "25"
            },
            {
                "key": "unholy_bonus_armor",
                "header": "UNHOLY BONUS ARMOR:",
                "value": "4"
            },
            {
                "key": "unholy_bonus_slow_resistance",
                "header": "UNHOLY BONUS SLOW RESISTANCE:",
                "value": "35"
            },
            {
                "key": "unholy_health_drain_per_second",
                "header": "UNHOLY HEALTH DRAIN PER SECOND:",
                "value": "45"
            },
            {
                "key": "toggle_cooldown",
                "header": "TOGGLE COOLDOWN:",
                "value": "0.036"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Weapon of choice among brutes, the bearer sacrifices his life energy to gain immense strength and power.",
        "components": [
            "helm_of_iron_will",
            "gloves",
            "blades_of_attack"
        ],
        "created": true,
        "charges": false
    },
    "invis_sword": {
        "hint": [
            "Active: Shadow Walk Makes you invisible for 14 seconds, or until you attack or cast a spell. While Shadow Walk is active, you move 20% faster and can move through units.  \n\nIf attacking to end the invisibility, you gain 175 bonus physical damage on that attack."
        ],
        "id": 152,
        "img": "/apps/dota2/images/dota_react/items/invis_sword.png?t=1593393829403",
        "dname": "Shadow Blade",
        "qual": "epic",
        "cost": 3000,
        "notes": "Has a 0.3 second fade time.\nIf the invisibility ends without attacking, the bonus damage is lost.",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "20"
            },
            {
                "key": "bonus_attack_speed",
                "header": "BONUS ATTACK SPEED:",
                "value": "35"
            },
            {
                "key": "windwalk_duration",
                "header": "WINDWALK DURATION:",
                "value": "14.0"
            },
            {
                "key": "windwalk_movement_speed",
                "header": "WINDWALK MOVEMENT SPEED:",
                "value": "20"
            },
            {
                "key": "windwalk_fade_time",
                "header": "WINDWALK FADE TIME:",
                "value": "0.3"
            },
            {
                "key": "windwalk_bonus_damage",
                "header": "WINDWALK BONUS DAMAGE:",
                "value": "175"
            }
        ],
        "mc": 75,
        "cd": 25,
        "lore": "The blade of a fallen king, it allows you to move unseen and strike from the shadows.",
        "components": [
            "shadow_amulet",
            "blitz_knuckles",
            "broadsword"
        ],
        "created": true,
        "charges": false
    },
    "recipe_silver_edge": {
        "id": 248,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Silver Edge Recipe",
        "cost": 250,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "silver_edge": {
        "hint": [
            "Active: Shadow Walk Makes you invisible for 14 seconds, or until you attack or cast a spell. While invisible, you move 25% faster and can move through units.  \n\nAttacking to end the invisibility will deal 300 bonus physical damage and disable their passive abilities for 5 seconds."
        ],
        "id": 249,
        "img": "/apps/dota2/images/dota_react/items/silver_edge.png?t=1593393829403",
        "dname": "Silver Edge",
        "qual": "epic",
        "cost": 5450,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "60"
            },
            {
                "key": "bonus_attack_speed",
                "header": "BONUS ATTACK SPEED:",
                "value": "35"
            },
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "0"
            },
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "0"
            },
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "0"
            },
            {
                "key": "windwalk_duration",
                "header": "WINDWALK DURATION:",
                "value": "14.0"
            },
            {
                "key": "windwalk_movement_speed",
                "header": "WINDWALK MOVEMENT SPEED:",
                "value": "25"
            },
            {
                "key": "windwalk_fade_time",
                "header": "WINDWALK FADE TIME:",
                "value": "0.3"
            },
            {
                "key": "windwalk_bonus_damage",
                "header": "WINDWALK BONUS DAMAGE:",
                "value": "300"
            },
            {
                "key": "backstab_duration",
                "header": "BACKSTAB DURATION:",
                "value": "5"
            },
            {
                "key": "visibility_radius",
                "header": "VISIBILITY RADIUS:",
                "value": "1025"
            }
        ],
        "mc": 75,
        "cd": 20,
        "lore": "Once used to slay an unjust king, only to have the kingdom erupt into civil war in the aftermath.",
        "components": [
            "invis_sword",
            "demon_edge"
        ],
        "created": true,
        "charges": false
    },
    "sange_and_yasha": {
        "id": 154,
        "img": "/apps/dota2/images/dota_react/items/sange_and_yasha.png?t=1593393829403",
        "dname": "Sange and Yasha",
        "qual": "artifact",
        "cost": 4100,
        "notes": "Yasha-based movement speed bonuses from multiple items do not stack.",
        "attrib": [
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "16"
            },
            {
                "key": "bonus_agility",
                "header": "BONUS AGILITY:",
                "value": "16"
            },
            {
                "key": "status_resistance",
                "header": "STATUS RESISTANCE:",
                "value": "20"
            },
            {
                "key": "bonus_attack_speed",
                "header": "BONUS ATTACK SPEED:",
                "value": "20"
            },
            {
                "key": "movement_speed_percent_bonus",
                "header": "MOVEMENT SPEED PERCENT BONUS:",
                "value": "12"
            },
            {
                "key": "hp_regen_amp",
                "header": "HP REGEN AMP:",
                "value": "22"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Sange and Yasha, when attuned by the moonlight and used together, become a very powerful combination.",
        "components": [
            "yasha",
            "sange"
        ],
        "created": true,
        "charges": false
    },
    "kaya_and_sange": {
        "id": 273,
        "img": "/apps/dota2/images/dota_react/items/kaya_and_sange.png?t=1593393829403",
        "dname": "Kaya and Sange",
        "qual": "artifact",
        "cost": 4100,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "16"
            },
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "16"
            },
            {
                "key": "status_resistance",
                "header": "STATUS RESISTANCE:",
                "value": "20"
            },
            {
                "key": "mana_regen_multiplier",
                "header": "MANA REGEN MULTIPLIER:",
                "value": "50"
            },
            {
                "key": "spell_amp",
                "header": "SPELL AMP:",
                "value": "12"
            },
            {
                "key": "hp_regen_amp",
                "header": "HP REGEN AMP:",
                "value": "22"
            },
            {
                "key": "spell_lifesteal_amp",
                "header": "SPELL LIFESTEAL AMP:",
                "value": "30"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Two of three known items of unimaginable power that many believe were crafted at the same enchanter's forge.",
        "components": [
            "sange",
            "kaya"
        ],
        "created": true,
        "charges": false
    },
    "yasha_and_kaya": {
        "id": 277,
        "img": "/apps/dota2/images/dota_react/items/yasha_and_kaya.png?t=1593393829403",
        "dname": "Yasha and Kaya",
        "qual": "artifact",
        "cost": 4100,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_agility",
                "header": "BONUS AGILITY:",
                "value": "16"
            },
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "16"
            },
            {
                "key": "bonus_attack_speed",
                "header": "BONUS ATTACK SPEED:",
                "value": "20"
            },
            {
                "key": "mana_regen_multiplier",
                "header": "MANA REGEN MULTIPLIER:",
                "value": "50"
            },
            {
                "key": "movement_speed_percent_bonus",
                "header": "MOVEMENT SPEED PERCENT BONUS:",
                "value": "12"
            },
            {
                "key": "spell_amp",
                "header": "SPELL AMP:",
                "value": "12"
            },
            {
                "key": "spell_lifesteal_amp",
                "header": "SPELL LIFESTEAL AMP:",
                "value": "30"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Yasha and Kaya when paired together share a natural resonance.",
        "components": [
            "kaya",
            "yasha"
        ],
        "created": true,
        "charges": false
    },
    "satanic": {
        "hint": [
            "Active: Unholy Rage Increases Lifesteal percentage to 175% for 6 seconds. \n\nDispel Type: Basic Dispel ",
            "Passive: Lifesteal Heals the attacker for a percentage of attack damage dealt. Lifesteal from creeps is reduced by 40%."
        ],
        "id": 156,
        "img": "/apps/dota2/images/dota_react/items/satanic.png?t=1593393829403",
        "dname": "Satanic",
        "qual": "artifact",
        "cost": 5050,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "25"
            },
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "25"
            },
            {
                "key": "lifesteal_percent",
                "header": "LIFESTEAL PERCENT:",
                "value": "30"
            },
            {
                "key": "creep_lifesteal_reduction_pct",
                "header": "CREEP LIFESTEAL REDUCTION PCT:",
                "value": "40"
            },
            {
                "key": "unholy_lifesteal_percent",
                "header": "UNHOLY LIFESTEAL PERCENT:",
                "value": "145"
            },
            {
                "key": "unholy_lifesteal_total_tooltip",
                "header": "UNHOLY LIFESTEAL TOTAL TOOLTIP:",
                "value": "175"
            },
            {
                "key": "unholy_duration",
                "header": "UNHOLY DURATION:",
                "value": "6.0"
            }
        ],
        "mc": false,
        "cd": 30,
        "lore": "Immense power at the cost of your soul.",
        "components": [
            "lifesteal",
            "claymore",
            "reaver"
        ],
        "created": true,
        "charges": false
    },
    "recipe_mjollnir": {
        "id": 157,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Mjollnir Recipe",
        "cost": 550,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "mjollnir": {
        "hint": [
            "Active: Static Charge Places a charged shield on a target unit for 15 seconds which has a 20% chance to release a 225 magical damage shocking bolt at a nearby attacker and 4 additional enemies.\n\nRange: 800",
            "Passive: Chain Lightning Grants a 30% chance on attack to release a bolt of electricity that leaps between 12 targets within a 650 radius, dealing 180 magical damage to each. Lightning proc pierces evasion. Deals 150% damage to illusions."
        ],
        "id": 158,
        "img": "/apps/dota2/images/dota_react/items/mjollnir.png?t=1593393829403",
        "dname": "Mjollnir",
        "qual": "artifact",
        "cost": 5500,
        "notes": "Static Charge cannot trigger more than once per second.\nStatic Charge's shock deals magical damage centered on hero with the Static Charge. Static Charge's targets cannot be more than 900 range away.\nStatic Charge procs will not bounce to heroes that are invisible or hidden by Fog of War.",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "25"
            },
            {
                "key": "bonus_attack_speed",
                "header": "BONUS ATTACK SPEED:",
                "value": "90"
            },
            {
                "key": "static_duration",
                "header": "STATIC DURATION:",
                "value": "15.0"
            },
            {
                "key": "static_chance",
                "header": "STATIC CHANCE:",
                "value": "20"
            },
            {
                "key": "static_strikes",
                "header": "STATIC STRIKES:",
                "value": "4"
            },
            {
                "key": "static_damage",
                "header": "STATIC DAMAGE:",
                "value": "225"
            },
            {
                "key": "static_primary_radius",
                "header": "STATIC PRIMARY RADIUS:",
                "value": "600"
            },
            {
                "key": "static_seconary_radius",
                "header": "STATIC SECONARY RADIUS:",
                "value": "900"
            },
            {
                "key": "static_radius",
                "header": "STATIC RADIUS:",
                "value": "900"
            },
            {
                "key": "static_cooldown",
                "header": "STATIC COOLDOWN:",
                "value": "1.0"
            },
            {
                "key": "chain_chance",
                "header": "CHAIN CHANCE:",
                "value": "30"
            },
            {
                "key": "chain_damage",
                "header": "CHAIN DAMAGE:",
                "value": "180"
            },
            {
                "key": "chain_strikes",
                "header": "CHAIN STRIKES:",
                "value": "12"
            },
            {
                "key": "chain_radius",
                "header": "CHAIN RADIUS:",
                "value": "650"
            },
            {
                "key": "chain_delay",
                "header": "CHAIN DELAY:",
                "value": "0.25"
            },
            {
                "key": "chain_cooldown",
                "header": "CHAIN COOLDOWN:",
                "value": "0.2"
            },
            {
                "key": "max_charges",
                "header": "MAX CHARGES:",
                "value": "0"
            },
            {
                "key": "illusion_multiplier_pct",
                "header": "ILLUSION MULTIPLIER PCT:",
                "value": "150"
            }
        ],
        "mc": 50,
        "cd": 35,
        "lore": "Thor's magical hammer, made for him by the dwarves Brok and Eitri.",
        "components": [
            "maelstrom",
            "hyperstone"
        ],
        "created": true,
        "charges": false
    },
    "recipe_skadi": {
        "id": 159,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Eye of Skadi Recipe",
        "cost": 1300,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "skadi": {
        "hint": [
            "Passive: Cold Attack Attacks lower enemy movement by -20% if they are melee and -50% if they are ranged, as well as their attack speed by -10% if they are melee and -20% if they are ranged. Additionally it reduces all healing, lifesteal and regen by 40% Lasts for 3 seconds."
        ],
        "id": 160,
        "img": "/apps/dota2/images/dota_react/items/skadi.png?t=1593393829403",
        "dname": "Eye of Skadi",
        "qual": "artifact",
        "cost": 5300,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_all_stats",
                "header": "BONUS ALL STATS:",
                "value": "22"
            },
            {
                "key": "bonus_health",
                "header": "BONUS HEALTH:",
                "value": "220"
            },
            {
                "key": "bonus_mana",
                "header": "BONUS MANA:",
                "value": "220"
            },
            {
                "key": "cold_slow_melee",
                "header": "COLD SLOW MELEE:",
                "value": "-20"
            },
            {
                "key": "cold_attack_slow_melee",
                "header": "COLD ATTACK SLOW MELEE:",
                "value": "-10"
            },
            {
                "key": "cold_slow_ranged",
                "header": "COLD SLOW RANGED:",
                "value": "-50"
            },
            {
                "key": "cold_attack_slow_ranged",
                "header": "COLD ATTACK SLOW RANGED:",
                "value": "-20"
            },
            {
                "key": "cold_duration",
                "header": "COLD DURATION:",
                "value": "3.0"
            },
            {
                "key": "heal_reduction",
                "header": "HEAL REDUCTION:",
                "value": "40"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Extremely rare artifact, guarded by the azure dragons.",
        "components": [
            "ultimate_orb",
            "point_booster"
        ],
        "created": true,
        "charges": false
    },
    "recipe_sange": {
        "id": 161,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Sange Recipe",
        "cost": 600,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "sange": {
        "id": 162,
        "img": "/apps/dota2/images/dota_react/items/sange.png?t=1593393829403",
        "dname": "Sange",
        "qual": "artifact",
        "cost": 2050,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "16"
            },
            {
                "key": "status_resistance",
                "header": "STATUS RESISTANCE:",
                "value": "12"
            },
            {
                "key": "hp_regen_amp",
                "header": "HP REGEN AMP:",
                "value": "20"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Sange is an unusually accurate weapon, seeking weak points automatically.",
        "components": [
            "ogre_axe",
            "belt_of_strength"
        ],
        "created": true,
        "charges": false
    },
    "recipe_helm_of_the_dominator": {
        "id": 163,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Helm of the Dominator Recipe",
        "cost": 650,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "helm_of_the_dominator": {
        "hint": [
            "Active: Dominate Takes control of one neutral, non-ancient target unit and sets its movement speed to 380 and max health to a minimum of 1000. Also provides the unit with +25 base attack damage, +12 health regen, +4 mana regen and +4 armor. \n\nDominated units with a max health of greater than 1000 retain their original max health. Dominated unit's bounty is set to 100 gold.\n\nRange: 700"
        ],
        "id": 164,
        "img": "/apps/dota2/images/dota_react/items/helm_of_the_dominator.png?t=1593393829403",
        "dname": "Helm of the Dominator",
        "qual": "artifact",
        "cost": 2625,
        "notes": "Cannot dominate more than one unit at a time. If a new unit is dominated, the old one will die.\nCan also Dominate enemy lane creeps and summoned units.\nSelling Helm of the Dominator will cause dominated units to die.",
        "attrib": [
            {
                "key": "bonus_stats",
                "header": "BONUS STATS:",
                "value": "6"
            },
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "6"
            },
            {
                "key": "bonus_regen",
                "header": "BONUS REGEN:",
                "value": "6"
            },
            {
                "key": "health_min",
                "header": "HEALTH MIN:",
                "value": "1000"
            },
            {
                "key": "speed_base",
                "header": "SPEED BASE:",
                "value": "380"
            },
            {
                "key": "bounty_gold",
                "header": "BOUNTY GOLD:",
                "value": "100"
            },
            {
                "key": "creep_bonus_damage",
                "header": "CREEP BONUS DAMAGE:",
                "value": "25"
            },
            {
                "key": "creep_bonus_hp_regen",
                "header": "CREEP BONUS HP REGEN:",
                "value": "12"
            },
            {
                "key": "creep_bonus_mp_regen",
                "header": "CREEP BONUS MP REGEN:",
                "value": "4"
            },
            {
                "key": "creep_bonus_armor",
                "header": "CREEP BONUS ARMOR:",
                "value": "4"
            },
            {
                "key": "model_scale",
                "header": "MODEL SCALE:",
                "value": "0"
            },
            {
                "key": "count_limit",
                "header": "COUNT LIMIT:",
                "value": "1"
            },
            {
                "key": "creep_ability_level_increase",
                "header": "CREEP ABILITY LEVEL INCREASE:",
                "value": "0"
            }
        ],
        "mc": false,
        "cd": 45,
        "lore": "The powerful headpiece of a dead necromancer.",
        "components": [
            "helm_of_iron_will",
            "diadem"
        ],
        "created": true,
        "charges": false
    },
    "recipe_helm_of_the_overlord": {
        "id": 633,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Helm of the Overlord Recipe",
        "cost": 775,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "helm_of_the_overlord": {
        "hint": [
            "Active: Dominate Takes control of one neutral target unit and sets its movement speed to 380 and max health to a minimum of 1800. Also provides the unit with +70 base attack damage, +12 health regen, +4 mana regen, +7 armor, and levels up some abilities of the target by 1 level. \n\nDominated units with a max health of greater than 1800 retain their original max health. Dominated unit's bounty is set to 250 gold.\n\nRange: 700"
        ],
        "id": 635,
        "img": "/apps/dota2/images/dota_react/items/helm_of_the_overlord.png?t=1593393829403",
        "dname": "Helm of the Overlord",
        "qual": "artifact",
        "cost": 6200,
        "notes": "Can also Dominate enemy lane creeps and summoned units.\nSelling will cause dominated units to die.",
        "attrib": [
            {
                "key": "bonus_stats",
                "header": "BONUS STATS:",
                "value": "21"
            },
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "7"
            },
            {
                "key": "bonus_regen",
                "header": "BONUS REGEN:",
                "value": "7"
            },
            {
                "key": "health_min",
                "header": "HEALTH MIN:",
                "value": "1800"
            },
            {
                "key": "speed_base",
                "header": "SPEED BASE:",
                "value": "380"
            },
            {
                "key": "bounty_gold",
                "header": "BOUNTY GOLD:",
                "value": "250"
            },
            {
                "key": "creep_bonus_damage",
                "header": "CREEP BONUS DAMAGE:",
                "value": "70"
            },
            {
                "key": "creep_bonus_hp_regen",
                "header": "CREEP BONUS HP REGEN:",
                "value": "12"
            },
            {
                "key": "creep_bonus_mp_regen",
                "header": "CREEP BONUS MP REGEN:",
                "value": "4"
            },
            {
                "key": "creep_bonus_armor",
                "header": "CREEP BONUS ARMOR:",
                "value": "7"
            },
            {
                "key": "model_scale",
                "header": "MODEL SCALE:",
                "value": "20"
            },
            {
                "key": "count_limit",
                "header": "COUNT LIMIT:",
                "value": "1"
            },
            {
                "key": "creep_ability_level_increase",
                "header": "CREEP ABILITY LEVEL INCREASE:",
                "value": "1"
            }
        ],
        "mc": false,
        "cd": 45,
        "lore": "The powerful headpiece of a dead necromancer.",
        "components": [
            "helm_of_the_dominator",
            "ultimate_orb"
        ],
        "created": true,
        "charges": false
    },
    "maelstrom": {
        "hint": [
            "Passive: Chain Lightning Grants a 30% chance on attack to release a bolt of electricity that leaps between 4 targets within a 650 radius, dealing 120 magical damage to each. Lightning proc pierces evasion. Deals 150% damage to illusions."
        ],
        "id": 166,
        "img": "/apps/dota2/images/dota_react/items/maelstrom.png?t=1593393829403",
        "dname": "Maelstrom",
        "qual": "artifact",
        "cost": 2950,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "25"
            },
            {
                "key": "bonus_attack_speed",
                "header": "BONUS ATTACK SPEED:",
                "value": "25"
            },
            {
                "key": "chain_chance",
                "header": "CHAIN CHANCE:",
                "value": "30"
            },
            {
                "key": "chain_damage",
                "header": "CHAIN DAMAGE:",
                "value": "120"
            },
            {
                "key": "chain_strikes",
                "header": "CHAIN STRIKES:",
                "value": "4"
            },
            {
                "key": "chain_radius",
                "header": "CHAIN RADIUS:",
                "value": "650"
            },
            {
                "key": "chain_delay",
                "header": "CHAIN DELAY:",
                "value": "0.25"
            },
            {
                "key": "chain_cooldown",
                "header": "CHAIN COOLDOWN:",
                "value": "0.2"
            },
            {
                "key": "illusion_multiplier_pct",
                "header": "ILLUSION MULTIPLIER PCT:",
                "value": "150"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A hammer forged for the gods themselves, Maelstrom allows its user to harness the power of lightning.",
        "components": [
            "mithril_hammer",
            "javelin",
            "gloves"
        ],
        "created": true,
        "charges": false
    },
    "recipe_gungir": {
        "id": 1565,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Gleipnir Recipe",
        "cost": 450,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "gungir": {
        "hint": [
            "Active: Eternal Chains Roots all enemies in a target 375 radius for 2 seconds and deals 180 damage.\n\nRange: 1100 ",
            "Passive: Chain Lightning Grants a 30% chance on attack to release a bolt of electricity that leaps between 4 targets within a 650 radius, dealing 160 magical damage to each. Lightning proc pierces evasion. Deals 150% damage to illusions."
        ],
        "id": 1466,
        "img": "/apps/dota2/images/dota_react/items/gungir.png?t=1593393829403",
        "dname": "Gleipnir",
        "qual": "artifact",
        "cost": 5650,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "30"
            },
            {
                "key": "bonus_attack_speed",
                "header": "BONUS ATTACK SPEED:",
                "value": "30"
            },
            {
                "key": "chain_chance",
                "header": "CHAIN CHANCE:",
                "value": "30"
            },
            {
                "key": "chain_damage",
                "header": "CHAIN DAMAGE:",
                "value": "160"
            },
            {
                "key": "chain_strikes",
                "header": "CHAIN STRIKES:",
                "value": "4"
            },
            {
                "key": "chain_radius",
                "header": "CHAIN RADIUS:",
                "value": "650"
            },
            {
                "key": "chain_delay",
                "header": "CHAIN DELAY:",
                "value": "0.25"
            },
            {
                "key": "chain_cooldown",
                "header": "CHAIN COOLDOWN:",
                "value": "0.2"
            },
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "24"
            },
            {
                "key": "bonus_hp",
                "header": "BONUS HP:",
                "value": "350"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "2.0"
            },
            {
                "key": "radius",
                "header": "RADIUS:",
                "value": "375"
            },
            {
                "key": "active_damage",
                "header": "ACTIVE DAMAGE:",
                "value": "180"
            },
            {
                "key": "illusion_multiplier_pct",
                "header": "ILLUSION MULTIPLIER PCT:",
                "value": "150"
            }
        ],
        "mc": 200,
        "cd": 18,
        "lore": "Bindings forged by impossible means to leash an ancient evil.",
        "components": [
            "maelstrom",
            "rod_of_atos"
        ],
        "created": true,
        "charges": false
    },
    "desolator": {
        "hint": [
            "Passive: Corruption Your attacks reduce the target's armor by -6 for 7 seconds.",
            "Passive: Soul Stealer  Desolator gains +2 damage every time an enemy hero dies while affected by Corruption, to a maximum of 30."
        ],
        "id": 168,
        "img": "/apps/dota2/images/dota_react/items/desolator.png?t=1593393829403",
        "dname": "Desolator",
        "qual": "artifact",
        "cost": 3500,
        "notes": "Armor reduction works on buildings.",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "50"
            },
            {
                "key": "corruption_armor",
                "header": "CORRUPTION ARMOR:",
                "value": "-6"
            },
            {
                "key": "corruption_duration",
                "header": "CORRUPTION DURATION:",
                "value": "7.0"
            },
            {
                "key": "bonus_damage_per_kill",
                "header": "BONUS DAMAGE PER KILL:",
                "value": "2"
            },
            {
                "key": "bonus_damage_per_assist",
                "header": "BONUS DAMAGE PER ASSIST:",
                "value": "1"
            },
            {
                "key": "max_damage",
                "header": "MAX DAMAGE:",
                "value": "30"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A wicked weapon, used in torturing political criminals.",
        "components": [
            "mithril_hammer",
            "mithril_hammer",
            "blight_stone"
        ],
        "created": true,
        "charges": false
    },
    "recipe_yasha": {
        "id": 169,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Yasha Recipe",
        "cost": 600,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "yasha": {
        "id": 170,
        "img": "/apps/dota2/images/dota_react/items/yasha.png?t=1593393829403",
        "dname": "Yasha",
        "qual": "artifact",
        "cost": 2050,
        "notes": "Yasha-based movement speed bonuses from multiple items do not stack.",
        "attrib": [
            {
                "key": "bonus_agility",
                "header": "BONUS AGILITY:",
                "value": "16"
            },
            {
                "key": "bonus_attack_speed",
                "header": "BONUS ATTACK SPEED:",
                "value": "15"
            },
            {
                "key": "movement_speed_percent_bonus",
                "header": "MOVEMENT SPEED PERCENT BONUS:",
                "value": "10"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Yasha is regarded as the swiftest weapon ever created.",
        "components": [
            "blade_of_alacrity",
            "boots_of_elves"
        ],
        "created": true,
        "charges": false
    },
    "mask_of_madness": {
        "hint": [
            "Active: Berserk Gives 110 attack speed and 30 movement speed, but reduces your armor by 8 and silences you. Lasts 6 seconds.",
            "Passive: Lifesteal Heals the attacker for a percentage of attack damage dealt. Lifesteal from creeps is reduced by 40%."
        ],
        "id": 172,
        "img": "/apps/dota2/images/dota_react/items/mask_of_madness.png?t=1593393829403",
        "dname": "Mask of Madness",
        "qual": "artifact",
        "cost": 1900,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "20"
            },
            {
                "key": "lifesteal_percent",
                "header": "LIFESTEAL PERCENT:",
                "value": "24"
            },
            {
                "key": "creep_lifesteal_reduction_pct",
                "header": "CREEP LIFESTEAL REDUCTION PCT:",
                "value": "40"
            },
            {
                "key": "berserk_bonus_attack_speed",
                "header": "BERSERK BONUS ATTACK SPEED:",
                "value": "110"
            },
            {
                "key": "berserk_bonus_movement_speed",
                "header": "BERSERK BONUS MOVEMENT SPEED:",
                "value": "30"
            },
            {
                "key": "berserk_armor_reduction",
                "header": "BERSERK ARMOR REDUCTION:",
                "value": "8"
            },
            {
                "key": "berserk_duration",
                "header": "BERSERK DURATION:",
                "value": "6.0"
            }
        ],
        "mc": 25,
        "cd": 16,
        "lore": "Once this mask is worn, its bearer becomes an uncontrollable aggressive force.",
        "components": [
            "lifesteal",
            "broadsword"
        ],
        "created": true,
        "charges": false
    },
    "recipe_diffusal_blade": {
        "id": 173,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Diffusal Blade Recipe",
        "cost": 1050,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "diffusal_blade": {
        "hint": [
            "Active: Inhibit Targets an enemy, slowing it for 4 seconds.\n\nRange: 600",
            "Passive: Manabreak Each attack burns 40 mana from the target, and deals 1 physical damage per burned mana. \n\nBurns 8 mana per attack from melee illusions and 8 mana per attack from ranged illusions."
        ],
        "id": 174,
        "img": "/apps/dota2/images/dota_react/items/diffusal_blade.png?t=1593393829403",
        "dname": "Diffusal Blade",
        "qual": "artifact",
        "cost": 2500,
        "notes": "Does not stack with other diffusal blades.",
        "attrib": [
            {
                "key": "bonus_agility",
                "header": "BONUS AGILITY:",
                "value": "15"
            },
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "10"
            },
            {
                "key": "feedback_mana_burn",
                "header": "FEEDBACK MANA BURN:",
                "value": "40"
            },
            {
                "key": "feedback_mana_burn_illusion_melee",
                "header": "FEEDBACK MANA BURN ILLUSION MELEE:",
                "value": "8"
            },
            {
                "key": "feedback_mana_burn_illusion_ranged",
                "header": "FEEDBACK MANA BURN ILLUSION RANGED:",
                "value": "8"
            },
            {
                "key": "purge_rate",
                "header": "PURGE RATE:",
                "value": "5"
            },
            {
                "key": "purge_root_duration",
                "header": "PURGE ROOT DURATION:",
                "value": "3.0"
            },
            {
                "key": "purge_slow_duration",
                "header": "PURGE SLOW DURATION:",
                "value": "4.0"
            },
            {
                "key": "damage_per_burn",
                "header": "DAMAGE PER BURN:",
                "value": "1"
            }
        ],
        "mc": false,
        "cd": 15,
        "lore": "An enchanted blade that allows the user to cut straight into the enemy's soul.",
        "components": [
            "blade_of_alacrity",
            "robe"
        ],
        "created": true,
        "charges": false
    },
    "recipe_disperser": {
        "id": 1096,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Disperser Recipe",
        "cost": 400,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "disperser": {
        "hint": [
            "Active: Suppress Affects all units in a 350 AoE around the target. All enemies around the target are slowed for 5 seconds.\n\n All allies around the target receive a basic dispel, increase their movement speed, and are unslowable for 5 seconds.\n\nBoth movement speed reduction and increase start at 100% and gradually decrease to 0% over the course of the buff duration.\n\nRange: 600\nDispel Type: Basic Dispel ",
            "Passive: Manabreak Each attack burns 40 mana from the target, and deals 1 physical damage per burned mana. \n\nBurns 8 mana per attack from melee illusions and 8 mana per attack from ranged illusions."
        ],
        "id": 1097,
        "img": "/apps/dota2/images/dota_react/items/disperser.png?t=1593393829403",
        "dname": "Disperser",
        "qual": "artifact",
        "cost": 5700,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_agility",
                "header": "BONUS AGILITY:",
                "value": "40"
            },
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "10"
            },
            {
                "key": "feedback_mana_burn",
                "header": "FEEDBACK MANA BURN:",
                "value": "40"
            },
            {
                "key": "feedback_mana_burn_illusion_melee",
                "header": "FEEDBACK MANA BURN ILLUSION MELEE:",
                "value": "8"
            },
            {
                "key": "feedback_mana_burn_illusion_ranged",
                "header": "FEEDBACK MANA BURN ILLUSION RANGED:",
                "value": "8"
            },
            {
                "key": "purge_rate",
                "header": "PURGE RATE:",
                "value": "5"
            },
            {
                "key": "purge_root_duration",
                "header": "PURGE ROOT DURATION:",
                "value": "3.0"
            },
            {
                "key": "damage_per_burn",
                "header": "DAMAGE PER BURN:",
                "value": "1.0"
            },
            {
                "key": "enemy_effect_duration",
                "header": "ENEMY EFFECT DURATION:",
                "value": "5.0"
            },
            {
                "key": "ally_effect_duration",
                "header": "ALLY EFFECT DURATION:",
                "value": "5.0"
            },
            {
                "key": "radius",
                "header": "RADIUS:",
                "value": "350"
            },
            {
                "key": "movement_speed_buff_rate",
                "header": "MOVEMENT SPEED BUFF RATE:",
                "value": "5"
            },
            {
                "key": "phase_movement_speed",
                "header": "PHASE MOVEMENT SPEED:",
                "value": "100"
            }
        ],
        "mc": 75,
        "cd": 15,
        "lore": "",
        "components": [
            "diffusal_blade",
            "eagle"
        ],
        "created": true,
        "charges": false
    },
    "recipe_ethereal_blade": {
        "id": 175,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Ethereal Blade Recipe",
        "cost": 1600,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "ethereal_blade": {
        "hint": [
            "Active: Ether Blast Converts the target unit to ethereal form, rendering them immune to physical damage, but unable to attack and -40% more vulnerable to magic damage.\n\n Enemy targets are also slowed by -80%, and take 1.5x your target's primary attribute + 50 as magical damage.\n\nRange: 800\nDuration: 4 seconds"
        ],
        "id": 176,
        "img": "/apps/dota2/images/dota_react/items/ethereal_blade.png?t=1593393829403",
        "dname": "Ethereal Blade",
        "qual": "epic",
        "cost": 5375,
        "notes": "Shares cooldown with Ghost Scepter.\nEthereal units take -40% bonus magic damage.\nFor Universal Heroes, their primary attribute is 60% the sum of all their attributes.\nUsing a Town Portal Scroll or Boots of Travel will not dispel Ethereal Form.",
        "attrib": [
            {
                "key": "bonus_agility",
                "header": "BONUS AGILITY:",
                "value": "8"
            },
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "8"
            },
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "8"
            },
            {
                "key": "bonus_mana",
                "header": "BONUS MANA:",
                "value": "300"
            },
            {
                "key": "bonus_cast_range",
                "header": "BONUS CAST RANGE:",
                "value": "250"
            },
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "3"
            },
            {
                "key": "blast_movement_slow",
                "header": "BLAST MOVEMENT SLOW:",
                "value": "-80"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "4.0"
            },
            {
                "key": "blast_agility_multiplier",
                "header": "BLAST AGILITY MULTIPLIER:",
                "value": "1.5"
            },
            {
                "key": "blast_damage_base",
                "header": "BLAST DAMAGE BASE:",
                "value": "50"
            },
            {
                "key": "duration_ally",
                "header": "DURATION ALLY:",
                "value": "4.0"
            },
            {
                "key": "ethereal_damage_bonus",
                "header": "ETHEREAL DAMAGE BONUS:",
                "value": "-40"
            },
            {
                "key": "projectile_speed",
                "header": "PROJECTILE SPEED:",
                "value": "1275"
            }
        ],
        "mc": 100,
        "cd": 22,
        "lore": "A flickering blade of a ghastly nature, it is capable of dealing damage in both magical and physical planes.",
        "components": [
            "aether_lens",
            "ghost"
        ],
        "created": true,
        "charges": false
    },
    "recipe_soul_ring": {
        "id": 177,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Soul Ring Recipe",
        "cost": 350,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "soul_ring": {
        "hint": [
            "Active: Sacrifice Consume %abilityhealthcost% health to temporarily gain 170 mana.  Lasts 10 seconds.\n\nIf the mana gained cannot fit in your mana pool, it creates a buffer of mana that will be used before your mana pool."
        ],
        "id": 178,
        "img": "/apps/dota2/images/dota_react/items/soul_ring.png?t=1593393829403",
        "dname": "Soul Ring",
        "qual": "common",
        "cost": 805,
        "notes": "If this mana is not used before the duration ends, the extra mana is lost.",
        "attrib": [
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "6"
            },
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "2"
            },
            {
                "key": "mana_gain",
                "header": "MANA GAIN:",
                "value": "170"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "10"
            }
        ],
        "mc": false,
        "cd": 25,
        "lore": "A ring that feeds on the souls of those who wear it.",
        "components": [
            "ring_of_protection",
            "gauntlets",
            "gauntlets"
        ],
        "created": true,
        "charges": false
    },
    "recipe_arcane_boots": {
        "id": 179,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Arcane Boots Recipe",
        "cost": 375,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "arcane_boots": {
        "hint": [
            "Active: Replenish Mana Restores 175 mana to all nearby allies.\n\nRadius: 1200",
            "Movement speed bonuses from multiple pairs of boots do not stack.",
            "Passive: Basilius Aura Grants 1 mana regeneration to allies. \n\nRadius: 1200"
        ],
        "id": 180,
        "img": "/apps/dota2/images/dota_react/items/arcane_boots.png?t=1593393829403",
        "dname": "Arcane Boots",
        "qual": "rare",
        "cost": 1300,
        "notes": "Does not work on Meepo clones.",
        "attrib": [
            {
                "key": "bonus_movement",
                "header": "BONUS MOVEMENT:",
                "value": "45"
            },
            {
                "key": "mana_regen",
                "header": "MANA REGEN:",
                "value": "0.75"
            },
            {
                "key": "aura_mana_regen",
                "header": "AURA MANA REGEN:",
                "value": "1"
            },
            {
                "key": "aura_radius",
                "header": "AURA RADIUS:",
                "value": "1200"
            },
            {
                "key": "replenish_amount",
                "header": "REPLENISH AMOUNT:",
                "value": "175"
            },
            {
                "key": "replenish_radius",
                "header": "REPLENISH RADIUS:",
                "value": "1200"
            }
        ],
        "mc": false,
        "cd": 55,
        "lore": "Magi equipped with these boots are valued in battle.",
        "components": [
            "boots",
            "ring_of_basilius"
        ],
        "created": true,
        "charges": false
    },
    "octarine_core": {
        "hint": [
            "Passive: Cooldown Reduction Reduces the cooldown time of all spells and items."
        ],
        "id": 235,
        "img": "/apps/dota2/images/dota_react/items/octarine_core.png?t=1593393829403",
        "dname": "Octarine Core",
        "qual": "rare",
        "cost": 4800,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_cooldown",
                "header": "BONUS COOLDOWN:",
                "value": "25"
            },
            {
                "key": "bonus_health",
                "header": "BONUS HEALTH:",
                "value": "625"
            },
            {
                "key": "bonus_mana",
                "header": "BONUS MANA:",
                "value": "625"
            },
            {
                "key": "bonus_health_regen",
                "header": "BONUS HEALTH REGEN:",
                "value": "0"
            },
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "6"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "At the core of spellcraft are spectrums only the very gifted can sense.",
        "components": [
            "tiara_of_selemene",
            "soul_booster"
        ],
        "created": true,
        "charges": false
    },
    "orb_of_venom": {
        "hint": [
            "Passive: Poison Attack Poisons the target, dealing 2 magical damage per second and slowing movement by -13% if the equipped hero is melee, or by -4% if they are ranged. Lasts for 2 seconds."
        ],
        "id": 181,
        "img": "/apps/dota2/images/dota_react/items/orb_of_venom.png?t=1593393829403",
        "dname": "Orb of Venom",
        "qual": "component",
        "cost": 275,
        "notes": "Does not stack with its upgrades.",
        "attrib": [
            {
                "key": "poison_damage_melee",
                "header": "POISON DAMAGE MELEE:",
                "value": "2.0"
            },
            {
                "key": "poison_damage_range",
                "header": "POISON DAMAGE RANGE:",
                "value": "2.0"
            },
            {
                "key": "poison_movement_speed_melee",
                "header": "POISON MOVEMENT SPEED MELEE:",
                "value": "-13"
            },
            {
                "key": "poison_movement_speed_range",
                "header": "POISON MOVEMENT SPEED RANGE:",
                "value": "-4"
            },
            {
                "key": "poison_duration",
                "header": "POISON DURATION:",
                "value": "2.0"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Envenoms your veapon with the venom of a venomous viper.",
        "components": null,
        "created": false,
        "charges": false
    },
    "blight_stone": {
        "hint": [
            "Passive: Lesser Corruption Your attacks reduce the target's armor by -2 for 8 seconds."
        ],
        "id": 240,
        "img": "/apps/dota2/images/dota_react/items/blight_stone.png?t=1593393829403",
        "dname": "Blight Stone",
        "qual": "component",
        "cost": 300,
        "notes": "Does not stack with its upgrades.",
        "attrib": [
            {
                "key": "corruption_armor",
                "header": "CORRUPTION ARMOR:",
                "value": "-2"
            },
            {
                "key": "corruption_duration",
                "header": "CORRUPTION DURATION:",
                "value": "8.0"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "An unnerving stone unearthed beneath the Fields of Endless Carnage.",
        "components": null,
        "created": false,
        "charges": false
    },
    "orb_of_corrosion": {
        "hint": [
            "Passive: Corrosion Dealing 5 damage per second, and slowing movement by 13% if the equipped hero is melee, or by 4% if they are ranged and reduces heals, health regeneration, lifesteal and spell lifesteal by 20% . Affects Buildings\n\nLasts for 3 seconds."
        ],
        "id": 569,
        "img": "/apps/dota2/images/dota_react/items/orb_of_corrosion.png?t=1593393829403",
        "dname": "Orb of Corrosion",
        "qual": "rare",
        "cost": 900,
        "notes": "",
        "attrib": [
            {
                "key": "armor",
                "header": "ARMOR:",
                "value": "3"
            },
            {
                "key": "slow_melee",
                "header": "SLOW MELEE:",
                "value": "13"
            },
            {
                "key": "slow_range",
                "header": "SLOW RANGE:",
                "value": "4"
            },
            {
                "key": "damage",
                "header": "DAMAGE:",
                "value": "5"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "3"
            },
            {
                "key": "attack_speed",
                "header": "ATTACK SPEED:",
                "value": "25"
            },
            {
                "key": "heal_reduction",
                "header": "HEAL REDUCTION:",
                "value": "20"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Seepage from the wounds of a warrior deity, sealed in an arcanist's orb following a campaign of vicious slaughter.",
        "components": [
            "orb_of_venom",
            "ring_of_protection",
            "gloves"
        ],
        "created": true,
        "charges": false
    },
    "recipe_falcon_blade": {
        "id": 599,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Falcon Blade Recipe",
        "cost": 250,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "falcon_blade": {
        "id": 596,
        "img": "/apps/dota2/images/dota_react/items/falcon_blade.png?t=1593393829403",
        "dname": "Falcon Blade",
        "qual": "rare",
        "cost": 1125,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_health",
                "header": "BONUS HEALTH:",
                "value": "200"
            },
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "1.8"
            },
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "14"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "An enchanted blade that long ago raised a hopeless urchin from pauper to king.",
        "components": [
            "fluffy_hat",
            "sobi_mask",
            "blades_of_attack"
        ],
        "created": true,
        "charges": false
    },
    "recipe_mage_slayer": {
        "id": 597,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Mage Slayer Recipe",
        "cost": 200,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "mage_slayer": {
        "hint": [
            "Passive: Mage Slayer Places a debuff when you attack enemies, dealing 20 damage per second and causing them to do 40% less spell damage for 6 seconds."
        ],
        "id": 598,
        "img": "/apps/dota2/images/dota_react/items/mage_slayer.png?t=1593393829403",
        "dname": "Mage Slayer",
        "qual": "rare",
        "cost": 2625,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_magical_armor",
                "header": "BONUS MAGICAL ARMOR:",
                "value": "25"
            },
            {
                "key": "bonus_attack_speed",
                "header": "BONUS ATTACK SPEED:",
                "value": "45"
            },
            {
                "key": "spell_amp_debuff",
                "header": "SPELL AMP DEBUFF:",
                "value": "40"
            },
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "2"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "6"
            },
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "10"
            },
            {
                "key": "dps",
                "header": "DPS:",
                "value": "20"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Forged by a secret order in The Third Age of Praxa'cia to fell the False King.",
        "components": [
            "cloak",
            "oblivion_staff"
        ],
        "created": true,
        "charges": false
    },
    "recipe_ancient_janggo": {
        "id": 184,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Drum of Endurance Recipe",
        "cost": 500,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "ancient_janggo": {
        "hint": [
            "Active: Endurance Consumes a charge and gives +45 attack speed and +13% movement speed to nearby allies for 6 seconds. \n\nComes with 8 charges.\n\nRadius: 1200  ",
            "Passive: Swiftness Aura Grants 20 movement speed to allies.  \n\nRadius: 1200"
        ],
        "id": 185,
        "img": "/apps/dota2/images/dota_react/items/ancient_janggo.png?t=1593393829403",
        "dname": "Drum of Endurance",
        "qual": "rare",
        "cost": 1650,
        "notes": "",
        "attrib": [
            {
                "key": "aura_movement_speed",
                "header": "AURA MOVEMENT SPEED:",
                "value": "20"
            },
            {
                "key": "bonus_str",
                "header": "BONUS STR:",
                "value": "7"
            },
            {
                "key": "bonus_int",
                "header": "BONUS INT:",
                "value": "7"
            },
            {
                "key": "bonus_attack_speed_pct",
                "header": "BONUS ATTACK SPEED PCT:",
                "value": "45"
            },
            {
                "key": "bonus_movement_speed_pct",
                "header": "BONUS MOVEMENT SPEED PCT:",
                "value": "13"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "6"
            },
            {
                "key": "radius",
                "header": "RADIUS:",
                "value": "1200"
            },
            {
                "key": "charges_tooltip",
                "header": "CHARGES TOOLTIP:",
                "value": "8"
            }
        ],
        "mc": false,
        "cd": 30,
        "lore": "A relic that enchants the bodies of those around it for swifter movement in times of crisis.",
        "components": [
            "belt_of_strength",
            "robe",
            "wind_lace"
        ],
        "created": true,
        "charges": 8
    },
    "recipe_boots_of_bearing": {
        "id": 930,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Boots of Bearing Recipe",
        "cost": 1700,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "boots_of_bearing": {
        "hint": [
            "Active: Endurance Gives +50 attack speed and +15% movement speed to nearby allies for 6 seconds. For the first 1.5 seconds allies are immune to slows.\n\n Radius: 1200  ",
            "Passive: Swiftness Aura Grants 20 movement speed to allies.  \n\nRadius: 1200"
        ],
        "id": 931,
        "img": "/apps/dota2/images/dota_react/items/boots_of_bearing.png?t=1593393829403",
        "dname": "Boots of Bearing",
        "qual": "rare",
        "cost": 4275,
        "notes": "",
        "attrib": [
            {
                "key": "aura_movement_speed",
                "header": "AURA MOVEMENT SPEED:",
                "value": "20"
            },
            {
                "key": "bonus_str",
                "header": "BONUS STR:",
                "value": "8"
            },
            {
                "key": "bonus_int",
                "header": "BONUS INT:",
                "value": "8"
            },
            {
                "key": "bonus_attack_speed_pct",
                "header": "BONUS ATTACK SPEED PCT:",
                "value": "50"
            },
            {
                "key": "bonus_movement_speed_pct",
                "header": "BONUS MOVEMENT SPEED PCT:",
                "value": "15"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "6"
            },
            {
                "key": "radius",
                "header": "RADIUS:",
                "value": "1200"
            },
            {
                "key": "bonus_movement_speed",
                "header": "BONUS MOVEMENT SPEED:",
                "value": "65"
            },
            {
                "key": "bonus_health_regen",
                "header": "BONUS HEALTH REGEN:",
                "value": "15"
            },
            {
                "key": "bonus_ms_duration",
                "header": "BONUS MS DURATION:",
                "value": "1.5"
            }
        ],
        "mc": false,
        "cd": 30,
        "lore": "Resplendent footwear fashioned for the ancient herald that first dared spread the glory of Stonehall beyond the original borders of its nascent claim.",
        "components": [
            "tranquil_boots",
            "ancient_janggo"
        ],
        "created": true,
        "charges": false
    },
    "medallion_of_courage": {
        "hint": [
            "Active: Valor If cast on an ally, grants them the -6 armor, and removing it from the caster. \n\nIf cast on an enemy, reduces -6 armor on both the enemy and the caster. \n\nRange: 1000\n\nDuration: 8"
        ],
        "id": 187,
        "img": "/apps/dota2/images/dota_react/items/medallion_of_courage.png?t=1593393829403",
        "dname": "Medallion of Courage",
        "qual": "rare",
        "cost": 1025,
        "notes": "Shares cooldown with Solar Crest.",
        "attrib": [
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "5"
            },
            {
                "key": "bonus_mana_regen_pct",
                "header": "BONUS MANA REGEN PCT:",
                "value": "1.5"
            },
            {
                "key": "armor_reduction",
                "header": "ARMOR REDUCTION:",
                "value": "-6"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "8"
            }
        ],
        "mc": false,
        "cd": 16,
        "lore": "The bearer has no fear of combat.",
        "components": [
            "chainmail",
            "sobi_mask",
            "blight_stone"
        ],
        "created": true,
        "charges": false
    },
    "recipe_solar_crest": {
        "id": 227,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Solar Crest Recipe",
        "cost": 600,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "solar_crest": {
        "hint": [
            "Active: Shine When cast on an ally, grants them 7 armor, 70 attack speed, 15% movement speed and a 400 HP Barrier. \n\nDoes not grant bonus armor, movement or attack speed if used on self. \n\nRange: 1000\n\nDuration: 8"
        ],
        "id": 229,
        "img": "/apps/dota2/images/dota_react/items/solar_crest.png?t=1593393829403",
        "dname": "Solar Crest",
        "qual": "rare",
        "cost": 2700,
        "notes": "Shares cooldown with Pavise.",
        "attrib": [
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "4"
            },
            {
                "key": "bonus_all_stats",
                "header": "BONUS ALL STATS:",
                "value": "4"
            },
            {
                "key": "self_movement_speed",
                "header": "SELF MOVEMENT SPEED:",
                "value": "25"
            },
            {
                "key": "bonus_mana",
                "header": "BONUS MANA:",
                "value": "300"
            },
            {
                "key": "bonus_health",
                "header": "BONUS HEALTH:",
                "value": "200"
            },
            {
                "key": "target_movement_speed",
                "header": "TARGET MOVEMENT SPEED:",
                "value": "15"
            },
            {
                "key": "target_attack_speed",
                "header": "TARGET ATTACK SPEED:",
                "value": "70"
            },
            {
                "key": "target_armor",
                "header": "TARGET ARMOR:",
                "value": "7"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "8"
            },
            {
                "key": "absorb_amount",
                "header": "ABSORB AMOUNT:",
                "value": "400"
            }
        ],
        "mc": 100,
        "cd": 16,
        "lore": "A talisman forged to honor the daytime sky.",
        "components": [
            "pavise",
            "crown",
            "wind_lace"
        ],
        "created": true,
        "charges": false
    },
    "recipe_pavise": {
        "id": 1127,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Pavise Recipe",
        "cost": 175,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "pavise": {
        "hint": [
            "Active: Protect When cast on an ally, grants them a physical damage barrier that absorbs 300 damage. Duration: 8s \n\nRange: 1000"
        ],
        "id": 1128,
        "img": "/apps/dota2/images/dota_react/items/pavise.png?t=1593393829403",
        "dname": "Pavise",
        "qual": "rare",
        "cost": 1400,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "2"
            },
            {
                "key": "bonus_mana",
                "header": "BONUS MANA:",
                "value": "250"
            },
            {
                "key": "bonus_health",
                "header": "BONUS HEALTH:",
                "value": "150"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "8"
            },
            {
                "key": "absorb_amount",
                "header": "ABSORB AMOUNT:",
                "value": "300"
            }
        ],
        "mc": 75,
        "cd": 16,
        "lore": "",
        "components": [
            "energy_booster",
            "ring_of_protection",
            "fluffy_hat"
        ],
        "created": true,
        "charges": false
    },
    "smoke_of_deceit": {
        "hint": [
            "Use: Disguise Turns the caster and all allied player-controlled units in a 1200 radius invisible, and grants 15% bonus movement speed for 45 seconds. \n\n While the caster is still disguised, any allies that come within 300 range of them will also get the buff applied to them. Each smoke can only be applied once to allies. \n\nAttacking or moving within 1025 range of an enemy hero or tower, will break the invisibility. \n\nDisguise grants invisibility that is immune to True Sight."
        ],
        "id": 188,
        "img": "/apps/dota2/images/dota_react/items/smoke_of_deceit.png?t=1593393829403",
        "dname": "Smoke of Deceit",
        "qual": "consumable",
        "cost": 50,
        "notes": "",
        "attrib": [
            {
                "key": "application_radius",
                "header": "APPLICATION RADIUS:",
                "value": "1200"
            },
            {
                "key": "visibility_radius",
                "header": "VISIBILITY RADIUS:",
                "value": "1025"
            },
            {
                "key": "bonus_movement_speed",
                "header": "BONUS MOVEMENT SPEED:",
                "value": "15"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "45.0"
            },
            {
                "key": "second_cast_cooldown",
                "header": "SECOND CAST COOLDOWN:",
                "value": "2.0"
            },
            {
                "key": "secondary_application_radius",
                "header": "SECONDARY APPLICATION RADIUS:",
                "value": "300"
            }
        ],
        "mc": false,
        "cd": 1,
        "lore": "The charlatan wizard Myrddin's only true contribution to the arcane arts.",
        "components": null,
        "created": false,
        "charges": 1
    },
    "tome_of_knowledge": {
        "hint": [
            "Use: Enlighten Grants you 700 experience plus 135 per tome consumed by your team after the first two.\n\n"
        ],
        "id": 257,
        "img": "/apps/dota2/images/dota_react/items/tome_of_knowledge.png?t=1593393829403",
        "dname": "Tome of Knowledge",
        "qual": "consumable",
        "cost": 75,
        "notes": "",
        "attrib": [
            {
                "key": "xp_bonus",
                "header": "XP BONUS:",
                "value": "700"
            },
            {
                "key": "xp_per_use",
                "header": "XP PER USE:",
                "value": "135"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "That which raises beast to man and man to god.",
        "components": null,
        "created": false,
        "charges": 1
    },
    "recipe_veil_of_discord": {
        "id": 189,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Veil of Discord Recipe",
        "cost": 300,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "veil_of_discord": {
        "hint": [
            "Active: Magic Weakness Cast a 900 radius blast that causes enemy heroes to take 10% increased damage from spells.\n\nDuration: 16 seconds."
        ],
        "id": 190,
        "img": "/apps/dota2/images/dota_react/items/veil_of_discord.png?t=1593393829403",
        "dname": "Veil of Discord",
        "qual": "rare",
        "cost": 1725,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_all_stats",
                "header": "BONUS ALL STATS:",
                "value": "5"
            },
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "5"
            },
            {
                "key": "bonus_hp_regen",
                "header": "BONUS HP REGEN:",
                "value": "5"
            },
            {
                "key": "spell_amp",
                "header": "SPELL AMP:",
                "value": "10"
            },
            {
                "key": "debuff_radius",
                "header": "DEBUFF RADIUS:",
                "value": "900"
            },
            {
                "key": "resist_debuff_duration",
                "header": "RESIST DEBUFF DURATION:",
                "value": "16.0"
            }
        ],
        "mc": 50,
        "cd": 16,
        "lore": "The headwear of corrupt magi.",
        "components": [
            "helm_of_iron_will",
            "crown"
        ],
        "created": true,
        "charges": false
    },
    "recipe_revenants_brooch": {
        "id": 910,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Revenant's Brooch Recipe",
        "cost": 800,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "revenants_brooch": {
        "hint": [
            "Toggle: Phantom Province When enabled, attacks cost 75 mana and deal magical damage."
        ],
        "id": 911,
        "img": "/apps/dota2/images/dota_react/items/revenants_brooch.png?t=1593393829403",
        "dname": "Revenant's Brooch",
        "qual": "rare",
        "cost": 4900,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "70"
            },
            {
                "key": "spell_lifesteal",
                "header": "SPELL LIFESTEAL:",
                "value": "20"
            },
            {
                "key": "manacost_per_hit",
                "header": "MANACOST PER HIT:",
                "value": "75"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "The cursed brooch of a fallen guardian who stalks forever between the veil of life and death.",
        "components": [
            "relic",
            "voodoo_mask"
        ],
        "created": true,
        "charges": false
    },
    "devastator": {
        "hint": [
            "Passive: Witch Blade Causes your next attack to have true strike, apply a poison for 4 seconds, slowing by 25% and dealing 1x your intelligence as damage every second.",
            "Passive: Magic Corruption  Your attacks reduce the enemy's Magic resistance by 20% for 4 seconds."
        ],
        "id": 1806,
        "img": "/apps/dota2/images/dota_react/items/devastator.png?t=1593393829403",
        "dname": "Parasma",
        "qual": "rare",
        "cost": 5575,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "45"
            },
            {
                "key": "bonus_attack_speed",
                "header": "BONUS ATTACK SPEED:",
                "value": "40"
            },
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "8"
            },
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "1.5"
            },
            {
                "key": "projectile_speed",
                "header": "PROJECTILE SPEED:",
                "value": "300"
            },
            {
                "key": "int_damage_multiplier",
                "header": "INT DAMAGE MULTIPLIER:",
                "value": "1"
            },
            {
                "key": "slow",
                "header": "SLOW:",
                "value": "25"
            },
            {
                "key": "slow_duration",
                "header": "SLOW DURATION:",
                "value": "4"
            },
            {
                "key": "active_mres_reduction",
                "header": "ACTIVE MRES REDUCTION:",
                "value": "20"
            },
            {
                "key": "passive_cooldown",
                "header": "PASSIVE COOLDOWN:",
                "value": "4"
            }
        ],
        "mc": false,
        "cd": 7,
        "lore": "Devastating.",
        "components": [
            "witch_blade",
            "mystic_staff"
        ],
        "created": true,
        "charges": false
    },
    "recipe_guardian_greaves": {
        "id": 230,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Guardian Greaves Recipe",
        "cost": 1450,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "guardian_greaves": {
        "hint": [
            "Active: Mend Restores 350 health and 200 mana to nearby allies, and removes most negative effects from the caster.\n\nRadius: 1200\nDispel Type: Basic Dispel ",
            "Passive: Guardian Aura Grants 2.5 health regeneration, 1.5 mana regeneration and 3 armor to allied units. If an allied hero's health falls below 25%, this is increased to 14.5 health regeneration, 5 mana regeneration and 8 armor. \n\nRadius: 1200 ",
            "Movement speed bonuses from multiple pairs of boots do not stack."
        ],
        "id": 231,
        "img": "/apps/dota2/images/dota_react/items/guardian_greaves.png?t=1593393829403",
        "dname": "Guardian Greaves",
        "qual": "rare",
        "cost": 4950,
        "notes": "The aura boost only applies to heroes.\nMend does not affect units that have been affected by Mend or Mekansm Restore within Guardian Greaves' cooldown.",
        "attrib": [
            {
                "key": "bonus_movement",
                "header": "BONUS MOVEMENT:",
                "value": "50"
            },
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "4"
            },
            {
                "key": "mana_regen",
                "header": "MANA REGEN:",
                "value": "1.5"
            },
            {
                "key": "aura_health_regen",
                "header": "AURA HEALTH REGEN:",
                "value": "2.5"
            },
            {
                "key": "aura_armor",
                "header": "AURA ARMOR:",
                "value": "3"
            },
            {
                "key": "aura_mana_regen",
                "header": "AURA MANA REGEN:",
                "value": "1.5"
            },
            {
                "key": "aura_radius",
                "header": "AURA RADIUS:",
                "value": "1200"
            },
            {
                "key": "aura_health_regen_bonus",
                "header": "AURA HEALTH REGEN BONUS:",
                "value": "14.5"
            },
            {
                "key": "aura_mana_regen_bonus",
                "header": "AURA MANA REGEN BONUS:",
                "value": "5"
            },
            {
                "key": "aura_armor_bonus",
                "header": "AURA ARMOR BONUS:",
                "value": "8"
            },
            {
                "key": "aura_bonus_threshold",
                "header": "AURA BONUS THRESHOLD:",
                "value": "25"
            },
            {
                "key": "replenish_health",
                "header": "REPLENISH HEALTH:",
                "value": "350"
            },
            {
                "key": "replenish_mana",
                "header": "REPLENISH MANA:",
                "value": "200"
            },
            {
                "key": "replenish_radius",
                "header": "REPLENISH RADIUS:",
                "value": "1200"
            },
            {
                "key": "max_health_pct_heal_amount",
                "header": "MAX HEALTH PCT HEAL AMOUNT:",
                "value": "0"
            }
        ],
        "mc": false,
        "cd": 40,
        "lore": "One of many holy instruments constructed to honor the Omniscience.",
        "components": [
            "mekansm",
            "arcane_boots",
            "buckler"
        ],
        "created": true,
        "charges": false
    },
    "recipe_rod_of_atos": {
        "id": 205,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Rod of Atos Recipe",
        "cost": 250,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "rod_of_atos": {
        "hint": [
            "Active: Cripple Roots the target for 2 seconds.\n\nRange: 1100"
        ],
        "id": 206,
        "img": "/apps/dota2/images/dota_react/items/rod_of_atos.png?t=1593393829403",
        "dname": "Rod of Atos",
        "qual": "rare",
        "cost": 2250,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "15"
            },
            {
                "key": "bonus_hp",
                "header": "BONUS HP:",
                "value": "300"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "2.0"
            }
        ],
        "mc": 50,
        "cd": 18,
        "lore": "Atos, the Lord of Blight, has his essence stored in this deceptively simple wand.",
        "components": [
            "staff_of_wizardry",
            "vitality_booster"
        ],
        "created": true,
        "charges": false
    },
    "recipe_iron_talon": {
        "id": 238,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?3",
        "dname": "Iron Talon Recipe",
        "cost": 125,
        "desc": "",
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false
    },
    "iron_talon": {
        "hint": [
            "Active: Chop Targets a non-player enemy unit to remove 40% of its current HP.\n\nIf cast on a tree, instantly destroys it.\n\nUnit Range: 350\nTree Range: 350"
        ],
        "id": 239,
        "img": "/apps/dota2/images/dota_react/items/iron_talon.png?t=1593393829403",
        "dname": "Iron Talon",
        "qual": "common",
        "cost": 0,
        "notes": "Has a 4 second cooldown on Trees.",
        "attrib": [
            {
                "key": "bonus_attack_speed",
                "header": "BONUS ATTACK SPEED:",
                "value": "15"
            },
            {
                "key": "quelling_range_tooltip",
                "header": "QUELLING RANGE TOOLTIP:",
                "value": "350"
            },
            {
                "key": "cast_range_ward",
                "header": "CAST RANGE WARD:",
                "value": "450"
            },
            {
                "key": "creep_damage_pct",
                "header": "CREEP DAMAGE PCT:",
                "value": "40"
            },
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "2"
            },
            {
                "key": "alternative_cooldown",
                "header": "ALTERNATIVE COOLDOWN:",
                "value": "4"
            }
        ],
        "mc": false,
        "cd": 25,
        "lore": "A simple but effective weapon devised to quell a great Hellbear uprising.",
        "components": [
            "quelling_blade",
            "ring_of_protection"
        ],
        "created": true,
        "charges": false
    },
    "recipe_abyssal_blade": {
        "id": 207,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Abyssal Blade Recipe",
        "cost": 1675,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "abyssal_blade": {
        "hint": [
            "Active: Overwhelm Stuns a target enemy unit for 1.6 seconds. \n\nPierces Spell Immunity.\n\nRange: 150",
            "Passive: Bash  Grants melee heroes a 25% chance on hit to stun the target for 1.2 seconds and deal 120 bonus physical damage.  Bash chance for ranged heroes is 10%.",
            "Passive: Damage Block  Grants a 60% chance to block 70 damage from incoming attacks on melee heroes, and 35 damage on ranged."
        ],
        "id": 208,
        "img": "/apps/dota2/images/dota_react/items/abyssal_blade.png?t=1593393829403",
        "dname": "Abyssal Blade",
        "qual": "epic",
        "cost": 6250,
        "notes": "The stun is melee range.\nDoes not stack with other bashes, and does not grant bash to Clones and Tempest Doubles.\nMultiple sources of damage block do not stack.",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "35"
            },
            {
                "key": "bonus_health",
                "header": "BONUS HEALTH:",
                "value": "250"
            },
            {
                "key": "bonus_health_regen",
                "header": "BONUS HEALTH REGEN:",
                "value": "10"
            },
            {
                "key": "block_damage_melee",
                "header": "BLOCK DAMAGE MELEE:",
                "value": "70"
            },
            {
                "key": "block_damage_ranged",
                "header": "BLOCK DAMAGE RANGED:",
                "value": "35"
            },
            {
                "key": "block_chance",
                "header": "BLOCK CHANCE:",
                "value": "60"
            },
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "10"
            },
            {
                "key": "bash_chance_melee",
                "header": "BASH CHANCE MELEE:",
                "value": "25"
            },
            {
                "key": "bash_chance_ranged",
                "header": "BASH CHANCE RANGED:",
                "value": "10"
            },
            {
                "key": "bash_duration",
                "header": "BASH DURATION:",
                "value": "1.2"
            },
            {
                "key": "bash_cooldown",
                "header": "BASH COOLDOWN:",
                "value": "2.3"
            },
            {
                "key": "bonus_chance_damage",
                "header": "BONUS CHANCE DAMAGE:",
                "value": "120"
            },
            {
                "key": "stun_duration",
                "header": "STUN DURATION:",
                "value": "1.6"
            }
        ],
        "mc": 75,
        "cd": 35,
        "lore": "The lost blade of the Commander of the Abyss, this edge cuts into an enemy's soul.",
        "components": [
            "basher",
            "vanguard"
        ],
        "created": true,
        "charges": false
    },
    "recipe_heavens_halberd": {
        "id": 209,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Heaven's Halberd Recipe",
        "cost": 200,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "heavens_halberd": {
        "hint": [
            "Active: Disarm Prevents a target from attacking for 3 seconds on melee targets, and 5 seconds on ranged targets.\n\nRange: 650"
        ],
        "id": 210,
        "img": "/apps/dota2/images/dota_react/items/heavens_halberd.png?t=1593393829403",
        "dname": "Heaven's Halberd",
        "qual": "artifact",
        "cost": 3550,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_evasion",
                "header": "BONUS EVASION:",
                "value": "20"
            },
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "20"
            },
            {
                "key": "disarm_range",
                "header": "DISARM RANGE:",
                "value": "5.0"
            },
            {
                "key": "disarm_melee",
                "header": "DISARM MELEE:",
                "value": "3.0"
            },
            {
                "key": "status_resistance",
                "header": "STATUS RESISTANCE:",
                "value": "16"
            },
            {
                "key": "hp_regen_amp",
                "header": "HP REGEN AMP:",
                "value": "20"
            }
        ],
        "mc": 100,
        "cd": 18,
        "lore": "This halberd moves with the speed of a smaller weapon, allowing the bearer to win duels that a heavy edge would not.",
        "components": [
            "sange",
            "talisman_of_evasion"
        ],
        "created": true,
        "charges": false
    },
    "ring_of_aquila": {
        "hint": [
            "Passive: Aquila Aura Grants 1 mana regeneration and 2 armor to nearby allies.\n\nRadius: 1200",
            "Toggle: Aura Deactivate to stop affecting non-hero units."
        ],
        "id": 212,
        "img": "/apps/dota2/images/dota_react/items/ring_of_aquila.png?t=1593393829403",
        "dname": "Ring of Aquila",
        "cost": null,
        "notes": "Multiple instances of Aquila Aura do not stack.",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "3"
            },
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "3"
            },
            {
                "key": "bonus_agility",
                "header": "BONUS AGILITY:",
                "value": "9"
            },
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "3"
            },
            {
                "key": "aura_radius",
                "header": "AURA RADIUS:",
                "value": "1200"
            },
            {
                "key": "aura_mana_regen",
                "header": "AURA MANA REGEN:",
                "value": "1"
            },
            {
                "key": "aura_bonus_armor",
                "header": "AURA BONUS ARMOR:",
                "value": "2"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "The ring of the fallen Warlord Aquila continues to support armies in battle.",
        "created": true,
        "charges": false
    },
    "tranquil_boots": {
        "hint": [
            "Passive: Break Whenever you attack a hero or are attacked by any unit, the bonus 14 HP regen is lost and the movement speed bonus is reduced to 40 for 13 seconds.",
            "Movement speed bonuses from multiple pairs of boots do not stack."
        ],
        "id": 214,
        "img": "/apps/dota2/images/dota_react/items/tranquil_boots.png?t=1593393829403",
        "dname": "Tranquil Boots",
        "qual": "rare",
        "cost": 925,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_movement_speed",
                "header": "BONUS MOVEMENT SPEED:",
                "value": "65"
            },
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "0"
            },
            {
                "key": "bonus_health_regen",
                "header": "BONUS HEALTH REGEN:",
                "value": "14"
            },
            {
                "key": "heal_duration",
                "header": "HEAL DURATION:",
                "value": "20.0"
            },
            {
                "key": "heal_amount",
                "header": "HEAL AMOUNT:",
                "value": "250"
            },
            {
                "key": "heal_interval",
                "header": "HEAL INTERVAL:",
                "value": "0.334"
            },
            {
                "key": "break_time",
                "header": "BREAK TIME:",
                "value": "13"
            },
            {
                "key": "break_count",
                "header": "BREAK COUNT:",
                "value": "1"
            },
            {
                "key": "break_threshold",
                "header": "BREAK THRESHOLD:",
                "value": "20"
            },
            {
                "key": "broken_movement_speed",
                "header": "BROKEN MOVEMENT SPEED:",
                "value": "40"
            }
        ],
        "mc": false,
        "cd": 13,
        "lore": "While they increase the longevity of the wearer, this boot is not particularly reliable.",
        "components": [
            "boots",
            "wind_lace",
            "ring_of_regen"
        ],
        "created": true,
        "charges": false
    },
    "shadow_amulet": {
        "hint": [
            "Active: Fade Grants invisibility to you or a target allied hero as long as the target unit remains still for up to 15s. \n\nHas a 1.25 second fade time, and breaks instantly upon moving. \n\nThere is no cooldown when using this item on yourself.\n\nRange: 600"
        ],
        "id": 215,
        "img": "/apps/dota2/images/dota_react/items/shadow_amulet.png?t=1593393829403",
        "dname": "Shadow Amulet",
        "cost": 1000,
        "notes": "",
        "attrib": [
            {
                "key": "fade_time",
                "header": "FADE TIME:",
                "value": "1.25"
            },
            {
                "key": "fade_duration",
                "header": "FADE DURATION:",
                "value": "15"
            }
        ],
        "mc": false,
        "cd": 7,
        "lore": "A small talisman that clouds the senses of one's enemies when held perfectly still.",
        "components": null,
        "created": false,
        "charges": false
    },
    "recipe_glimmer_cape": {
        "id": 253,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Glimmer Cape Recipe",
        "cost": 350,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "glimmer_cape": {
        "hint": [
            "Active: Glimmer After a 0.5 second delay, grants invisibility, 40 movement speed and a magic damage barrier that absorbs up to 300 damage to you or a target allied unit for 5 seconds. \n\nRange: 600\n\nCan be cast while channeling."
        ],
        "id": 254,
        "img": "/apps/dota2/images/dota_react/items/glimmer_cape.png?t=1593393829403",
        "dname": "Glimmer Cape",
        "qual": "rare",
        "cost": 2150,
        "notes": "",
        "attrib": [
            {
                "key": "initial_fade_delay",
                "header": "INITIAL FADE DELAY:",
                "value": "0.5"
            },
            {
                "key": "secondary_fade_delay",
                "header": "SECONDARY FADE DELAY:",
                "value": "0.5"
            },
            {
                "key": "active_movement_speed",
                "header": "ACTIVE MOVEMENT SPEED:",
                "value": "40"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "5"
            },
            {
                "key": "bonus_magical_armor",
                "header": "BONUS MAGICAL ARMOR:",
                "value": "25"
            },
            {
                "key": "barrier_block",
                "header": "BARRIER BLOCK:",
                "value": "300"
            }
        ],
        "mc": 90,
        "cd": 14,
        "lore": "The stolen cape of a master illusionist.",
        "components": [
            "shadow_amulet",
            "cloak"
        ],
        "created": true,
        "charges": false
    },
    "river_painter": {
        "hint": [
            "Pour this serum into the river to transform the water into liquid chrome for 900 seconds. Using this item on the river will permanently consume one charge from your Armory supply upon expiration of the effect. Charges do not get consumed if the effect is replaced by a stronger vial before expiration. Vials can only be used if at least one charge remains in your Armory. Charges will only be used by successfully enchanting the river, and will not be consumed if the item is sold, dropped, or destroyed during a game. You can only cast a vial on the river if there's not a stronger vial already in effect."
        ],
        "id": 1021,
        "img": "/apps/dota2/images/dota_react/items/river_painter.png?t=1593393829403",
        "dname": "River Vial: Chrome",
        "qual": "component",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "paint_duration",
                "header": "PAINT DURATION:",
                "value": "900.0"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "river_painter2": {
        "hint": [
            "Pour this serum into the river to dry up the water for 900 seconds. Using this item on the river will permanently consume one charge from your Armory supply upon expiration of the effect . Charges do not get consumed if the effect is replaced by a stronger vial before expiration. Vials can only be used if at least one charge remains in your Armory. Charges will only be used by successfully enchanting the river, and will not be consumed if the item is sold, dropped, or destroyed during a game. You can only cast a vial on the river if there's not a stronger vial already in effect."
        ],
        "id": 1022,
        "img": "/apps/dota2/images/dota_react/items/river_painter2.png?t=1593393829403",
        "dname": "River Vial: Dry",
        "qual": "component",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "paint_duration",
                "header": "PAINT DURATION:",
                "value": "900.0"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "river_painter3": {
        "hint": [
            "Pour this serum into the river to transform the water into a green slime for 900 seconds. Using this item on the river will permanently consume one charge from your Armory supply upon expiration of the effect. Charges do not get consumed if the effect is replaced by a stronger vial before expiration. Vials can only be used if at least one charge remains in your Armory. Charges will only be used by successfully enchanting the river, and will not be consumed if the item is sold, dropped, or destroyed during a game. You can only cast a vial on the river if there's not a stronger vial already in effect."
        ],
        "id": 1023,
        "img": "/apps/dota2/images/dota_react/items/river_painter3.png?t=1593393829403",
        "dname": "River Vial: Slime",
        "qual": "component",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "paint_duration",
                "header": "PAINT DURATION:",
                "value": "900.0"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "river_painter4": {
        "hint": [
            "Pour this serum into the river to make the water oily for 900 seconds. Using this item on the river will permanently consume one charge from your Armory supply upon expiration of the effect. Charges do not get consumed if the effect is replaced by a stronger vial before expiration. Vials can only be used if at least one charge remains in your Armory. Charges will only be used by successfully enchanting the river, and will not be consumed if the item is sold, dropped, or destroyed during a game. You can only cast a vial on the river if there's not a stronger vial already in effect."
        ],
        "id": 1024,
        "img": "/apps/dota2/images/dota_react/items/river_painter4.png?t=1593393829403",
        "dname": "River Vial: Oil",
        "qual": "component",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "paint_duration",
                "header": "PAINT DURATION:",
                "value": "900.0"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "river_painter5": {
        "hint": [
            "Pour this serum into the river to make the water electric for 900 seconds. Using this item on the river will permanently consume one charge from your Armory supply upon expiration of the effect. Charges do not get consumed if the effect is replaced by a stronger vial before expiration. Vials can only be used if at least one charge remains in your Armory. Charges will only be used by successfully enchanting the river, and will not be consumed if the item is sold, dropped, or destroyed during a game. You can only cast a vial on the river if there's not a stronger vial already in effect."
        ],
        "id": 1025,
        "img": "/apps/dota2/images/dota_react/items/river_painter5.png?t=1593393829403",
        "dname": "River Vial: Electrified",
        "qual": "component",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "paint_duration",
                "header": "PAINT DURATION:",
                "value": "900.0"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "river_painter6": {
        "hint": [
            "Pour this serum into the river to transform the water into a purple bubbling potion for 900 seconds. Using this item on the river will permanently consume one charge from your Armory supply upon expiration of the effect. Charges do not get consumed if the effect is replaced by a stronger vial before expiration. Vials can only be used if at least one charge remains in your Armory. Charges will only be used by successfully enchanting the river, and will not be consumed if the item is sold, dropped, or destroyed during a game. You can only cast a vial on the river if there's not a stronger vial already in effect."
        ],
        "id": 1026,
        "img": "/apps/dota2/images/dota_react/items/river_painter6.png?t=1593393829403",
        "dname": "River Vial: Potion",
        "qual": "component",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "paint_duration",
                "header": "PAINT DURATION:",
                "value": "900.0"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "river_painter7": {
        "hint": [
            "Pour this serum into the river to transform the water into blood for 900 seconds. Using this item on the river will permanently consume one charge from your Armory supply upon expiration of the effect. Charges do not get consumed if the effect is replaced by a stronger vial before expiration. Vials can only be used if at least one charge remains in your Armory. Charges will only be used by successfully enchanting the river, and will not be consumed if the item is sold, dropped, or destroyed during a game. You can only cast a vial on the river if there's not a stronger vial already in effect."
        ],
        "id": 1027,
        "img": "/apps/dota2/images/dota_react/items/river_painter7.png?t=1593393829403",
        "dname": "River Vial: Blood",
        "qual": "component",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "paint_duration",
                "header": "PAINT DURATION:",
                "value": "900.0"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "mutation_tombstone": {
        "id": 1028,
        "img": "/apps/dota2/images/dota_react/items/mutation_tombstone.png?t=1593393829403",
        "dname": "Tombstone",
        "qual": "consumable",
        "cost": 0,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": 1
    },
    "super_blink": {
        "hint": [
            "Active: Blink Teleport to a target point up to 1200 units away."
        ],
        "id": 1029,
        "img": "/apps/dota2/images/dota_react/items/super_blink.png?t=1593393829403",
        "dname": "Super Blink Dagger",
        "cost": null,
        "notes": "",
        "attrib": [
            {
                "key": "blink_range",
                "header": "BLINK RANGE:",
                "value": "1200"
            },
            {
                "key": "blink_range_clamp",
                "header": "BLINK RANGE CLAMP:",
                "value": "960"
            }
        ],
        "mc": false,
        "cd": 15,
        "lore": "The fabled dagger used by the fastest assassin ever to walk the lands.",
        "components": null,
        "created": false,
        "charges": false
    },
    "pocket_tower": {
        "id": 1030,
        "img": "/apps/dota2/images/dota_react/items/pocket_tower.png?t=1593393829403",
        "dname": "Pocket Tower",
        "cost": null,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": 15,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "pocket_roshan": {
        "id": 1032,
        "img": "/apps/dota2/images/dota_react/items/pocket_roshan.png?t=1593393829403",
        "dname": "Pocket Roshan",
        "qual": "rare",
        "cost": 1000,
        "notes": "",
        "attrib": [
            {
                "key": "summon_duration",
                "header": "SUMMON DURATION:",
                "value": "60"
            }
        ],
        "mc": false,
        "cd": 60,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "keen_optic": {
        "id": 287,
        "img": "/apps/dota2/images/dota_react/items/keen_optic.png?t=1593393829403",
        "dname": "Keen Optic",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "cast_range_bonus",
                "header": "CAST RANGE BONUS:",
                "value": "75"
            },
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "1.25"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Stolen from a tinker's shop ages ago, this handy lens has seen service to many owners.",
        "components": null,
        "created": false,
        "charges": false
    },
    "grove_bow": {
        "hint": [
            "Passive: Magic Amp Reduces magic resistance of the attacked enemy by 15%."
        ],
        "id": 288,
        "img": "/apps/dota2/images/dota_react/items/grove_bow.png?t=1593393829403",
        "dname": "Grove Bow",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "attack_range_bonus",
                "header": "ATTACK RANGE BONUS:",
                "value": "100"
            },
            {
                "key": "attack_speed_bonus",
                "header": "ATTACK SPEED BONUS:",
                "value": "20"
            },
            {
                "key": "magic_resistance_reduction",
                "header": "MAGIC RESISTANCE REDUCTION:",
                "value": "15"
            },
            {
                "key": "debuff_duration",
                "header": "DEBUFF DURATION:",
                "value": "6"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A gift from the moon goddess to one of her prized disciples many memories ago.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 2
    },
    "quickening_charm": {
        "hint": [
            "Passive: Cooldown Reduction Reduces the cooldown time of all spells and items."
        ],
        "id": 289,
        "img": "/apps/dota2/images/dota_react/items/quickening_charm.png?t=1593393829403",
        "dname": "Quickening Charm",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_cooldown",
                "header": "BONUS COOLDOWN:",
                "value": "10"
            },
            {
                "key": "bonus_health_regen",
                "header": "BONUS HEALTH REGEN:",
                "value": "10"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "An evergreen amulet of druidic origins.",
        "components": null,
        "created": false,
        "charges": false
    },
    "philosophers_stone": {
        "id": 290,
        "img": "/apps/dota2/images/dota_react/items/philosophers_stone.png?t=1593393829403",
        "dname": "Philosopher's Stone",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_gpm",
                "header": "BONUS GPM:",
                "value": "75"
            },
            {
                "key": "bonus_mana",
                "header": "BONUS MANA:",
                "value": "200"
            },
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "-30"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A weightless charm created by an enchanter with a powerful scorn for brute force.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 2
    },
    "force_boots": {
        "hint": [
            "Active: Force Dispels the user and pushes them 750 units in the direction they are facing.\n\nDispel Type: Basic Dispel ",
            "Passive: Speed Unlock Completely removes the speed limit for the wearer ",
            "Movement speed bonuses from multiple pairs of boots do not stack."
        ],
        "id": 291,
        "img": "/apps/dota2/images/dota_react/items/force_boots.png?t=1593393829403",
        "dname": "Force Boots",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_movement_speed",
                "header": "BONUS MOVEMENT SPEED:",
                "value": "115"
            },
            {
                "key": "push_length",
                "header": "PUSH LENGTH:",
                "value": "750"
            },
            {
                "key": "push_duration",
                "header": "PUSH DURATION:",
                "value": "0.5"
            },
            {
                "key": "hp_regen",
                "header": "HP REGEN:",
                "value": "30"
            }
        ],
        "mc": 75,
        "cd": 8,
        "lore": "Elusive marvels never successfully studied for proper classification in the archives.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 5
    },
    "desolator_2": {
        "hint": [
            "Passive: Greater Corruption Your attacks reduce the target's armor by -10 for 7 seconds."
        ],
        "id": 292,
        "img": "/apps/dota2/images/dota_react/items/desolator_2.png?t=1593393829403",
        "dname": "Stygian Desolator",
        "cost": 0,
        "notes": "Armor reduction works on buildings.",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "60"
            },
            {
                "key": "corruption_armor",
                "header": "CORRUPTION ARMOR:",
                "value": "-10"
            },
            {
                "key": "corruption_duration",
                "header": "CORRUPTION DURATION:",
                "value": "7.0"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "The original demonic favorite that served as basis for the beloved mortal design.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 5
    },
    "phoenix_ash": {
        "hint": [
            "Passive: Rebirth Lethal damage is prevented and instead the wearer is healed to half health and non-ultimate ability cooldowns reset. Gets consumed on trigger."
        ],
        "id": 293,
        "img": "/apps/dota2/images/dota_react/items/phoenix_ash.png?t=1593393829403",
        "dname": "Phoenix Ash",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "health_pct",
                "header": "HEALTH PCT:",
                "value": "50"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": 1
    },
    "seer_stone": {
        "hint": [
            "Active: Reveal Reveal a target 800 area of the map for 6 seconds."
        ],
        "id": 294,
        "img": "/apps/dota2/images/dota_react/items/seer_stone.png?t=1593393829403",
        "dname": "Seer Stone",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "cast_range_bonus",
                "header": "CAST RANGE BONUS:",
                "value": "350"
            },
            {
                "key": "vision_bonus",
                "header": "VISION BONUS:",
                "value": "350"
            },
            {
                "key": "mana_regen",
                "header": "MANA REGEN:",
                "value": "10"
            },
            {
                "key": "radius",
                "header": "RADIUS:",
                "value": "800"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "6"
            }
        ],
        "mc": false,
        "cd": 60,
        "lore": "The curious creation of a wizard who professed to hail from another time.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 5
    },
    "greater_mango": {
        "hint": [
            "Consume Unbelievably Good Mango Overwhelms your hero, causing you to die. However, when you respawn, you will have all talents on both sides skilled."
        ],
        "id": 295,
        "img": "/apps/dota2/images/dota_react/items/greater_mango.png?t=1593393829403",
        "dname": "Greater Mango",
        "cost": 0,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "elixer": {
        "hint": [
            "Use: Consume Restores 500 health and 250 mana to the target over 6 seconds.\n\nIf the unit is attacked by an enemy hero or Roshan, the effect is lost.\n\nRange: 250"
        ],
        "id": 302,
        "img": "/apps/dota2/images/dota_react/items/elixer.png?t=1593393829403",
        "dname": "Elixir",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "health",
                "header": "HEALTH:",
                "value": "500"
            },
            {
                "key": "mana",
                "header": "MANA:",
                "value": "250"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "6"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": 3
    },
    "vampire_fangs": {
        "id": 297,
        "img": "/apps/dota2/images/dota_react/items/vampire_fangs.png?t=1593393829403",
        "dname": "Vampire Fangs",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "attack_lifesteal",
                "header": "ATTACK LIFESTEAL:",
                "value": "15"
            },
            {
                "key": "spell_lifesteal",
                "header": "SPELL LIFESTEAL:",
                "value": "10"
            },
            {
                "key": "night_vision",
                "header": "NIGHT VISION:",
                "value": "300"
            },
            {
                "key": "creep_lifesteal_reduction_pct",
                "header": "CREEP LIFESTEAL REDUCTION PCT:",
                "value": "40"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 2
    },
    "force_field": {
        "hint": [
            "Active: Mega Shield Force Field Aura Grants 40% Damage Reflection for 5 seconds.",
            "Passive: Shield  Grants +5 armor and +20% Magic Resistance to all other allies within 1200 radius."
        ],
        "id": 829,
        "img": "/apps/dota2/images/dota_react/items/force_field.png?t=1593393829403",
        "dname": "Arcanist's Armor",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_aoe_radius",
                "header": "BONUS AOE RADIUS:",
                "value": "1200"
            },
            {
                "key": "bonus_aoe_armor",
                "header": "BONUS AOE ARMOR:",
                "value": "5"
            },
            {
                "key": "self_armor",
                "header": "SELF ARMOR:",
                "value": "5"
            },
            {
                "key": "self_mres",
                "header": "SELF MRES:",
                "value": "20"
            },
            {
                "key": "bonus_aoe_mres",
                "header": "BONUS AOE MRES:",
                "value": "20"
            },
            {
                "key": "active_reflection_pct",
                "header": "ACTIVE REFLECTION PCT:",
                "value": "40"
            }
        ],
        "mc": false,
        "cd": 20,
        "lore": "An exquisite piece commissioned by a paranoid monarch who choked on a piece of fruit long before the item saw its intended use.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 5
    },
    "black_powder_bag": {
        "hint": [
            "Passive: Hair Trigger The next time you get attacked by a hero within 400 range, explode dealing 250 damage to all enemies within a 400 radius and causing them to miss 100% of their attacks for 2 seconds."
        ],
        "id": 834,
        "img": "/apps/dota2/images/dota_react/items/black_powder_bag.png?t=1593393829403",
        "dname": "Blast Rig",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "7"
            },
            {
                "key": "radius",
                "header": "RADIUS:",
                "value": "400"
            },
            {
                "key": "damage",
                "header": "DAMAGE:",
                "value": "250"
            },
            {
                "key": "blind_duration",
                "header": "BLIND DURATION:",
                "value": "2"
            },
            {
                "key": "blind_pct",
                "header": "BLIND PCT:",
                "value": "100"
            }
        ],
        "mc": false,
        "cd": 20,
        "lore": "One of a set of custom rigs once worn by infamous road agents in the Outlands, its siblings have been lost to misfires and the various tides of time.",
        "components": null,
        "created": false,
        "charges": false
    },
    "mechanical_arm": {
        "id": 849,
        "img": "/apps/dota2/images/dota_react/items/mechanical_arm.png?t=1593393829403",
        "dname": "Mechanical Arm",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bat",
                "header": "BAT:",
                "value": "0.1"
            },
            {
                "key": "stun_chance",
                "header": "STUN CHANCE:",
                "value": "10"
            },
            {
                "key": "stun_duration",
                "header": "STUN DURATION:",
                "value": "0.1"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "craggy_coat": {
        "hint": [
            "Active: Toughen Up Grants you an extra 12 bonus armor at the cost of -30 movement speed. Lasts 8 seconds."
        ],
        "id": 298,
        "img": "/apps/dota2/images/dota_react/items/craggy_coat.png?t=1593393829403",
        "dname": "Craggy Coat",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "armor_bonus",
                "header": "ARMOR BONUS:",
                "value": "6"
            },
            {
                "key": "move_speed",
                "header": "MOVE SPEED:",
                "value": "30"
            },
            {
                "key": "active_armor",
                "header": "ACTIVE ARMOR:",
                "value": "12"
            },
            {
                "key": "active_duration",
                "header": "ACTIVE DURATION:",
                "value": "8"
            },
            {
                "key": "bonus_health",
                "header": "BONUS HEALTH:",
                "value": "150"
            }
        ],
        "mc": false,
        "cd": 12,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 3
    },
    "greater_faerie_fire": {
        "hint": [
            "Use: Imbue Instantly restores 250 health."
        ],
        "id": 299,
        "img": "/apps/dota2/images/dota_react/items/greater_faerie_fire.png?t=1593393829403",
        "dname": "Greater Faerie Fire",
        "qual": "consumable",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "20"
            },
            {
                "key": "hp_restore",
                "header": "HP RESTORE:",
                "value": "250"
            }
        ],
        "mc": false,
        "cd": 10,
        "lore": "",
        "components": null,
        "created": false,
        "charges": 3
    },
    "timeless_relic": {
        "hint": [
            "Increases all outgoing spell damage and debuff duration."
        ],
        "id": 300,
        "img": "/apps/dota2/images/dota_react/items/timeless_relic.png?t=1593393829403",
        "dname": "Timeless Relic",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "debuff_amp",
                "header": "DEBUFF AMP:",
                "value": "20"
            },
            {
                "key": "spell_amp",
                "header": "SPELL AMP:",
                "value": "15"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "An unmarred discovery from the excavated ruins of an ancient wizard's academy.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 4
    },
    "mirror_shield": {
        "hint": [
            "Passive: Echo Shield Block and reflect most targeted spells back to their caster once every 12 seconds."
        ],
        "id": 301,
        "img": "/apps/dota2/images/dota_react/items/mirror_shield.png?t=1593393829403",
        "dname": "Mirror Shield",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "reflect_chance",
                "header": "REFLECT CHANCE:",
                "value": "75"
            },
            {
                "key": "all_stats",
                "header": "ALL STATS:",
                "value": "10"
            },
            {
                "key": "block_cooldown",
                "header": "BLOCK COOLDOWN:",
                "value": "12.0"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "The shield that long ago robbed the old one of his first memories.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 5
    },
    "recipe_ironwood_tree": {
        "id": 303,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Ironwood Tree Recipe",
        "cost": 1,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "ironwood_tree": {
        "hint": [
            "Use: Plant Tree Targets the ground to plant a happy little tree that lasts for 20 seconds.\n\nRange: 800"
        ],
        "id": 304,
        "img": "/apps/dota2/images/dota_react/items/ironwood_tree.png?t=1593393829403",
        "dname": "Ironwood Tree",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_all_stats",
                "header": "BONUS ALL STATS:",
                "value": "6"
            },
            {
                "key": "tree_duration",
                "header": "TREE DURATION:",
                "value": "20"
            }
        ],
        "mc": false,
        "cd": 15,
        "lore": "Precious. And hearty as a weed.",
        "components": null,
        "created": false,
        "charges": false
    },
    "mango_tree": {
        "hint": [
            "Use: Plant a Mango Tree Targets the ground to plant a mango tree that provides unlimited mango power. The tree generates Enchanted Mangoes every 60 seconds, and provides unobstructed vision in the area \n\nRange: 200"
        ],
        "id": 328,
        "img": "/apps/dota2/images/dota_react/items/mango_tree.png?t=1593393829403",
        "dname": "Mango Tree",
        "qual": "consumable",
        "cost": null,
        "notes": "",
        "attrib": [
            {
                "key": "seconds",
                "header": "SECONDS:",
                "value": "60"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": 1
    },
    "royal_jelly": {
        "hint": [
            "Active: Consume Consumes all charges and grants a target allied unit a buff that provides +2 Health Regen and +1 Mana Regen per charge for 10s. \n\nIf the unit is attacked by an enemy hero or Roshan, the effect is lost."
        ],
        "id": 305,
        "img": "/apps/dota2/images/dota_react/items/royal_jelly.png?t=1593393829403",
        "dname": "Royal Jelly",
        "qual": "consumable",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_health",
                "header": "BONUS HEALTH:",
                "value": "50"
            },
            {
                "key": "bonus_mana",
                "header": "BONUS MANA:",
                "value": "50"
            },
            {
                "key": "max_charges",
                "header": "MAX CHARGES:",
                "value": "10"
            },
            {
                "key": "use_cooldown",
                "header": "USE COOLDOWN:",
                "value": "12"
            },
            {
                "key": "health_regen",
                "header": "HEALTH REGEN:",
                "value": "2.0"
            },
            {
                "key": "mana_regen",
                "header": "MANA REGEN:",
                "value": "1.0"
            },
            {
                "key": "regen_duration",
                "header": "REGEN DURATION:",
                "value": "10"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "To those who harvest olgru jelly, success serves more than mere profit--it's often the means to survival--for only the jelly itself can cure the ravages that follow a sting from the vigilant denizens of the giant hives.",
        "components": null,
        "created": false,
        "charges": 5,
        "tier": 1
    },
    "pupils_gift": {
        "hint": [
            "Increases both non-primary attributes."
        ],
        "id": 306,
        "img": "/apps/dota2/images/dota_react/items/pupils_gift.png?t=1593393829403",
        "dname": "Pupil's Gift",
        "cost": 0,
        "notes": "Grants half value to each attribute for Universal Heroes",
        "attrib": [
            {
                "key": "secondary_stats",
                "header": "SECONDARY STATS:",
                "value": "15"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "An astounding plate of ever-replenishing, fortifying fruit.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 2
    },
    "tome_of_aghanim": {
        "hint": [
            "Use: Consume Temporarily grants an allied target the Aghanim's Scepter buff for 3 minutes."
        ],
        "id": 307,
        "img": "/apps/dota2/images/dota_react/items/tome_of_aghanim.png?t=1593393829403",
        "dname": "Tome of Aghanim",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "duration_minutes",
                "header": "DURATION MINUTES:",
                "value": "3"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": 1
    },
    "repair_kit": {
        "hint": [
            "Use: Building Repair Targets a building, restoring 40% of it's health over 30 seconds. Also grants +10 armor during this period.\n\n Range: 600"
        ],
        "id": 308,
        "img": "/apps/dota2/images/dota_react/items/repair_kit.png?t=1593393829403",
        "dname": "Repair Kit",
        "qual": "consumable",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "30"
            },
            {
                "key": "heal_percent",
                "header": "HEAL PERCENT:",
                "value": "40"
            },
            {
                "key": "armor_bonus",
                "header": "ARMOR BONUS:",
                "value": "10"
            },
            {
                "key": "hp_regen",
                "header": "HP REGEN:",
                "value": "25"
            }
        ],
        "mc": false,
        "cd": 60,
        "lore": "",
        "components": null,
        "created": false,
        "charges": 3
    },
    "mind_breaker": {
        "hint": [
            "Passive: Silence Strike The next attack silences the hit enemy for 2 seconds."
        ],
        "id": 309,
        "img": "/apps/dota2/images/dota_react/items/mind_breaker.png?t=1593393829403",
        "dname": "Mind Breaker",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "magic_damage",
                "header": "MAGIC DAMAGE:",
                "value": "45"
            },
            {
                "key": "attack_speed",
                "header": "ATTACK SPEED:",
                "value": "30"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "2.0"
            }
        ],
        "mc": false,
        "cd": 12,
        "lore": "A bewitching blade of indeterminate form capable of piercing the psyche of even the most willful foe.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 4
    },
    "third_eye": {
        "hint": [
            "Passive: True Sight Grants the ability to see invisible units and wards to any allied vision within 500 range of its carrier. ",
            "Passive: Charge Loss Loses a charge on death. After all charges are lost, the item disappears. "
        ],
        "id": 310,
        "img": "/apps/dota2/images/dota_react/items/third_eye.png?t=1593393829403",
        "dname": "Third Eye",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "truesight_radius",
                "header": "TRUESIGHT RADIUS:",
                "value": "500"
            },
            {
                "key": "bonus_vision",
                "header": "BONUS VISION:",
                "value": "300"
            },
            {
                "key": "bonus_all_stats",
                "header": "BONUS ALL STATS:",
                "value": "7"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": 3
    },
    "spell_prism": {
        "hint": [
            "Passive: Cooldown Reduction Reduces the cooldown time of all spells and items."
        ],
        "id": 311,
        "img": "/apps/dota2/images/dota_react/items/spell_prism.png?t=1593393829403",
        "dname": "Spell Prism",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_cooldown",
                "header": "BONUS COOLDOWN:",
                "value": "12"
            },
            {
                "key": "bonus_all_stats",
                "header": "BONUS ALL STATS:",
                "value": "5"
            },
            {
                "key": "mana_regen",
                "header": "MANA REGEN:",
                "value": "2"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Even the slightest flaw in the components of a spell prism can result in the death of its user.",
        "components": null,
        "created": false,
        "charges": false
    },
    "princes_knife": {
        "hint": [
            "Passive: Hex Strike The next attack hexes the hit enemy into a frog for 1.5 seconds."
        ],
        "id": 325,
        "img": "/apps/dota2/images/dota_react/items/princes_knife.png?t=1593393829403",
        "dname": "Prince's Knife",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "1.5"
            },
            {
                "key": "movespeed",
                "header": "MOVESPEED:",
                "value": "140"
            },
            {
                "key": "projectile_bonus",
                "header": "PROJECTILE BONUS:",
                "value": "60"
            }
        ],
        "mc": false,
        "cd": 10,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "witless_shako": {
        "hint": [
            "Increases the wearer's max health, while reducing their max mana."
        ],
        "id": 330,
        "img": "/apps/dota2/images/dota_react/items/witless_shako.png?t=1593393829403",
        "dname": "Witless Shako",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "max_health",
                "header": "MAX HEALTH:",
                "value": "1350"
            },
            {
                "key": "max_mana",
                "header": "MAX MANA:",
                "value": "400"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "imp_claw": {
        "hint": [
            "Passive: Critical Strike Empowers your next attack, causing it to be a critical strike dealing 130% damage."
        ],
        "id": 334,
        "img": "/apps/dota2/images/dota_react/items/imp_claw.png?t=1593393829403",
        "dname": "Imp Claw",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "crit_multiplier",
                "header": "CRIT MULTIPLIER:",
                "value": "130"
            },
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "26"
            }
        ],
        "mc": false,
        "cd": 7,
        "lore": "Though their tasks are largely thankless, demon hunters can often turn a profit bartering parts in Weeping Rose.",
        "components": null,
        "created": false,
        "charges": false
    },
    "flicker": {
        "hint": [
            "Active: Flicker Dispells debuffs and blinks you in a random forward direction for a random distance between 200 and 600. If cast within 3 seconds of receiving player damage, it will blink in place.\n\nDispel Type: Basic Dispel "
        ],
        "id": 335,
        "img": "/apps/dota2/images/dota_react/items/flicker.png?t=1593393829403",
        "dname": "Flicker",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "max_range",
                "header": "MAX RANGE:",
                "value": "600"
            },
            {
                "key": "min_range",
                "header": "MIN RANGE:",
                "value": "200"
            },
            {
                "key": "bonus_movement_speed",
                "header": "BONUS MOVEMENT SPEED:",
                "value": "35"
            }
        ],
        "mc": false,
        "cd": 5,
        "lore": "The technically-true-to-his-word 'teleportation device' crafted by a notorious fae trickster.",
        "components": null,
        "created": false,
        "charges": false
    },
    "spy_gadget": {
        "hint": [
            "Passive: Prescient Aura Lowers Scan cooldown by 50% . Increases attack range (Ranged only) and cast range of allies in a 1200 unit radius."
        ],
        "id": 336,
        "img": "/apps/dota2/images/dota_react/items/spy_gadget.png?t=1593393829403",
        "dname": "Telescope",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "scan_cooldown_reduction",
                "header": "SCAN COOLDOWN REDUCTION:",
                "value": "50"
            },
            {
                "key": "attack_range",
                "header": "ATTACK RANGE:",
                "value": "125"
            },
            {
                "key": "cast_range",
                "header": "CAST RANGE:",
                "value": "125"
            },
            {
                "key": "aura_range",
                "header": "AURA RANGE:",
                "value": "1200"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A handy tool that manages to make close what once was far.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 4
    },
    "spider_legs": {
        "hint": [
            "Active: Skitter Grants you 18% bonus movement speed and free pathing for 3.5 seconds. Walking over trees causes them to be destroyed."
        ],
        "id": 326,
        "img": "/apps/dota2/images/dota_react/items/spider_legs.png?t=1593393829403",
        "dname": "Spider Legs",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_movement_speed",
                "header": "BONUS MOVEMENT SPEED:",
                "value": "25"
            },
            {
                "key": "turn_rate",
                "header": "TURN RATE:",
                "value": "50"
            },
            {
                "key": "bonus_movement_speed_active",
                "header": "BONUS MOVEMENT SPEED ACTIVE:",
                "value": "18"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "3.5"
            }
        ],
        "mc": false,
        "cd": 12,
        "lore": "A horrifying yet useful mixture of necromancy and artificing.",
        "components": null,
        "created": false,
        "charges": false
    },
    "helm_of_the_undying": {
        "hint": [
            "Passive: Death Delay Survive for an extra 5 seconds after receiving a killing blow."
        ],
        "id": 327,
        "img": "/apps/dota2/images/dota_react/items/helm_of_the_undying.png?t=1593393829403",
        "dname": "Helm of the Undying",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "6"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "5"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "vambrace": {
        "hint": [
            "Also provides one of the following, based on the Vambrace's main attribute:",
            " Strength: +8% Magic Resistance ",
            " Agility:  +10 Attack Speed ",
            " Intelligence:  +6% Spell Amp"
        ],
        "id": 331,
        "img": "/apps/dota2/images/dota_react/items/vambrace.png?t=1593393829403",
        "dname": "Vambrace",
        "qual": "common",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_primary_stat",
                "header": "BONUS PRIMARY STAT:",
                "value": "8"
            },
            {
                "key": "bonus_secondary_stat",
                "header": "BONUS SECONDARY STAT:",
                "value": "2"
            },
            {
                "key": "bonus_spell_amp",
                "header": "BONUS SPELL AMP:",
                "value": "6"
            },
            {
                "key": "bonus_magic_resistance",
                "header": "BONUS MAGIC RESISTANCE:",
                "value": "8"
            },
            {
                "key": "bonus_attack_speed",
                "header": "BONUS ATTACK SPEED:",
                "value": "10"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "The coveted treasure that divided the heirs of Queen Raiya upon her death, resulting in the eventual downfall of her kingdom.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 2
    },
    "horizon": {
        "hint": [
            "Active: Blink Strike Targets a unit to teleport to them. Knocks enemies back 250 distance and disables them for 1 second. \n\nRange: 1600"
        ],
        "id": 312,
        "img": "/apps/dota2/images/dota_react/items/horizon.png?t=1593393829403",
        "dname": "Horizon",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "knockback_distance",
                "header": "KNOCKBACK DISTANCE:",
                "value": "250"
            },
            {
                "key": "knockback_duration",
                "header": "KNOCKBACK DURATION:",
                "value": "1"
            }
        ],
        "mc": false,
        "cd": 10,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "fusion_rune": {
        "hint": [
            "Use: Consume Grants the target the bonuses of every Power Rune for 50 seconds. Each use consumes a charge."
        ],
        "id": 313,
        "img": "/apps/dota2/images/dota_react/items/fusion_rune.png?t=1593393829403",
        "dname": "Fusion Rune",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "50"
            }
        ],
        "mc": false,
        "cd": 120,
        "lore": "",
        "components": null,
        "created": false,
        "charges": 3
    },
    "ocean_heart": {
        "hint": [
            "Passive: Water Regen Provides you with 10 HP regen and 5 mana regen while in the river."
        ],
        "id": 354,
        "img": "/apps/dota2/images/dota_react/items/ocean_heart.png?t=1593393829403",
        "dname": "Ocean Heart",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "all_stats",
                "header": "ALL STATS:",
                "value": "5"
            },
            {
                "key": "water_hp_regen",
                "header": "WATER HP REGEN:",
                "value": "10"
            },
            {
                "key": "water_mp_regen",
                "header": "WATER MP REGEN:",
                "value": "5"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A charm blessed by the Council of the Brine.",
        "components": null,
        "created": false,
        "charges": false
    },
    "spark_of_courage": {
        "hint": [
            "Passive: Courage Provides 16 damage when the hero is above 50% Health, and 7 armor when they are below that threshold."
        ],
        "id": 1124,
        "img": "/apps/dota2/images/dota_react/items/spark_of_courage.png?t=1593393829403",
        "dname": "Spark of Courage",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "damage",
                "header": "DAMAGE:",
                "value": "16"
            },
            {
                "key": "armor",
                "header": "ARMOR:",
                "value": "7"
            },
            {
                "key": "health_pct",
                "header": "HEALTH PCT:",
                "value": "50"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 1
    },
    "broom_handle": {
        "id": 355,
        "img": "/apps/dota2/images/dota_react/items/broom_handle.png?t=1593393829403",
        "dname": "Broom Handle",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "melee_attack_range",
                "header": "MELEE ATTACK RANGE:",
                "value": "50"
            },
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "8"
            },
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "4"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "The surprisingly dangerous creation of an apprentice sorcerer with a strange fondness for brooms.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 1
    },
    "trusty_shovel": {
        "hint": [
            "Active: Dig Channel for 1 second. \nCan find a Bounty Rune, a Flask, an Enchanted Mango, or a Kobold."
        ],
        "id": 356,
        "img": "/apps/dota2/images/dota_react/items/trusty_shovel.png?t=1593393829403",
        "dname": "Trusty Shovel",
        "cost": 0,
        "notes": "16% chance for a Bounty Rune.\n28% chance each for a Flask, an Enchanted Mango, or a kobold.\nThe same Trusty Shovel cannot find the same reward twice in a row.",
        "attrib": [
            {
                "key": "bonus_health",
                "header": "BONUS HEALTH:",
                "value": "75"
            },
            {
                "key": "chance_bounty_rune",
                "header": "CHANCE BOUNTY RUNE:",
                "value": "16"
            },
            {
                "key": "chance_other_item",
                "header": "CHANCE OTHER ITEM:",
                "value": "28"
            },
            {
                "key": "kobold_duration",
                "header": "KOBOLD DURATION:",
                "value": "60"
            }
        ],
        "mc": false,
        "cd": 40,
        "lore": "Former plaything of a young deity, received as a gift from his uncle.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 1
    },
    "nether_shawl": {
        "id": 357,
        "img": "/apps/dota2/images/dota_react/items/nether_shawl.png?t=1593393829403",
        "dname": "Nether Shawl",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_magic_resistance",
                "header": "BONUS MAGIC RESISTANCE:",
                "value": "20"
            },
            {
                "key": "bonus_spell_amp",
                "header": "BONUS SPELL AMP:",
                "value": "6"
            },
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "2"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "An otherworldly garment tethered to our plane by unknown means.",
        "components": null,
        "created": false,
        "charges": false
    },
    "dragon_scale": {
        "hint": [
            "Passive: Afterburn Causes attacks to burn the enemy, dealing 22 damage per second for 3 seconds. Affects buildings."
        ],
        "id": 358,
        "img": "/apps/dota2/images/dota_react/items/dragon_scale.png?t=1593393829403",
        "dname": "Dragon Scale",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "5"
            },
            {
                "key": "bonus_hp_regen",
                "header": "BONUS HP REGEN:",
                "value": "5"
            },
            {
                "key": "damage_per_sec",
                "header": "DAMAGE PER SEC:",
                "value": "22"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "3"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "The remains of a dragon always outvalue the wealth of even the most prodigious hoard.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 2
    },
    "essence_ring": {
        "hint": [
            "Active: Life Essence Increases your current and max health by 400 for 15 seconds."
        ],
        "id": 359,
        "img": "/apps/dota2/images/dota_react/items/essence_ring.png?t=1593393829403",
        "dname": "Essence Ring",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_int",
                "header": "BONUS INT:",
                "value": "10"
            },
            {
                "key": "mp_regen",
                "header": "MP REGEN:",
                "value": "2.5"
            },
            {
                "key": "health_gain",
                "header": "HEALTH GAIN:",
                "value": "400"
            },
            {
                "key": "health_gain_duration",
                "header": "HEALTH GAIN DURATION:",
                "value": "15"
            }
        ],
        "mc": 200,
        "cd": 25,
        "lore": "An ancient bauble blessed by the breath of Verodicia.",
        "components": null,
        "created": false,
        "charges": false
    },
    "clumsy_net": {
        "hint": [
            "Active: Ensnare Ensnares the target enemy and yourself for 1.75 seconds.\n\n Range: 600"
        ],
        "id": 360,
        "img": "/apps/dota2/images/dota_react/items/clumsy_net.png?t=1593393829403",
        "dname": "Clumsy Net",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "1.75"
            },
            {
                "key": "all_stats",
                "header": "ALL STATS:",
                "value": "5"
            },
            {
                "key": "mana_regen",
                "header": "MANA REGEN:",
                "value": "2"
            }
        ],
        "mc": false,
        "cd": 25,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "enchanted_quiver": {
        "hint": [
            "Passive: Certain Strike Empowers your next attack with 250 bonus magical damage and True Strike. Ranged Attackers  have +350 bonus range for the attack."
        ],
        "id": 361,
        "img": "/apps/dota2/images/dota_react/items/enchanted_quiver.png?t=1593393829403",
        "dname": "Enchanted Quiver",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_attack_range",
                "header": "BONUS ATTACK RANGE:",
                "value": "75"
            },
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "250"
            },
            {
                "key": "active_bonus_attack_range",
                "header": "ACTIVE BONUS ATTACK RANGE:",
                "value": "350"
            }
        ],
        "mc": false,
        "cd": 4,
        "lore": "A graceful gift blessed by the goddess of the hunt.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 3
    },
    "ninja_gear": {
        "hint": [
            "Active: Solitary Disguise Casts Smoke of Deceit on yourself only."
        ],
        "id": 362,
        "img": "/apps/dota2/images/dota_react/items/ninja_gear.png?t=1593393829403",
        "dname": "Ninja Gear",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_agility",
                "header": "BONUS AGILITY:",
                "value": "20"
            },
            {
                "key": "passive_movement_bonus",
                "header": "PASSIVE MOVEMENT BONUS:",
                "value": "20"
            },
            {
                "key": "visibility_radius",
                "header": "VISIBILITY RADIUS:",
                "value": "1025"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "35.0"
            },
            {
                "key": "bonus_movement_speed",
                "header": "BONUS MOVEMENT SPEED:",
                "value": "15"
            },
            {
                "key": "secondary_application_radius",
                "header": "SECONDARY APPLICATION RADIUS:",
                "value": "0"
            }
        ],
        "mc": false,
        "cd": 60,
        "lore": "Valuable equipment recovered by a young explorer sifting through the flotsam and detritus drifting in the void.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 4
    },
    "illusionsts_cape": {
        "hint": [
            "Active: Create Illusion Creates an image under your control. ",
            "Passive: Illusion Mastery Increases outgoing damage of all units and illusions controlled by the hero by 6%."
        ],
        "id": 363,
        "img": "/apps/dota2/images/dota_react/items/illusionsts_cape.png?t=1593393829403",
        "dname": "Illusionist's Cape",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "attack_damage_aura",
                "header": "ATTACK DAMAGE AURA:",
                "value": "6"
            },
            {
                "key": "illusion_duration",
                "header": "ILLUSION DURATION:",
                "value": "30"
            },
            {
                "key": "outgoing_damage",
                "header": "OUTGOING DAMAGE:",
                "value": "-50"
            },
            {
                "key": "outgoing_damage_tooltip",
                "header": "OUTGOING DAMAGE TOOLTIP:",
                "value": "50"
            },
            {
                "key": "incoming_damage",
                "header": "INCOMING DAMAGE:",
                "value": "100"
            },
            {
                "key": "tooltip_incoming_damage_total_pct",
                "header": "TOOLTIP INCOMING DAMAGE TOTAL PCT:",
                "value": "200"
            },
            {
                "key": "bonus_agi",
                "header": "BONUS AGI:",
                "value": "14"
            },
            {
                "key": "bonus_str",
                "header": "BONUS STR:",
                "value": "14"
            }
        ],
        "mc": false,
        "cd": 30,
        "lore": "A dashing cape whose creator insists on calling 'Cloak of Apparition' as opposed to his assistant's 'Illusion' drivel.",
        "components": null,
        "created": false,
        "charges": false
    },
    "havoc_hammer": {
        "hint": [
            "Active: Havoc Pulls enemies in a 400 range around you, slowing them by 50% for 3 seconds and dealing 175 + 1.5x your str as magical damage."
        ],
        "id": 364,
        "img": "/apps/dota2/images/dota_react/items/havoc_hammer.png?t=1593393829403",
        "dname": "Havoc Hammer",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "16"
            },
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "16"
            },
            {
                "key": "range",
                "header": "RANGE:",
                "value": "400"
            },
            {
                "key": "slow",
                "header": "SLOW:",
                "value": "50"
            },
            {
                "key": "slow_duration",
                "header": "SLOW DURATION:",
                "value": "3"
            },
            {
                "key": "angle",
                "header": "ANGLE:",
                "value": "360"
            },
            {
                "key": "knockback_duration",
                "header": "KNOCKBACK DURATION:",
                "value": "0.2"
            },
            {
                "key": "pull_distance",
                "header": "PULL DISTANCE:",
                "value": "100"
            },
            {
                "key": "nuke_base_dmg",
                "header": "NUKE BASE DMG:",
                "value": "175"
            },
            {
                "key": "nuke_str_dmg",
                "header": "NUKE STR DMG:",
                "value": "1.5"
            }
        ],
        "mc": false,
        "cd": 10,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 4
    },
    "panic_button": {
        "hint": [
            "Passive: Rejuvenate  When the wearer's health falls below 20%, they will receive a hard dispel and be healed for 1000 health."
        ],
        "id": 365,
        "img": "/apps/dota2/images/dota_react/items/panic_button.png?t=1593393829403",
        "dname": "Magic Lamp",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_health",
                "header": "BONUS HEALTH:",
                "value": "300"
            },
            {
                "key": "heal",
                "header": "HEAL:",
                "value": "1000"
            },
            {
                "key": "health_threshold",
                "header": "HEALTH THRESHOLD:",
                "value": "20"
            }
        ],
        "mc": false,
        "cd": 75,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 5
    },
    "apex": {
        "id": 366,
        "img": "/apps/dota2/images/dota_react/items/apex.png?t=1593393829403",
        "dname": "Apex",
        "cost": 0,
        "notes": "Grants +25 to each attribute for Universal Heroes.",
        "attrib": [
            {
                "key": "primary_stat",
                "header": "PRIMARY STAT:",
                "value": "70"
            },
            {
                "key": "primary_stat_universal",
                "header": "PRIMARY STAT UNIVERSAL:",
                "value": "25"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Three orbs of remarkable power bound within a single scepter.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 5
    },
    "ballista": {
        "hint": [
            "Passive: Knockback Knocks back enemies 50 distance and deals 50 pure damage with every attack."
        ],
        "id": 367,
        "img": "/apps/dota2/images/dota_react/items/ballista.png?t=1593393829403",
        "dname": "Ballista",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "attack_range_bonus",
                "header": "ATTACK RANGE BONUS:",
                "value": "250"
            },
            {
                "key": "knockback_distance",
                "header": "KNOCKBACK DISTANCE:",
                "value": "50"
            },
            {
                "key": "knockback_duration",
                "header": "KNOCKBACK DURATION:",
                "value": "0.2"
            },
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "50"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A simple design much improved by a master smith's loving hand.",
        "components": null,
        "created": false,
        "charges": false
    },
    "woodland_striders": {
        "hint": [
            "Active: Woodland Stride Create a path of trees behind you for 3 seconds. Trees last up to 15 seconds. ",
            "Passive: Tree Walking  Removes movement speed limit and allows free pathing through trees.",
            "Movement speed bonuses from multiple pairs of boots do not stack."
        ],
        "id": 368,
        "img": "/apps/dota2/images/dota_react/items/woodland_striders.png?t=1593393829403",
        "dname": "Woodland Striders",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_movement_speed",
                "header": "BONUS MOVEMENT SPEED:",
                "value": "140"
            },
            {
                "key": "bonus_hp_regen",
                "header": "BONUS HP REGEN:",
                "value": "60"
            },
            {
                "key": "active_duration",
                "header": "ACTIVE DURATION:",
                "value": "3"
            },
            {
                "key": "tree_duration",
                "header": "TREE DURATION:",
                "value": "15"
            }
        ],
        "mc": false,
        "cd": 20,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "recipe_trident": {
        "id": 275,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Trident Recipe",
        "cost": 1,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "demonicon": {
        "hint": [
            "Active: Greater Demonic Summoning Summon 2 sets of Level 3 Necronomicon Units that last 75 seconds. Units have 100% more health and 75% more damage."
        ],
        "id": 370,
        "img": "/apps/dota2/images/dota_react/items/demonicon.png?t=1593393829403",
        "dname": "Book of the Dead",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "25"
            },
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "25"
            },
            {
                "key": "summon_duration",
                "header": "SUMMON DURATION:",
                "value": "75"
            }
        ],
        "mc": false,
        "cd": 80,
        "lore": "A record of the final reckoning. With one page torn out.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 5
    },
    "fallen_sky": {
        "hint": [
            "Active: Fallen Sky Transform into a meteor that strikes down at the target area after 1 seconds in a 315 AoE, stunning enemies for 1.6 seconds and dealing impact damage. Continues to deal damage every 1 seconds to enemy units and buildings for 6 seconds.\n\nBuilding Impact Damage: 75 \nBuilding Over Time Damage: 60 \n\nNon-Building Impact Damage: 150 \nNon-Building Over Time Damage: 60\n\n Range: 1200"
        ],
        "id": 371,
        "img": "/apps/dota2/images/dota_react/items/fallen_sky.png?t=1593393829403",
        "dname": "Fallen Sky",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "25"
            },
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "15"
            },
            {
                "key": "bonus_health_regen",
                "header": "BONUS HEALTH REGEN:",
                "value": "15.0"
            },
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "10.0"
            },
            {
                "key": "burn_dps_buildings",
                "header": "BURN DPS BUILDINGS:",
                "value": "60"
            },
            {
                "key": "burn_dps_units",
                "header": "BURN DPS UNITS:",
                "value": "60"
            },
            {
                "key": "burn_duration",
                "header": "BURN DURATION:",
                "value": "6"
            },
            {
                "key": "stun_duration",
                "header": "STUN DURATION:",
                "value": "1.6"
            },
            {
                "key": "burn_interval",
                "header": "BURN INTERVAL:",
                "value": "1.0"
            },
            {
                "key": "land_time",
                "header": "LAND TIME:",
                "value": "1"
            },
            {
                "key": "impact_radius",
                "header": "IMPACT RADIUS:",
                "value": "315"
            },
            {
                "key": "max_duration",
                "header": "MAX DURATION:",
                "value": "2.5"
            },
            {
                "key": "impact_damage_buildings",
                "header": "IMPACT DAMAGE BUILDINGS:",
                "value": "75"
            },
            {
                "key": "impact_damage_units",
                "header": "IMPACT DAMAGE UNITS:",
                "value": "150"
            },
            {
                "key": "blink_damage_cooldown",
                "header": "BLINK DAMAGE COOLDOWN:",
                "value": "3.0"
            }
        ],
        "mc": false,
        "cd": 15,
        "lore": "One of the few surviving creations of the acolytes of the Wyrmforge.",
        "created": true,
        "charges": false
    },
    "pirate_hat": {
        "hint": [
            "Active: Dig Channel for 1 second. \nAlways finds a Bounty Rune!"
        ],
        "id": 372,
        "img": "/apps/dota2/images/dota_react/items/pirate_hat.png?t=1593393829403",
        "dname": "Pirate Hat",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_attack_speed",
                "header": "BONUS ATTACK SPEED:",
                "value": "150"
            },
            {
                "key": "bonus_ms",
                "header": "BONUS MS:",
                "value": "15"
            }
        ],
        "mc": false,
        "cd": 40,
        "lore": "A salty skulltopper cursed with endless good fortune.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 5
    },
    "dimensional_doorway": {
        "hint": [
            "Active Teleport instantly anywhere on the map."
        ],
        "id": 373,
        "img": "/apps/dota2/images/dota_react/items/dimensional_doorway.png?t=1593393829403",
        "dname": "Dimensional Doorway",
        "cost": 0,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": 90,
        "lore": "",
        "components": null,
        "created": false,
        "charges": 3
    },
    "ex_machina": {
        "hint": [
            "Active: Reset Cooldowns Reset the cooldown on all items (except Refresher Orb)."
        ],
        "id": 374,
        "img": "/apps/dota2/images/dota_react/items/ex_machina.png?t=1593393829403",
        "dname": "Ex Machina",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "20"
            }
        ],
        "mc": 350,
        "cd": 25,
        "lore": "The remains of an ancient universe, preserved within a single sphere.",
        "components": null,
        "created": false,
        "charges": false
    },
    "faded_broach": {
        "id": 375,
        "img": "/apps/dota2/images/dota_react/items/faded_broach.png?t=1593393829403",
        "dname": "Faded Broach",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_mana",
                "header": "BONUS MANA:",
                "value": "150"
            },
            {
                "key": "bonus_movement_speed",
                "header": "BONUS MOVEMENT SPEED:",
                "value": "15"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A life-saving jewel bestowed upon a young queen by a kindly vizier. ",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 1
    },
    "paladin_sword": {
        "hint": [
            "Passive: Greater Healing Amplifies the wearer's Regeneration, Healing, Lifesteal and Spell Lifesteal by 14%."
        ],
        "id": 376,
        "img": "/apps/dota2/images/dota_react/items/paladin_sword.png?t=1593393829403",
        "dname": "Paladin Sword",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "16"
            },
            {
                "key": "bonus_lifesteal",
                "header": "BONUS LIFESTEAL:",
                "value": "16"
            },
            {
                "key": "bonus_spell_lifesteal",
                "header": "BONUS SPELL LIFESTEAL:",
                "value": "8"
            },
            {
                "key": "bonus_amp",
                "header": "BONUS AMP:",
                "value": "14"
            },
            {
                "key": "creep_lifesteal_reduction_pct",
                "header": "CREEP LIFESTEAL REDUCTION PCT:",
                "value": "40"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "The sigil blade of the legendary Brother Yhols of Gausra, stripped from its scabbard on the day of his controversial excommunication.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 3
    },
    "minotaur_horn": {
        "hint": [
            "Active: Lesser Avatar Grants Spell Immunity for 2 seconds."
        ],
        "id": 377,
        "img": "/apps/dota2/images/dota_react/items/minotaur_horn.png?t=1593393829403",
        "dname": "Minotaur Horn",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "20"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "2"
            }
        ],
        "mc": false,
        "cd": 40,
        "lore": "The trophy from a mighty beast ambushed and slain in the recesses of its own home.",
        "components": null,
        "created": false,
        "charges": false
    },
    "orb_of_destruction": {
        "hint": [
            "Passive: Impeding Corruption Attacks reduce the target's armor and movement speed. Slow amount varies based on whether the wearer is melee or ranged."
        ],
        "id": 378,
        "img": "/apps/dota2/images/dota_react/items/orb_of_destruction.png?t=1593393829403",
        "dname": "Orb of Destruction",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "armor_reduction",
                "header": "ARMOR REDUCTION:",
                "value": "3"
            },
            {
                "key": "slow_melee",
                "header": "SLOW MELEE:",
                "value": "20"
            },
            {
                "key": "slow_range",
                "header": "SLOW RANGE:",
                "value": "10"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "4"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "An ingot of chaos suspended in wizard's ether, housed within an arcanist's orb.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 2
    },
    "the_leveller": {
        "id": 379,
        "img": "/apps/dota2/images/dota_react/items/the_leveller.png?t=1593393829403",
        "dname": "The Leveller",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_attack_speed",
                "header": "BONUS ATTACK SPEED:",
                "value": "40"
            },
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "5"
            },
            {
                "key": "demolish",
                "header": "DEMOLISH:",
                "value": "25"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A demonic blade that struck the final blow to crack the gates of the Sanctum of Solanas.",
        "components": null,
        "created": false,
        "charges": false
    },
    "arcane_ring": {
        "hint": [
            "Active: Replenish Mana Restores 75 mana to all nearby allies. \n\n Radius: 1200"
        ],
        "id": 349,
        "img": "/apps/dota2/images/dota_react/items/arcane_ring.png?t=1593393829403",
        "dname": "Arcane Ring",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_intelligence",
                "header": "BONUS INTELLIGENCE:",
                "value": "7"
            },
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "2"
            },
            {
                "key": "mana_restore",
                "header": "MANA RESTORE:",
                "value": "75"
            },
            {
                "key": "radius",
                "header": "RADIUS:",
                "value": "1200"
            }
        ],
        "mc": false,
        "cd": 60,
        "lore": "Once a prized heirloom of a minor lord's house.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 1
    },
    "titan_sliver": {
        "id": 381,
        "img": "/apps/dota2/images/dota_react/items/titan_sliver.png?t=1593393829403",
        "dname": "Titan Sliver",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "base_attack_damage",
                "header": "BASE ATTACK DAMAGE:",
                "value": "20"
            },
            {
                "key": "magic_resistance",
                "header": "MAGIC RESISTANCE:",
                "value": "16"
            },
            {
                "key": "status_resistance",
                "header": "STATUS RESISTANCE:",
                "value": "10"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Though many desire this brilliant shard for its obvious qualities, a school of study exists to determine the true size and purpose of its incomprehensible whole.",
        "components": null,
        "created": false,
        "charges": false
    },
    "chipped_vest": {
        "hint": [
            "Passive Everytime you are attacked, you return 30 damage to heroes and 20 damage to creeps."
        ],
        "id": 565,
        "img": "/apps/dota2/images/dota_react/items/chipped_vest.png?t=1593393829403",
        "dname": "Chipped Vest",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "hp_regen",
                "header": "HP REGEN:",
                "value": "4"
            },
            {
                "key": "damage_return_hero",
                "header": "DAMAGE RETURN HERO:",
                "value": "30"
            },
            {
                "key": "damage_return_creep",
                "header": "DAMAGE RETURN CREEP:",
                "value": "20"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "It doesn't look like much, but it's oddly comfy.",
        "components": null,
        "created": false,
        "charges": false
    },
    "wizard_glass": {
        "hint": [
            "Active Deals 125 damage to up to 2 random enemy units within 700."
        ],
        "id": 566,
        "img": "/apps/dota2/images/dota_react/items/wizard_glass.png?t=1593393829403",
        "dname": "Wizard Glass",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "debuff_amp",
                "header": "DEBUFF AMP:",
                "value": "10"
            },
            {
                "key": "cooldown_reduction",
                "header": "COOLDOWN REDUCTION:",
                "value": "8"
            },
            {
                "key": "damage",
                "header": "DAMAGE:",
                "value": "125"
            },
            {
                "key": "radius",
                "header": "RADIUS:",
                "value": "700"
            },
            {
                "key": "count",
                "header": "COUNT:",
                "value": "2"
            }
        ],
        "mc": false,
        "cd": 15,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "gloves_of_travel": {
        "hint": [
            "Reduces TP cooldown by 20 seconds and causes TP scrolls to not be consumed."
        ],
        "id": 570,
        "img": "/apps/dota2/images/dota_react/items/gloves_of_travel.png?t=1593393829403",
        "dname": "Gloves of Travel",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "attack_speed",
                "header": "ATTACK SPEED:",
                "value": "20"
            },
            {
                "key": "tp_cooldown_reduction",
                "header": "TP COOLDOWN REDUCTION:",
                "value": "20"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "elven_tunic": {
        "id": 573,
        "img": "/apps/dota2/images/dota_react/items/elven_tunic.png?t=1593393829403",
        "dname": "Elven Tunic",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "attack_speed",
                "header": "ATTACK SPEED:",
                "value": "26"
            },
            {
                "key": "evasion",
                "header": "EVASION:",
                "value": "16"
            },
            {
                "key": "movment",
                "header": "MOVMENT:",
                "value": "7"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Even simple items of elven make seem imbued with inexplicable efficacy.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 3
    },
    "cloak_of_flames": {
        "hint": [
            "Passive: Immolate Burns enemy units for 45 damage per second. Illusions deal 30 damage per second.\n\nRadius: 375"
        ],
        "id": 574,
        "img": "/apps/dota2/images/dota_react/items/cloak_of_flames.png?t=1593393829403",
        "dname": "Cloak of Flames",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "armor",
                "header": "ARMOR:",
                "value": "4"
            },
            {
                "key": "magic_resistance",
                "header": "MAGIC RESISTANCE:",
                "value": "10"
            },
            {
                "key": "damage",
                "header": "DAMAGE:",
                "value": "45"
            },
            {
                "key": "radius",
                "header": "RADIUS:",
                "value": "375"
            },
            {
                "key": "damage_illusions",
                "header": "DAMAGE ILLUSIONS:",
                "value": "30"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A very fine cloak that plays host to an overly-protective living flame.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 3
    },
    "venom_gland": {
        "id": 575,
        "img": "/apps/dota2/images/dota_react/items/venom_gland.png?t=1593393829403",
        "dname": "Venom Gland",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "primary_attribute",
                "header": "PRIMARY ATTRIBUTE:",
                "value": "10"
            },
            {
                "key": "debuff_amp",
                "header": "DEBUFF AMP:",
                "value": "12"
            },
            {
                "key": "damage",
                "header": "DAMAGE:",
                "value": "25"
            },
            {
                "key": "degen",
                "header": "DEGEN:",
                "value": "25"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "6"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "trickster_cloak": {
        "hint": [
            "Active: Cloak Causes you to become invisible for 6 seconds."
        ],
        "id": 571,
        "img": "/apps/dota2/images/dota_react/items/trickster_cloak.png?t=1593393829403",
        "dname": "Trickster Cloak",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "evasion",
                "header": "EVASION:",
                "value": "17"
            },
            {
                "key": "magic_resistance",
                "header": "MAGIC RESISTANCE:",
                "value": "17"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "6"
            }
        ],
        "mc": false,
        "cd": 25,
        "lore": "A fantastic garment immediately misplaced by its creator upon completion.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 4
    },
    "gladiator_helm": {
        "hint": [
            "Upon taking hero damage, you gains 18 damage, 5 armor, 15 for 7 seconds."
        ],
        "id": 576,
        "img": "/apps/dota2/images/dota_react/items/gladiator_helm.png?t=1593393829403",
        "dname": "Helm of the Gladiator",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "damage",
                "header": "DAMAGE:",
                "value": "18"
            },
            {
                "key": "armor",
                "header": "ARMOR:",
                "value": "5"
            },
            {
                "key": "movement_speed",
                "header": "MOVEMENT SPEED:",
                "value": "15"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "7"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "possessed_mask": {
        "hint": [
            "Passive: Lifesteal Heals the attacker for 7 HP on each attack."
        ],
        "id": 577,
        "img": "/apps/dota2/images/dota_react/items/possessed_mask.png?t=1593393829403",
        "dname": "Possessed Mask",
        "cost": 0,
        "notes": "Grants 1/3rd of the value to each attribute for Universal Heroes.",
        "attrib": [
            {
                "key": "primary_attribute",
                "header": "PRIMARY ATTRIBUTE:",
                "value": "7"
            },
            {
                "key": "lifesteal",
                "header": "LIFESTEAL:",
                "value": "7"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Even when discarded with specific purpose and great care, this frightening mask always finds its way onto the face of a new owner.",
        "components": null,
        "created": false,
        "charges": false
    },
    "ancient_perseverance": {
        "id": 578,
        "img": "/apps/dota2/images/dota_react/items/ancient_perseverance.png?t=1593393829403",
        "dname": "Ancient Perseverance",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "damage",
                "header": "DAMAGE:",
                "value": "10"
            },
            {
                "key": "hp_regen",
                "header": "HP REGEN:",
                "value": "7"
            },
            {
                "key": "mana_regen_amp",
                "header": "MANA REGEN AMP:",
                "value": "50"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "star_mace": {
        "hint": [
            "Passive: Cleave Melee heroes deal 20% of attack damage as physical damage in a cone up to 650 around the target."
        ],
        "id": 637,
        "img": "/apps/dota2/images/dota_react/items/star_mace.png?t=1593393829403",
        "dname": "Star Mace",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "movement_speed_pct",
                "header": "MOVEMENT SPEED PCT:",
                "value": "10"
            },
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "1"
            },
            {
                "key": "cleave_damage_percent",
                "header": "CLEAVE DAMAGE PERCENT:",
                "value": "20"
            },
            {
                "key": "cleave_starting_width",
                "header": "CLEAVE STARTING WIDTH:",
                "value": "150"
            },
            {
                "key": "cleave_ending_width",
                "header": "CLEAVE ENDING WIDTH:",
                "value": "360"
            },
            {
                "key": "cleave_distance",
                "header": "CLEAVE DISTANCE:",
                "value": "650"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "penta_edged_sword": {
        "hint": [
            "Passive: Maim Each attack has a 25% chance to reduce enemy hero movement speed by 20% and attack speed by 60 for 3 seconds."
        ],
        "id": 638,
        "img": "/apps/dota2/images/dota_react/items/penta_edged_sword.png?t=1593393829403",
        "dname": "Penta-Edged Sword",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "damage",
                "header": "DAMAGE:",
                "value": "45"
            },
            {
                "key": "melee_attack_range",
                "header": "MELEE ATTACK RANGE:",
                "value": "100"
            },
            {
                "key": "maim_chance",
                "header": "MAIM CHANCE:",
                "value": "25"
            },
            {
                "key": "maim_slow_movement",
                "header": "MAIM SLOW MOVEMENT:",
                "value": "20"
            },
            {
                "key": "maim_slow_attack",
                "header": "MAIM SLOW ATTACK:",
                "value": "60"
            },
            {
                "key": "maim_duration",
                "header": "MAIM DURATION:",
                "value": "3"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "The final, twisted work of a severely pious blacksmith, completed immediately before the taking of his own life. ",
        "components": null,
        "created": false,
        "charges": false
    },
    "oakheart": {
        "hint": [
            "Active: Rejuvenate Target an allied hero and restore 480 health over 12 seconds.\n\nIf the unit is attacked by an enemy hero or Roshan, the effect is lost."
        ],
        "id": 582,
        "img": "/apps/dota2/images/dota_react/items/oakheart.png?t=1593393829403",
        "dname": "Oakheart",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "strength",
                "header": "STRENGTH:",
                "value": "15"
            },
            {
                "key": "heal",
                "header": "HEAL:",
                "value": "480"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "12"
            }
        ],
        "mc": 75,
        "cd": 18,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "warhammer": {
        "hint": [
            "Active: Warhammer Deals 75 damage and reduces the target's armor by 3 for 6 seconds."
        ],
        "id": 674,
        "img": "/apps/dota2/images/dota_react/items/warhammer.png?t=1593393829403",
        "dname": "Warhammer",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "10"
            },
            {
                "key": "armor_reduction",
                "header": "ARMOR REDUCTION:",
                "value": "3"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "6"
            },
            {
                "key": "damage",
                "header": "DAMAGE:",
                "value": "75"
            }
        ],
        "mc": false,
        "cd": 20,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "bullwhip": {
        "hint": [
            "Active: Whip Grants 18% movement speed when cast on allies, and slows by 18% when cast on enemies. Lasts 4 seconds."
        ],
        "id": 680,
        "img": "/apps/dota2/images/dota_react/items/bullwhip.png?t=1593393829403",
        "dname": "Bullwhip",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_health_regen",
                "header": "BONUS HEALTH REGEN:",
                "value": "3"
            },
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "2.5"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "4"
            },
            {
                "key": "speed",
                "header": "SPEED:",
                "value": "18"
            },
            {
                "key": "bullwhip_delay_time",
                "header": "BULLWHIP DELAY TIME:",
                "value": "0.3"
            }
        ],
        "mc": false,
        "cd": 11,
        "lore": "Once the favored lash of an infamous broker of pit fighters and other live trade.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 2
    },
    "psychic_headband": {
        "hint": [
            "Active: Psychic Push Pushes the target enemy unit away from you 400 distance."
        ],
        "id": 675,
        "img": "/apps/dota2/images/dota_react/items/psychic_headband.png?t=1593393829403",
        "dname": "Psychic Headband",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "intelligence_pct",
                "header": "INTELLIGENCE PCT:",
                "value": "15"
            },
            {
                "key": "cast_range",
                "header": "CAST RANGE:",
                "value": "100"
            },
            {
                "key": "push_length",
                "header": "PUSH LENGTH:",
                "value": "400"
            },
            {
                "key": "push_duration",
                "header": "PUSH DURATION:",
                "value": "0.3"
            }
        ],
        "mc": false,
        "cd": 20,
        "lore": "A failed experiment in finer telekinetic control, still fit for other ends.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 3
    },
    "ceremonial_robe": {
        "hint": [
            "Passive: Ceremonial Aura Lowers enemy Status Resistance by 10% and Magic Resistance by 10%.\n\nRadius: 1200"
        ],
        "id": 676,
        "img": "/apps/dota2/images/dota_react/items/ceremonial_robe.png?t=1593393829403",
        "dname": "Ceremonial Robe",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_mana",
                "header": "BONUS MANA:",
                "value": "300"
            },
            {
                "key": "aura_radius",
                "header": "AURA RADIUS:",
                "value": "1200"
            },
            {
                "key": "status_resistance",
                "header": "STATUS RESISTANCE:",
                "value": "10"
            },
            {
                "key": "magic_resistance",
                "header": "MAGIC RESISTANCE:",
                "value": "10"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "One of many items lost in the looting of Zelenwyr's sacred reliquary.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 3
    },
    "quicksilver_amulet": {
        "hint": [
            "Passive: Quicksilver Grants you a bonus 5% movement speed and 20 attack speed anytime one of your abilities are on cooldown."
        ],
        "id": 686,
        "img": "/apps/dota2/images/dota_react/items/quicksilver_amulet.png?t=1593393829403",
        "dname": "Quicksilver Amulet",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "base_movement",
                "header": "BASE MOVEMENT:",
                "value": "4"
            },
            {
                "key": "base_attack",
                "header": "BASE ATTACK:",
                "value": "18"
            },
            {
                "key": "bonus_movement",
                "header": "BONUS MOVEMENT:",
                "value": "5"
            },
            {
                "key": "bonus_attack",
                "header": "BONUS ATTACK:",
                "value": "20"
            },
            {
                "key": "anim_increase",
                "header": "ANIM INCREASE:",
                "value": "40"
            },
            {
                "key": "projectile_increase",
                "header": "PROJECTILE INCREASE:",
                "value": "40"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "An enchanted talisman brimming with a mysterious substance.",
        "components": null,
        "created": false,
        "charges": false
    },
    "book_of_shadows": {
        "hint": [
            "Active: Shadows Target an enemy, ally or self. Causes the target to become untargetable from enemies to the caster, but also silenced, muted and disarmed for 4 seconds. Applies a Basic Dispel.",
            "Dispel Type: Basic Dispel "
        ],
        "id": 677,
        "img": "/apps/dota2/images/dota_react/items/book_of_shadows.png?t=1593393829403",
        "dname": "Book of Shadows",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_all_stats",
                "header": "BONUS ALL STATS:",
                "value": "13"
            },
            {
                "key": "night_vision",
                "header": "NIGHT VISION:",
                "value": "400"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "4"
            }
        ],
        "mc": false,
        "cd": 8,
        "lore": "An impossible tome filled with unreadable prose of unknowable thoughts.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 5
    },
    "giants_ring": {
        "hint": [
            "Passive: Giant's Foot Can path over any terrain and deals 100% of your strength per second to units you are standing ontop of."
        ],
        "id": 678,
        "img": "/apps/dota2/images/dota_react/items/giants_ring.png?t=1593393829403",
        "dname": "Giant's Ring",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "35"
            },
            {
                "key": "movement_speed",
                "header": "MOVEMENT SPEED:",
                "value": "50"
            },
            {
                "key": "model_scale",
                "header": "MODEL SCALE:",
                "value": "60"
            },
            {
                "key": "pct_str_damage_per_second",
                "header": "PCT STR DAMAGE PER SECOND:",
                "value": "100"
            },
            {
                "key": "damage_radius",
                "header": "DAMAGE RADIUS:",
                "value": "100"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Prized procurement of an otherwise unremarkable ruler of Elze who abdicated his position and vanished.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 5
    },
    "vengeances_shadow": {
        "hint": [
            "Passive: Vengeance's Shadow Upon death, you spawn a strong-illusion that deals 100% damage and takes 150% damage. Can cast all basic spells. Illusion casts 30 seconds."
        ],
        "id": 679,
        "img": "/apps/dota2/images/dota_react/items/vengeances_shadow.png?t=1593393829403",
        "dname": "Shadow of Vengeance",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_health",
                "header": "BONUS HEALTH:",
                "value": "500"
            },
            {
                "key": "damage_return",
                "header": "DAMAGE RETURN:",
                "value": "20"
            },
            {
                "key": "illusion_duration",
                "header": "ILLUSION DURATION:",
                "value": "30"
            },
            {
                "key": "illusion_outgoing_damage",
                "header": "ILLUSION OUTGOING DAMAGE:",
                "value": "100"
            },
            {
                "key": "illusion_incoming_damage",
                "header": "ILLUSION INCOMING DAMAGE:",
                "value": "150"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "stormcrafter": {
        "hint": [
            "Passive: Bottled Lightning Zaps 2 enemy targets within 700 range, dealing 200 damage and a 40% slow for 0.4 seconds. Strikes every 3 seconds."
        ],
        "id": 585,
        "img": "/apps/dota2/images/dota_react/items/stormcrafter.png?t=1593393829403",
        "dname": "Stormcrafter",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "range",
                "header": "RANGE:",
                "value": "700"
            },
            {
                "key": "damage",
                "header": "DAMAGE:",
                "value": "200"
            },
            {
                "key": "interval",
                "header": "INTERVAL:",
                "value": "3"
            },
            {
                "key": "slow",
                "header": "SLOW:",
                "value": "40"
            },
            {
                "key": "slow_duration",
                "header": "SLOW DURATION:",
                "value": "0.4"
            },
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "4"
            },
            {
                "key": "max_targets",
                "header": "MAX TARGETS:",
                "value": "2"
            },
            {
                "key": "passive_movement_bonus",
                "header": "PASSIVE MOVEMENT BONUS:",
                "value": "35"
            }
        ],
        "mc": false,
        "cd": 3,
        "lore": "The accidental byproduct of a spell conjured to entrap a lesser god.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 4
    },
    "overflowing_elixir": {
        "hint": [
            "Restores 500 health, and 200 mana over 4 seconds. Can capture runes."
        ],
        "id": 588,
        "img": "/apps/dota2/images/dota_react/items/overflowing_elixir.png?t=1593393829403",
        "dname": "Overflowing Elixir",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "health",
                "header": "HEALTH:",
                "value": "500"
            },
            {
                "key": "mana",
                "header": "MANA:",
                "value": "200"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "4"
            }
        ],
        "mc": false,
        "cd": 45,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "mysterious_hat": {
        "id": 589,
        "img": "/apps/dota2/images/dota_react/items/mysterious_hat.png?t=1593393829403",
        "dname": "Fairy's Trinket",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_health",
                "header": "BONUS HEALTH:",
                "value": "75"
            },
            {
                "key": "spell_amp",
                "header": "SPELL AMP:",
                "value": "5"
            },
            {
                "key": "manacost_reduction",
                "header": "MANACOST REDUCTION:",
                "value": "5"
            }
        ],
        "mc": false,
        "cd": 8,
        "lore": "A small token imbued with the fortune of the fae in recognition of an intriguing display of mortal kindness.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 1
    },
    "assassins_dagger": {
        "id": 824,
        "img": "/apps/dota2/images/dota_react/items/assassins_dagger.png?t=1593393829403",
        "dname": "Assassin's Dagger",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "debuff_duration",
                "header": "DEBUFF DURATION:",
                "value": "1"
            },
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "30"
            },
            {
                "key": "bonus_attack_speed",
                "header": "BONUS ATTACK SPEED:",
                "value": "10"
            }
        ],
        "mc": false,
        "cd": 7,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "ascetic_cap": {
        "hint": [
            "Passive: Endurance Whenever a debuff would be applied to the owner, grant 40% Status resistance and 40% Slow Resistance for 5 seconds."
        ],
        "id": 825,
        "img": "/apps/dota2/images/dota_react/items/ascetic_cap.png?t=1593393829403",
        "dname": "Ascetic's Cap",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "status_resistance",
                "header": "STATUS RESISTANCE:",
                "value": "40"
            },
            {
                "key": "slow_resistance",
                "header": "SLOW RESISTANCE:",
                "value": "40"
            },
            {
                "key": "bonus_health",
                "header": "BONUS HEALTH:",
                "value": "250"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "5"
            },
            {
                "key": "hp_regen",
                "header": "HP REGEN:",
                "value": "20"
            }
        ],
        "mc": false,
        "cd": 25,
        "lore": "An austere hat thought to be of Turstarkuri origin.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 4
    },
    "sample_picker": {
        "id": 826,
        "img": "/apps/dota2/images/dota_react/items/sample_picker.png?t=1593393829403",
        "dname": "Assassin's Contract",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "base_gold",
                "header": "BASE GOLD:",
                "value": "20"
            },
            {
                "key": "gold_per_level",
                "header": "GOLD PER LEVEL:",
                "value": "10"
            },
            {
                "key": "strength_penalty",
                "header": "STRENGTH PENALTY:",
                "value": "5"
            }
        ],
        "mc": false,
        "cd": 15,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "icarus_wings": {
        "id": 827,
        "img": "/apps/dota2/images/dota_react/items/icarus_wings.png?t=1593393829403",
        "dname": "Icarus Wings",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "5"
            },
            {
                "key": "slow",
                "header": "SLOW:",
                "value": "50"
            },
            {
                "key": "slow_duration",
                "header": "SLOW DURATION:",
                "value": "4"
            },
            {
                "key": "move_speed",
                "header": "MOVE SPEED:",
                "value": "20"
            },
            {
                "key": "bonus_move_speed",
                "header": "BONUS MOVE SPEED:",
                "value": "0"
            }
        ],
        "mc": false,
        "cd": 45,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "misericorde": {
        "hint": [
            "Passive: Dark Mercy Your attacks deal 10 more damage to enemies for each 10% HP they are missing."
        ],
        "id": 828,
        "img": "/apps/dota2/images/dota_react/items/misericorde.png?t=1593393829403",
        "dname": "Brigand's Blade",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "10"
            },
            {
                "key": "missing_hp",
                "header": "MISSING HP:",
                "value": "10"
            },
            {
                "key": "damage",
                "header": "DAMAGE:",
                "value": "10"
            },
            {
                "key": "aspd",
                "header": "ASPD:",
                "value": "10"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "An infamous assassin's blade stolen and smuggled out of White Spire after its owner's mysterious demise.",
        "components": null,
        "created": false,
        "charges": false
    },
    "light_robes": {
        "id": 836,
        "img": "/apps/dota2/images/dota_react/items/light_robes.png?t=1593393829403",
        "dname": "Light Robes",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "health_penalty",
                "header": "HEALTH PENALTY:",
                "value": "175"
            },
            {
                "key": "attack_speed",
                "header": "ATTACK SPEED:",
                "value": "35"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "heavy_blade": {
        "hint": [
            "Active: Cleanse Dispel Target Enemy or Ally.\n\nDispel Type: Basic Dispel ",
            "Passive: Subjugate Your attacks deal bonus damage equal to 4% of your target Max Mana."
        ],
        "id": 837,
        "img": "/apps/dota2/images/dota_react/items/heavy_blade.png?t=1593393829403",
        "dname": "Witchbane",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "radius",
                "header": "RADIUS:",
                "value": "300"
            },
            {
                "key": "damage",
                "header": "DAMAGE:",
                "value": "4"
            },
            {
                "key": "attack_speed",
                "header": "ATTACK SPEED:",
                "value": "20"
            }
        ],
        "mc": 75,
        "cd": 20,
        "lore": "With ready access to test subjects, untold cruelties have been dreamed up and loosed upon the world from within the walls of the Tyler Estate.",
        "components": null,
        "created": false,
        "charges": false
    },
    "unstable_wand": {
        "hint": [
            "Active: Pig, Out! Turns your hero into a critter for 4 seconds and gives them +10% Movement Speed."
        ],
        "id": 838,
        "img": "/apps/dota2/images/dota_react/items/unstable_wand.png?t=1593393829403",
        "dname": "Pig Pole",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "4"
            },
            {
                "key": "all_stats",
                "header": "ALL STATS:",
                "value": "5"
            }
        ],
        "mc": 50,
        "cd": 25,
        "lore": "A makeshift charm misplaced by a peace-loving, addlebrained enchanter.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 1
    },
    "fortitude_ring": {
        "id": 839,
        "img": "/apps/dota2/images/dota_react/items/fortitude_ring.png?t=1593393829403",
        "dname": "Ring of Fortitude",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_health",
                "header": "BONUS HEALTH:",
                "value": "250"
            },
            {
                "key": "hp_regen",
                "header": "HP REGEN:",
                "value": "8"
            },
            {
                "key": "damage_reduction",
                "header": "DAMAGE REDUCTION:",
                "value": "50"
            },
            {
                "key": "damage_reduction_duration",
                "header": "DAMAGE REDUCTION DURATION:",
                "value": "3"
            }
        ],
        "mc": 100,
        "cd": 30,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "pogo_stick": {
        "hint": [
            "Active: Vault Propels your hero forward 300 units. Tumbler's Toy gets disabled for 3 seconds if its owner receives damage from a player source."
        ],
        "id": 840,
        "img": "/apps/dota2/images/dota_react/items/pogo_stick.png?t=1593393829403",
        "dname": "Tumbler's Toy",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "leap_distance",
                "header": "LEAP DISTANCE:",
                "value": "300"
            },
            {
                "key": "leap_speed",
                "header": "LEAP SPEED:",
                "value": "1300.0"
            },
            {
                "key": "leap_acceleration",
                "header": "LEAP ACCELERATION:",
                "value": "20000.0"
            },
            {
                "key": "bonus_mana",
                "header": "BONUS MANA:",
                "value": "150"
            }
        ],
        "mc": false,
        "cd": 15,
        "lore": "An antique plaything found in the ruins of an Ozenja circus bazaar.",
        "components": null,
        "created": false,
        "charges": false
    },
    "paintball": {
        "hint": [
            "Active: Shadow Brand Throws a Mark towards an enemy within 900 range applying a debuff that deals 40 damage every second and provides vision of the unit for 7 seconds."
        ],
        "id": 835,
        "img": "/apps/dota2/images/dota_react/items/paintball.png?t=1593393829403",
        "dname": "Fae Grenade",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "movespeed",
                "header": "MOVESPEED:",
                "value": "20"
            },
            {
                "key": "dps",
                "header": "DPS:",
                "value": "40"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "7"
            }
        ],
        "mc": 25,
        "cd": 20,
        "lore": "Those marked for death by the fae shine brightly to all manner of creatures in the shadow realm.",
        "components": null,
        "created": false,
        "charges": false
    },
    "seeds_of_serenity": {
        "hint": [
            "Active: Verdurous Dale  Target the ground with a 400 radius. Provides +10 health regeneration to all allied units while they are in the area of effect. Lasts 14 seconds."
        ],
        "id": 945,
        "img": "/apps/dota2/images/dota_react/items/seeds_of_serenity.png?t=1593393829403",
        "dname": "Seeds of Serenity",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_health",
                "header": "BONUS HEALTH:",
                "value": "150"
            },
            {
                "key": "bonus_health_regen",
                "header": "BONUS HEALTH REGEN:",
                "value": "4"
            },
            {
                "key": "aura_health_regen",
                "header": "AURA HEALTH REGEN:",
                "value": "10"
            },
            {
                "key": "radius",
                "header": "RADIUS:",
                "value": "400"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "14"
            }
        ],
        "mc": false,
        "cd": 35,
        "lore": "An evergreen sprout treasured by the woodkin and highly coveted by interlopers and their like.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 1
    },
    "lance_of_pursuit": {
        "hint": [
            "Passive: Hound Attacking from behind slows enemies by 16% (8% if Ranged) and deals 15 more damage. Slow lasts 2 second(s)."
        ],
        "id": 946,
        "img": "/apps/dota2/images/dota_react/items/lance_of_pursuit.png?t=1593393829403",
        "dname": "Lance of Pursuit",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_mana",
                "header": "BONUS MANA:",
                "value": "200"
            },
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "0"
            },
            {
                "key": "slow_duration",
                "header": "SLOW DURATION:",
                "value": "2"
            },
            {
                "key": "backstab_damage",
                "header": "BACKSTAB DAMAGE:",
                "value": "15"
            },
            {
                "key": "backstab_angle",
                "header": "BACKSTAB ANGLE:",
                "value": "90"
            },
            {
                "key": "slow_pct_melee",
                "header": "SLOW PCT MELEE:",
                "value": "16"
            },
            {
                "key": "slow_pct_ranged",
                "header": "SLOW PCT RANGED:",
                "value": "8"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "The gleaming weapon of a tarnished knight haunted by his duties to an unworthy king.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 1
    },
    "occult_bracelet": {
        "hint": [
            "Passive: Rites of Eloshar Each time the wearer is attacked, they gain a stack of 0.4 mana regen, up to 5 stacks. Stacks last for 5 seconds."
        ],
        "id": 947,
        "img": "/apps/dota2/images/dota_react/items/occult_bracelet.png?t=1593393829403",
        "dname": "Occult Bracelet",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_all_stats",
                "header": "BONUS ALL STATS:",
                "value": "4"
            },
            {
                "key": "mana_regen",
                "header": "MANA REGEN:",
                "value": "0.4"
            },
            {
                "key": "stack_limit",
                "header": "STACK LIMIT:",
                "value": "5"
            },
            {
                "key": "stack_duration",
                "header": "STACK DURATION:",
                "value": "5"
            },
            {
                "key": "magic_resistance",
                "header": "MAGIC RESISTANCE:",
                "value": "5"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A band that bears effigy of the dark goddess Eloshar's unsleeping eye.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 1
    },
    "tome_of_omniscience": {
        "id": 948,
        "img": "/apps/dota2/images/dota_react/items/tome_of_omniscience.png?t=1593393829403",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_mana",
                "header": "BONUS MANA:",
                "value": "200"
            },
            {
                "key": "bonus_xpm",
                "header": "BONUS XPM:",
                "value": "100"
            },
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "-5"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "ogre_seal_totem": {
        "hint": [
            "Active: Ogre Seal Flop Flop forward like an ogre seal 2 times, dealing 150 damage and slowing enemies in a 275 radius by -100% for 1.5 second on each bounce. 400 bounce distance. "
        ],
        "id": 949,
        "img": "/apps/dota2/images/dota_react/items/ogre_seal_totem.png?t=1593393829403",
        "dname": "Ogre Seal Totem",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "10"
            },
            {
                "key": "leap_distance",
                "header": "LEAP DISTANCE:",
                "value": "400"
            },
            {
                "key": "leap_speed",
                "header": "LEAP SPEED:",
                "value": "800.0"
            },
            {
                "key": "leap_acceleration",
                "header": "LEAP ACCELERATION:",
                "value": "1250.0"
            },
            {
                "key": "radius",
                "header": "RADIUS:",
                "value": "275"
            },
            {
                "key": "flop_damage",
                "header": "FLOP DAMAGE:",
                "value": "150"
            },
            {
                "key": "slow_duration",
                "header": "SLOW DURATION:",
                "value": "1.5"
            },
            {
                "key": "slow",
                "header": "SLOW:",
                "value": "-100"
            },
            {
                "key": "max_bounces",
                "header": "MAX BOUNCES:",
                "value": "2"
            }
        ],
        "mc": 25,
        "cd": 40,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 3
    },
    "wand_of_the_brine": {
        "id": 940,
        "img": "/apps/dota2/images/dota_react/items/wand_of_the_brine.png?t=1593393829403",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "heal_increase",
                "header": "HEAL INCREASE:",
                "value": "15"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "3"
            },
            {
                "key": "movement_speed",
                "header": "MOVEMENT SPEED:",
                "value": "50"
            },
            {
                "key": "damage_reduction",
                "header": "DAMAGE REDUCTION:",
                "value": "50"
            },
            {
                "key": "heal",
                "header": "HEAL:",
                "value": "40"
            },
            {
                "key": "interval",
                "header": "INTERVAL:",
                "value": "0.5"
            }
        ],
        "mc": 90,
        "cd": 35,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "slime_vial": {
        "id": 938,
        "img": "/apps/dota2/images/dota_react/items/slime_vial.png?t=1593393829403",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "health_regen",
                "header": "HEALTH REGEN:",
                "value": "12"
            },
            {
                "key": "spill_damage",
                "header": "SPILL DAMAGE:",
                "value": "125"
            },
            {
                "key": "spill_debuff_duration",
                "header": "SPILL DEBUFF DURATION:",
                "value": "4.0"
            },
            {
                "key": "spill_radius",
                "header": "SPILL RADIUS:",
                "value": "550"
            },
            {
                "key": "spill_speed",
                "header": "SPILL SPEED:",
                "value": "350"
            },
            {
                "key": "spill_movement_speed",
                "header": "SPILL MOVEMENT SPEED:",
                "value": "35"
            },
            {
                "key": "spill_attack_speed",
                "header": "SPILL ATTACK SPEED:",
                "value": "30"
            },
            {
                "key": "spill_self_bonus_armor",
                "header": "SPILL SELF BONUS ARMOR:",
                "value": "15"
            }
        ],
        "mc": false,
        "cd": 27,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "recipe_harpoon": {
        "id": 1101,
        "img": "/apps/dota2/images/dota_react/items/recipe.png?t=1593393829403",
        "dname": "Harpoon Recipe",
        "cost": 1000,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "harpoon": {
        "hint": [
            "Active: Draw Forth When targeting an enemy, fire a harpoon at them, that pulls you and the target closer together, up to 35% of the distance between you and your target. If the caster is melee, the hero and target are always pulled to within melee distance of each other.",
            "Passive: Echo Strike  Causes melee attacks to attack twice in quick succession. The double attacks apply a 100% movement slow for 1 seconds on each strike. Echo Strike cooldown: 5s"
        ],
        "id": 939,
        "img": "/apps/dota2/images/dota_react/items/harpoon.png?t=1593393829403",
        "dname": "Harpoon",
        "cost": 4700,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "25"
            },
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "25"
            },
            {
                "key": "bonus_agility",
                "header": "BONUS AGILITY:",
                "value": "10"
            },
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "10"
            },
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "2.0"
            },
            {
                "key": "passive_cooldown",
                "header": "PASSIVE COOLDOWN:",
                "value": "5"
            },
            {
                "key": "movement_slow",
                "header": "MOVEMENT SLOW:",
                "value": "100"
            },
            {
                "key": "slow_duration",
                "header": "SLOW DURATION:",
                "value": "1.0"
            },
            {
                "key": "pull_duration",
                "header": "PULL DURATION:",
                "value": "0.3"
            },
            {
                "key": "pull_distance_pct",
                "header": "PULL DISTANCE PCT:",
                "value": "35"
            },
            {
                "key": "min_distance",
                "header": "MIN DISTANCE:",
                "value": "100"
            },
            {
                "key": "max_distance",
                "header": "MAX DISTANCE:",
                "value": "1000"
            },
            {
                "key": "cast_range_enemy",
                "header": "CAST RANGE ENEMY:",
                "value": "700"
            },
            {
                "key": "push_length",
                "header": "PUSH LENGTH:",
                "value": "600"
            },
            {
                "key": "projectile_speed",
                "header": "PROJECTILE SPEED:",
                "value": "2000"
            }
        ],
        "mc": 50,
        "cd": 19,
        "lore": "",
        "components": [
            "echo_sabre",
            "diadem"
        ],
        "created": true,
        "charges": false
    },
    "defiant_shell": {
        "hint": [
            "Passive: Reciprocity  When attacked, the hero counter-attacks a target within their attack range. 5s Cooldown."
        ],
        "id": 950,
        "img": "/apps/dota2/images/dota_react/items/defiant_shell.png?t=1593393829403",
        "dname": "Defiant Shell",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "7"
            },
            {
                "key": "all_stats",
                "header": "ALL STATS:",
                "value": "7"
            },
            {
                "key": "counter_cooldown",
                "header": "COUNTER COOLDOWN:",
                "value": "5"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 3
    },
    "arcane_scout": {
        "id": 968,
        "img": "/apps/dota2/images/dota_react/items/arcane_scout.png?t=1593393829403",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "20"
            },
            {
                "key": "magic_resist",
                "header": "MAGIC RESIST:",
                "value": "15"
            },
            {
                "key": "vision_bonus",
                "header": "VISION BONUS:",
                "value": "150"
            },
            {
                "key": "self_vision_duration",
                "header": "SELF VISION DURATION:",
                "value": "5"
            },
            {
                "key": "scout_movespeed",
                "header": "SCOUT MOVESPEED:",
                "value": "350"
            },
            {
                "key": "sight_range",
                "header": "SIGHT RANGE:",
                "value": "300"
            }
        ],
        "mc": false,
        "cd": 40,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "barricade": {
        "id": 969,
        "img": "/apps/dota2/images/dota_react/items/barricade.png?t=1593393829403",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "8"
            },
            {
                "key": "width",
                "header": "WIDTH:",
                "value": "50"
            },
            {
                "key": "length",
                "header": "LENGTH:",
                "value": "300"
            },
            {
                "key": "bonus_health",
                "header": "BONUS HEALTH:",
                "value": "300"
            },
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "5"
            },
            {
                "key": "max_hits",
                "header": "MAX HITS:",
                "value": "5"
            }
        ],
        "mc": false,
        "cd": 45,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "eye_of_the_vizier": {
        "id": 990,
        "img": "/apps/dota2/images/dota_react/items/eye_of_the_vizier.png?t=1593393829403",
        "dname": "Eye of the Vizier",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "cast_range_bonus",
                "header": "CAST RANGE BONUS:",
                "value": "125"
            },
            {
                "key": "mana_reduction_pct",
                "header": "MANA REDUCTION PCT:",
                "value": "15"
            },
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "1.25"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "The ring of a cunning court mage who imprisoned a cadre of enemies to serve as his personal mana reserve.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 2
    },
    "manacles_of_power": {
        "id": 998,
        "img": "/apps/dota2/images/dota_react/items/manacles_of_power.png?t=1593393829403",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "4"
            },
            {
                "key": "bonus_strength",
                "header": "BONUS STRENGTH:",
                "value": "30"
            },
            {
                "key": "bonus_strength_per_kill",
                "header": "BONUS STRENGTH PER KILL:",
                "value": "5"
            },
            {
                "key": "leash_distance",
                "header": "LEASH DISTANCE:",
                "value": "300"
            },
            {
                "key": "leash_limit_multiplier",
                "header": "LEASH LIMIT MULTIPLIER:",
                "value": "1.3"
            }
        ],
        "mc": false,
        "cd": 20,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "bottomless_chalice": {
        "id": 1000,
        "img": "/apps/dota2/images/dota_react/items/bottomless_chalice.png?t=1593393829403",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "3"
            },
            {
                "key": "stored_rune_duration",
                "header": "STORED RUNE DURATION:",
                "value": "90"
            },
            {
                "key": "health",
                "header": "HEALTH:",
                "value": "200"
            },
            {
                "key": "mana",
                "header": "MANA:",
                "value": "70"
            },
            {
                "key": "max_charges_per_kill",
                "header": "MAX CHARGES PER KILL:",
                "value": "1"
            },
            {
                "key": "recharge_time",
                "header": "RECHARGE TIME:",
                "value": "10"
            },
            {
                "key": "movement_speed",
                "header": "MOVEMENT SPEED:",
                "value": "30"
            },
            {
                "key": "bonus_intellect",
                "header": "BONUS INTELLECT:",
                "value": "40"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": 6
    },
    "wand_of_sanctitude": {
        "id": 1017,
        "img": "/apps/dota2/images/dota_react/items/wand_of_sanctitude.png?t=1593393829403",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "radius",
                "header": "RADIUS:",
                "value": "450"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "6"
            },
            {
                "key": "tick_rate",
                "header": "TICK RATE:",
                "value": "1.5"
            },
            {
                "key": "duration_per_charge",
                "header": "DURATION PER CHARGE:",
                "value": "1.5"
            },
            {
                "key": "all_stats",
                "header": "ALL STATS:",
                "value": "15"
            },
            {
                "key": "bonus_cast_range",
                "header": "BONUS CAST RANGE:",
                "value": "200"
            }
        ],
        "mc": false,
        "cd": 40,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "specialists_array": {
        "hint": [
            "Passive: Crackshot Ranged Only. The next attack fires projectiles that deal 20 bonus damage at 2 additional targets within attack range plus a 225 range bonus. Does not trigger attack modifiers."
        ],
        "id": 1076,
        "img": "/apps/dota2/images/dota_react/items/specialists_array.png?t=1593393829403",
        "dname": "Specialist's Array",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "all_stats",
                "header": "ALL STATS:",
                "value": "7"
            },
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "12"
            },
            {
                "key": "count",
                "header": "COUNT:",
                "value": "2"
            },
            {
                "key": "secondary_target_range_bonus",
                "header": "SECONDARY TARGET RANGE BONUS:",
                "value": "225"
            },
            {
                "key": "proc_bonus_damage",
                "header": "PROC BONUS DAMAGE:",
                "value": "20"
            }
        ],
        "mc": false,
        "cd": 8,
        "lore": "An impressive kit of trigger enhancements born in an aging assassin's idle mind.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 2
    },
    "dagger_of_ristul": {
        "hint": [
            "Active: Imbrue Consume 100 health to temporarily gain 40 damage. Lasts 8 seconds."
        ],
        "id": 1077,
        "img": "/apps/dota2/images/dota_react/items/dagger_of_ristul.png?t=1593393829403",
        "dname": "Dagger of Ristul",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "aspd",
                "header": "ASPD:",
                "value": "15"
            },
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "40"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "8"
            },
            {
                "key": "health_sacrifice",
                "header": "HEALTH SACRIFICE:",
                "value": "100"
            }
        ],
        "mc": false,
        "cd": 30,
        "lore": "A sinister shiv that grants favor to those willing to stain its blade with a sacrifice of their own blood.",
        "components": null,
        "created": false,
        "charges": false
    },
    "ofrenda": {
        "hint": [
            "Active: Honor the Dead Place this Offering on an Altar to honor the dead with a memory from those they left behind."
        ],
        "id": 4300,
        "img": "/apps/dota2/images/dota_react/items/ofrenda.png?t=1593393829403",
        "dname": "Beloved Memory",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "speed",
                "header": "SPEED:",
                "value": "1000"
            }
        ],
        "mc": false,
        "cd": 3,
        "lore": "Take joy in remembering those beloved who've passed now beyond the veil.",
        "components": null,
        "created": false,
        "charges": false
    },
    "ofrenda_shovel": {
        "hint": [
            "Active: Dig Search the map for Offerings to the dead."
        ],
        "id": 4301,
        "img": "/apps/dota2/images/dota_react/items/ofrenda_shovel.png?t=1593393829403",
        "dname": "Scrying Shovel",
        "cost": 0,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": 8,
        "lore": "You don't know where it came from, but it knows where you need to go. All you need to do is dig.",
        "components": null,
        "created": false,
        "charges": false
    },
    "ofrenda_pledge": {
        "hint": [
            "Active: Undying Promise Signal to the spirits of the other realm your commitment to honoring them. If everyone in the battle makes an Undying Promise before the fight begins, the dead might be willing to listen."
        ],
        "id": 4302,
        "img": "/apps/dota2/images/dota_react/items/ofrenda_pledge.png?t=1593393829403",
        "dname": "Forebearer's Fortune",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "radius",
                "header": "RADIUS:",
                "value": "600"
            },
            {
                "key": "speed",
                "header": "SPEED:",
                "value": "1200"
            },
            {
                "key": "linger_duration",
                "header": "LINGER DURATION:",
                "value": "5.0"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "This item seems unstable. Like it might just disappear.",
        "components": null,
        "created": false,
        "charges": false
    },
    "muertas_gun": {
        "hint": [
            "Active: Dead Shot Fires a ghostly bullet at an enemy unit or tree. When the bullet strikes it will deal 300 damage and slow the target by -100% for 0.5 seconds, then ricochet in the vector-targeted direction. The ricochet will damage all units that it passes through, stopping when it hits a hero. Heroes hit by the ricochet will be feared for 2 seconds in the direction of the shot."
        ],
        "id": 1090,
        "img": "/apps/dota2/images/dota_react/items/muertas_gun.png?t=1593393829403",
        "dname": "Mercy & Grace",
        "cost": 0,
        "notes": "Feared enemies are phased and unslowable.\nThe ricochet will travel 1x Dead Shot's cast range.",
        "attrib": [
            {
                "key": "AbilityCastRange",
                "header": "ABILITYCASTRANGE:",
                "value": "1000"
            },
            {
                "key": "damage",
                "header": "DAMAGE:",
                "value": "300"
            },
            {
                "key": "speed",
                "header": "SPEED:",
                "value": "2000"
            },
            {
                "key": "radius",
                "header": "RADIUS:",
                "value": "100"
            },
            {
                "key": "ricochet_radius_start",
                "header": "RICOCHET RADIUS START:",
                "value": "115"
            },
            {
                "key": "ricochet_radius_end",
                "header": "RICOCHET RADIUS END:",
                "value": "115"
            },
            {
                "key": "ricochet_stun_duration",
                "header": "RICOCHET STUN DURATION:",
                "value": "2.0"
            },
            {
                "key": "ricochet_distance_multiplier",
                "header": "RICOCHET DISTANCE MULTIPLIER:",
                "value": "1"
            },
            {
                "key": "ricochet_fear_duration",
                "header": "RICOCHET FEAR DURATION:",
                "value": "2.0"
            },
            {
                "key": "impact_slow_percent",
                "header": "IMPACT SLOW PERCENT:",
                "value": "-100"
            },
            {
                "key": "impact_slow_duration",
                "header": "IMPACT SLOW DURATION:",
                "value": "0.5"
            },
            {
                "key": "bonus_cast_pct",
                "header": "BONUS CAST PCT:",
                "value": "100"
            },
            {
                "key": "bonus_spell_amp",
                "header": "BONUS SPELL AMP:",
                "value": "100"
            },
            {
                "key": "health_pct_penalty",
                "header": "HEALTH PCT PENALTY:",
                "value": "70"
            }
        ],
        "mc": 160,
        "cd": 10,
        "lore": "One to deliver the body, the other to claim the soul.",
        "components": null,
        "created": false,
        "charges": false
    },
    "tier1_token": {
        "hint": [
            "Activate to redeem a Tier 1 Neutral Item. The resulting neutral item isn't shareable and a hero can only redeem a single token per tier."
        ],
        "id": 2091,
        "img": "/apps/dota2/images/dota_react/items/tier1_token.png?t=1593393829403",
        "dname": "Tier 1 Token",
        "cost": null,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "tier2_token": {
        "hint": [
            "Activate to redeem a Tier 2 Neutral Item. The resulting neutral item isn't shareable and a hero can only redeem a single token per tier."
        ],
        "id": 2092,
        "img": "/apps/dota2/images/dota_react/items/tier2_token.png?t=1593393829403",
        "dname": "Tier 2 Token",
        "cost": null,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "tier3_token": {
        "hint": [
            "Activate to redeem a Tier 3 Neutral Item. The resulting neutral item isn't shareable and a hero can only redeem a single token per tier."
        ],
        "id": 2093,
        "img": "/apps/dota2/images/dota_react/items/tier3_token.png?t=1593393829403",
        "dname": "Tier 3 Token",
        "cost": null,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "tier4_token": {
        "hint": [
            "Activate to redeem a Tier 4 Neutral Item. The resulting neutral item isn't shareable and a hero can only redeem a single token per tier."
        ],
        "id": 2094,
        "img": "/apps/dota2/images/dota_react/items/tier4_token.png?t=1593393829403",
        "dname": "Tier 4 Token",
        "cost": null,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "tier5_token": {
        "hint": [
            "Activate to redeem a Tier 5 Neutral Item. The resulting neutral item isn't shareable and a hero can only redeem a single token per tier."
        ],
        "id": 2095,
        "img": "/apps/dota2/images/dota_react/items/tier5_token.png?t=1593393829403",
        "dname": "Tier 5 Token",
        "cost": null,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "vindicators_axe": {
        "hint": [
            "Passive: Vengeance Provides 30 damage if equipped hero is Silenced and 20 armor if equipped hero is Stunned."
        ],
        "id": 2096,
        "img": "/apps/dota2/images/dota_react/items/vindicators_axe.png?t=1593393829403",
        "dname": "Vindicator's Axe",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_attack_speed",
                "header": "BONUS ATTACK SPEED:",
                "value": "35"
            },
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "30"
            },
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "20"
            },
            {
                "key": "bonus_slow_resist",
                "header": "BONUS SLOW RESIST:",
                "value": "20"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 3
    },
    "duelist_gloves": {
        "hint": [
            "Passive: Boldness Grants 20 attack speed as long as there are enemy heroes within 1200 units."
        ],
        "id": 2097,
        "img": "/apps/dota2/images/dota_react/items/duelist_gloves.png?t=1593393829403",
        "dname": "Duelist Gloves",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_attack_speed",
                "header": "BONUS ATTACK SPEED:",
                "value": "20"
            },
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "12"
            },
            {
                "key": "radius",
                "header": "RADIUS:",
                "value": "1200"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 1
    },
    "ancient_guardian": {
        "hint": [
            "Passive: Ancient Power Grants 50 extra bonus damage as long as the unit is within 2000 range of an ancient."
        ],
        "id": 1156,
        "img": "/apps/dota2/images/dota_react/items/ancient_guardian.png?t=1593393829403",
        "dname": "Ancient Guardian",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "extra_bonus_damage",
                "header": "EXTRA BONUS DAMAGE:",
                "value": "50"
            },
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "50"
            },
            {
                "key": "radius",
                "header": "RADIUS:",
                "value": "2000"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 4
    },
    "safety_bubble": {
        "hint": [
            "Passive: Bubbled Up Equipped Hero has a 100 HP Barrier. Barrier fully regenerates after not receiving damage for 5 seconds"
        ],
        "id": 1157,
        "img": "/apps/dota2/images/dota_react/items/safety_bubble.png?t=1593393829403",
        "dname": "Safety Bubble",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "shield",
                "header": "SHIELD:",
                "value": "100"
            },
            {
                "key": "restore_time",
                "header": "RESTORE TIME:",
                "value": "5"
            },
            {
                "key": "bonus_hp_regen",
                "header": "BONUS HP REGEN:",
                "value": "5"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 1
    },
    "whisper_of_the_dread": {
        "hint": [
            "Passive: Tunnel Vision Equipped Hero has their daytime vision reduced by 15% but their Spell damage increased by 10%."
        ],
        "id": 1158,
        "img": "/apps/dota2/images/dota_react/items/whisper_of_the_dread.png?t=1593393829403",
        "dname": "Whisper of the Dread",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "vision_penalty",
                "header": "VISION PENALTY:",
                "value": "15"
            },
            {
                "key": "bonus_spell_damage",
                "header": "BONUS SPELL DAMAGE:",
                "value": "10"
            },
            {
                "key": "bonus_mana",
                "header": "BONUS MANA:",
                "value": "150"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 2
    },
    "nemesis_curse": {
        "hint": [
            "Passive: Glass Cannon Hero takes 8% more damage from all sources.",
            "Passive: Glassify  When attacking a hero, apply a debuff increasing the damage received by that hero by 12% for 5 seconds. Only one target can be affected by Glassify at the same time. "
        ],
        "id": 1159,
        "img": "/apps/dota2/images/dota_react/items/nemesis_curse.png?t=1593393829403",
        "dname": "Nemesis Curse",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "debuff_self",
                "header": "DEBUFF SELF:",
                "value": "8"
            },
            {
                "key": "debuff_enemy",
                "header": "DEBUFF ENEMY:",
                "value": "12"
            },
            {
                "key": "debuff_enemy_duration",
                "header": "DEBUFF ENEMY DURATION:",
                "value": "5"
            },
            {
                "key": "bonus_damage",
                "header": "BONUS DAMAGE:",
                "value": "35"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 3
    },
    "avianas_feather": {
        "hint": [
            "Passive: Free Bird When equipped hero is below 30% HP, they gain flying movement."
        ],
        "id": 1160,
        "img": "/apps/dota2/images/dota_react/items/avianas_feather.png?t=1593393829403",
        "dname": "Aviana's Feather",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "evasion",
                "header": "EVASION:",
                "value": "25"
            },
            {
                "key": "move_speed",
                "header": "MOVE SPEED:",
                "value": "30"
            },
            {
                "key": "flight_threshold",
                "header": "FLIGHT THRESHOLD:",
                "value": "30"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 4
    },
    "unwavering_condition": {
        "hint": [
            "Passive: Unwavering Hero's Max Health is set to 1500 and can't be altered by other effects or attributes."
        ],
        "id": 1161,
        "img": "/apps/dota2/images/dota_react/items/unwavering_condition.png?t=1593393829403",
        "dname": "Unwavering Condition",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "max_health",
                "header": "MAX HEALTH:",
                "value": "1500"
            },
            {
                "key": "magic_resist",
                "header": "MAGIC RESIST:",
                "value": "95"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 5
    },
    "horizons_equilibrium": {
        "hint": [
            "Passive: Equilibrium Damage dealt to and received from units further than 500 units from you is reduced by 25%."
        ],
        "id": 2098,
        "img": "/apps/dota2/images/dota_react/items/horizons_equilibrium.png?t=1593393829403",
        "dname": "Horizon's Equilibrium",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "distance",
                "header": "DISTANCE:",
                "value": "500"
            },
            {
                "key": "damage_reduction",
                "header": "DAMAGE REDUCTION:",
                "value": "25"
            },
            {
                "key": "attack_lifesteal",
                "header": "ATTACK LIFESTEAL:",
                "value": "24"
            },
            {
                "key": "spell_lifesteal",
                "header": "SPELL LIFESTEAL:",
                "value": "12"
            },
            {
                "key": "creep_lifesteal_reduction_pct",
                "header": "CREEP LIFESTEAL REDUCTION PCT:",
                "value": "50"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "blighted_spirit": {
        "hint": [
            "Passive: Toxins Whenever an enemy attacks you, they gain -25 Heal Amplify/Lifesteal amplification for 3 seconds."
        ],
        "id": 2099,
        "img": "/apps/dota2/images/dota_react/items/blighted_spirit.png?t=1593393829403",
        "dname": "Blighted Spirit",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "magic_resist",
                "header": "MAGIC RESIST:",
                "value": "15"
            },
            {
                "key": "heal_reduction",
                "header": "HEAL REDUCTION:",
                "value": "25"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "3"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "dandelion_amulet": {
        "hint": [
            "Passive: Magical Damage Block Every 12s, blocks up to 300 magic damage from damage instances over 75 damage."
        ],
        "id": 2190,
        "img": "/apps/dota2/images/dota_react/items/dandelion_amulet.png?t=1593393829403",
        "dname": "Dandelion Amulet",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "move_speed",
                "header": "MOVE SPEED:",
                "value": "25"
            },
            {
                "key": "mana",
                "header": "MANA:",
                "value": "300"
            },
            {
                "key": "magic_block",
                "header": "MAGIC BLOCK:",
                "value": "300"
            },
            {
                "key": "min_damage",
                "header": "MIN DAMAGE:",
                "value": "75"
            }
        ],
        "mc": false,
        "cd": 12,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 3
    },
    "turtle_shell": {
        "hint": [
            "Active: Turtle Silences and Disarms your hero for 15 seconds. Reduce all incoming damage by 50%. This effect is removed when your hero moves."
        ],
        "id": 2191,
        "img": "/apps/dota2/images/dota_react/items/turtle_shell.png?t=1593393829403",
        "dname": "Turtle Shell",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "15"
            },
            {
                "key": "armor",
                "header": "ARMOR:",
                "value": "5"
            },
            {
                "key": "damage_reduction",
                "header": "DAMAGE REDUCTION:",
                "value": "50"
            }
        ],
        "mc": false,
        "cd": 30,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "martyrs_plate": {
        "hint": [
            "Active: Martyrdom Redirect 25% of all magic damage dealt to your allied heroes within 900 radius towards you for 10 seconds."
        ],
        "id": 2192,
        "img": "/apps/dota2/images/dota_react/items/martyrs_plate.png?t=1593393829403",
        "dname": "Martyr's Plate",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "10"
            },
            {
                "key": "magic_resist",
                "header": "MAGIC RESIST:",
                "value": "25"
            },
            {
                "key": "damage_redirection",
                "header": "DAMAGE REDIRECTION:",
                "value": "25"
            },
            {
                "key": "aura_radius",
                "header": "AURA RADIUS:",
                "value": "900"
            },
            {
                "key": "hp_regen",
                "header": "HP REGEN:",
                "value": "5"
            }
        ],
        "mc": false,
        "cd": 40,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 4
    },
    "gossamer_cape": {
        "hint": [
            "Passive: Sixth Sense Automatically dodge an attack from an enemy hero."
        ],
        "id": 2193,
        "img": "/apps/dota2/images/dota_react/items/gossamer_cape.png?t=1593393829403",
        "dname": "Gossamer Cape",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "movement_speed",
                "header": "MOVEMENT SPEED:",
                "value": "20"
            }
        ],
        "mc": false,
        "cd": 4,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 2
    },
    "light_collector": {
        "id": 1167,
        "img": "/apps/dota2/images/dota_react/items/light_collector.png?t=1593393829403",
        "dname": "Light Collector",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "health_regen",
                "header": "HEALTH REGEN:",
                "value": "12"
            },
            {
                "key": "mana_regen",
                "header": "MANA REGEN:",
                "value": "6"
            },
            {
                "key": "penalty",
                "header": "PENALTY:",
                "value": "0.5"
            },
            {
                "key": "movespeed_pct",
                "header": "MOVESPEED PCT:",
                "value": "10"
            },
            {
                "key": "radius",
                "header": "RADIUS:",
                "value": "200"
            },
            {
                "key": "tree_destruction_radius",
                "header": "TREE DESTRUCTION RADIUS:",
                "value": "325"
            },
            {
                "key": "miss_rate",
                "header": "MISS RATE:",
                "value": "30"
            },
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "2.5"
            }
        ],
        "mc": false,
        "cd": 30,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 2
    },
    "rattlecage": {
        "hint": [
            "Passive: Reverberate After taking 180 damage from any source, the wearer fires a projectile at up to 2 random enemies in a 600 radius, prioritizing heroes, that deal 125 physical damage and slow the targets movement and attack speed by 100% for 0.2s. "
        ],
        "id": 1168,
        "img": "/apps/dota2/images/dota_react/items/rattlecage.png?t=1593393829403",
        "dname": "Rattlecage",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "radius",
                "header": "RADIUS:",
                "value": "600"
            },
            {
                "key": "slow_duration",
                "header": "SLOW DURATION:",
                "value": "0.2"
            },
            {
                "key": "damage_reset_interval",
                "header": "DAMAGE RESET INTERVAL:",
                "value": "7"
            },
            {
                "key": "damage_threshold",
                "header": "DAMAGE THRESHOLD:",
                "value": "180"
            },
            {
                "key": "slow",
                "header": "SLOW:",
                "value": "100"
            },
            {
                "key": "projectile_speed",
                "header": "PROJECTILE SPEED:",
                "value": "1000"
            },
            {
                "key": "projectile_damage",
                "header": "PROJECTILE DAMAGE:",
                "value": "125"
            },
            {
                "key": "target_count",
                "header": "TARGET COUNT:",
                "value": "2"
            },
            {
                "key": "bonus_armor",
                "header": "BONUS ARMOR:",
                "value": "12"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 4
    },
    "doubloon": {
        "hint": [
            "Toggle: Flip Toggle to convert 20% of your Max Health to Max Mana, or 20% of your Max Mana to  Max Health."
        ],
        "id": 1803,
        "img": "/apps/dota2/images/dota_react/items/doubloon.png?t=1593393829403",
        "dname": "Doubloon",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "conversion_pct",
                "header": "CONVERSION PCT:",
                "value": "20"
            },
            {
                "key": "bonus_health_regen",
                "header": "BONUS HEALTH REGEN:",
                "value": "5"
            },
            {
                "key": "bonus_mana_regen",
                "header": "BONUS MANA REGEN:",
                "value": "2.5"
            }
        ],
        "mc": false,
        "cd": 5,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 3
    },
    "roshans_banner": {
        "hint": [
            "Use: Place Banner Creates a banner anywhere on the map. Lane creeps passing by the banner will get a 45s increase of damage and health. Lasts 300 seconds. Can be destroyed "
        ],
        "id": 1804,
        "img": "/apps/dota2/images/dota_react/items/roshans_banner.png?t=1593393829403",
        "dname": "Roshan's Banner",
        "qual": "artifact",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "duration",
                "header": "DURATION:",
                "value": "300"
            },
            {
                "key": "radius",
                "header": "RADIUS:",
                "value": "750"
            },
            {
                "key": "health",
                "header": "HEALTH:",
                "value": "24"
            },
            {
                "key": "hp_bonus",
                "header": "HP BONUS:",
                "value": "75"
            },
            {
                "key": "damage_bonus",
                "header": "DAMAGE BONUS:",
                "value": "50"
            },
            {
                "key": "model_scale",
                "header": "MODEL SCALE:",
                "value": "25"
            },
            {
                "key": "buff_linger_duration",
                "header": "BUFF LINGER DURATION:",
                "value": "45"
            }
        ],
        "mc": false,
        "cd": 1,
        "lore": "",
        "components": null,
        "created": false,
        "charges": false
    },
    "diffusal_blade_2": {
        "id": 196,
        "img": "/apps/dota2/images/dota_react/items/diffusal_blade_2.png?3",
        "dname": "Diffusal Blade",
        "qual": "artifact",
        "cost": 3850,
        "desc": "Active: Purge Targets an enemy, removing buffs from the target and slowing it for 4 seconds.Range: 600\nPassive: ManabreakEach attack burns 50 mana from the target, and deals 0.8 physical damage per burned mana. Burns 16 mana per attack from melee illusions and 8 mana per attack from ranged illusions. Dispel Type: Basic Dispel",
        "notes": "Does not stack with other manabreak abilities.",
        "attrib": [
            {
                "key": "bonus_agility",
                "header": "",
                "value": "25 / 35",
                "footer": "Agility"
            },
            {
                "key": "bonus_intellect",
                "header": "",
                "value": "10 / 15",
                "footer": "Intelligence"
            },
            {
                "key": "initial_charges",
                "header": "INITIAL CHARGES:",
                "value": "8",
                "generated": true
            },
            {
                "key": "feedback_mana_burn",
                "header": "FEEDBACK MANA BURN:",
                "value": "50",
                "generated": true
            },
            {
                "key": "feedback_mana_burn_illusion_melee",
                "header": "FEEDBACK MANA BURN ILLUSION MELEE:",
                "value": "16",
                "generated": true
            },
            {
                "key": "feedback_mana_burn_illusion_ranged",
                "header": "FEEDBACK MANA BURN ILLUSION RANGED:",
                "value": "8",
                "generated": true
            },
            {
                "key": "purge_summoned_damage",
                "header": "PURGE SUMMONED DAMAGE:",
                "value": "99999",
                "generated": true
            },
            {
                "key": "purge_rate",
                "header": "PURGE RATE:",
                "value": "5",
                "generated": true
            },
            {
                "key": "purge_root_duration",
                "header": "PURGE ROOT DURATION:",
                "value": "3",
                "generated": true
            },
            {
                "key": "purge_slow_duration",
                "header": "PURGE SLOW DURATION:",
                "value": "4",
                "generated": true
            },
            {
                "key": "damage_per_burn",
                "header": "DAMAGE PER BURN:",
                "value": "0.8",
                "generated": true
            },
            {
                "key": "cast_range_tooltip",
                "header": "CAST RANGE TOOLTIP:",
                "value": "600",
                "generated": true
            }
        ],
        "mc": false,
        "cd": 4,
        "lore": "An enchanted blade that allows the user to cut straight into the enemy's soul.",
        "components": [
            "diffusal_blade",
            "recipe_diffusal_blade"
        ],
        "created": true
    }
}
export const getGoods = (itemId) => {
    let url="https://cdn.cloudflare.steamstatic.com"
    let newUrl
    for (const item in goods) {
        if (goods[item].id === itemId) {
            newUrl = url + goods[item].img
        }
    }
    return newUrl
}