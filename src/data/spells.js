const spellsData = `[{"name":"Acid Surge","requirements":{"Intelligence":0,"Faith":13,"Slots":1},"type":"Pyromancies"},{"name":"Black Fire Orb","requirements":{"Intelligence":20,"Faith":20,"Slots":1},"type":"Pyromancies"},{"name":"Black Flame","requirements":{"Intelligence":15,"Faith":15,"Slots":1},"type":"Pyromancies"},{"name":"Black Serpent","requirements":{"Intelligence":15,"Faith":15,"Slots":1},"type":"Pyromancies"},{"name":"Boulder Heave","requirements":{"Intelligence":8,"Faith":12,"Slots":1},"type":"Pyromancies"},{"name":"Bursting Fireball","requirements":{"Intelligence":18,"Faith":12,"Slots":1},"type":"Pyromancies"},{"name":"Carthus Beacon","requirements":{"Intelligence":12,"Faith":12,"Slots":2},"type":"Pyromancies"},{"name":"Carthus Flame Arc","requirements":{"Intelligence":10,"Faith":10,"Slots":1},"type":"Pyromancies"},{"name":"Chaos Bed Vestiges","requirements":{"Intelligence":20,"Faith":10,"Slots":2},"type":"Pyromancies"},{"name":"Chaos Storm","requirements":{"Intelligence":0,"Faith":0,"Slots":2},"type":"Pyromancies"},{"name":"Fire Orb","requirements":{"Intelligence":8,"Faith":8,"Slots":1},"type":"Pyromancies"},{"name":"Fire Surge","requirements":{"Intelligence":6,"Faith":0,"Slots":1},"type":"Pyromancies"},{"name":"Fire Whip","requirements":{"Intelligence":13,"Faith":8,"Slots":1},"type":"Pyromancies"},{"name":"Fireball","requirements":{"Intelligence":6,"Faith":6,"Slots":1},"type":"Pyromancies"},{"name":"Firestorm","requirements":{"Intelligence":18,"Faith":0,"Slots":1},"type":"Pyromancies"},{"name":"Flame Fan","requirements":{"Intelligence":15,"Faith":15,"Slots":1},"type":"Pyromancies"},{"name":"Flash Sweat","requirements":{"Intelligence":6,"Faith":6,"Slots":1},"type":"Pyromancies"},{"name":"Floating Chaos","requirements":{"Intelligence":16,"Faith":16,"Slots":1},"type":"Pyromancies"},{"name":"Great Chaos Fire Orb","requirements":{"Intelligence":0,"Faith":0,"Slots":2},"type":"Pyromancies"},{"name":"Great Combustion","requirements":{"Intelligence":10,"Faith":10,"Slots":1},"type":"Pyromancies"},{"name":"Iron Flesh","requirements":{"Intelligence":8,"Faith":0,"Slots":1},"type":"Pyromancies"},{"name":"Poison Mist","requirements":{"Intelligence":0,"Faith":10,"Slots":1},"type":"Pyromancies"},{"name":"Power Within","requirements":{"Intelligence":10,"Faith":10,"Slots":1},"type":"Pyromancies"},{"name":"Profaned Flame","requirements":{"Intelligence":25,"Faith":0,"Slots":1},"type":"Pyromancies"},{"name":"Profuse Sweat","requirements":{"Intelligence":6,"Faith":6,"Slots":1},"type":"Pyromancies"},{"name":"Rapport","requirements":{"Intelligence":15,"Faith":0,"Slots":1},"type":"Pyromancies"},{"name":"Sacred Flame","requirements":{"Intelligence":8,"Faith":8,"Slots":1},"type":"Pyromancies"},{"name":"Seething Chaos","requirements":{"Intelligence":18,"Faith":18,"Slots":1},"type":"Pyromancies"},{"name":"Toxic Mist","requirements":{"Intelligence":0,"Faith":15,"Slots":1},"type":"Pyromancies"},{"name":"Warmth","requirements":{"Intelligence":0,"Faith":25,"Slots":2},"type":"Pyromancies"},{"name":"Affinity","requirements":{"Intelligence":32,"Faith":0,"Slots":1},"type":"Sorceries"},{"name":"Aural Decoy","requirements":{"Intelligence":18,"Faith":0,"Slots":1},"type":"Sorceries"},{"name":"Cast Light","requirements":{"Intelligence":15,"Faith":0,"Slots":1},"type":"Sorceries"},{"name":"Chameleon","requirements":{"Intelligence":12,"Faith":0,"Slots":1},"type":"Sorceries"},{"name":"Crystal Hail","requirements":{"Intelligence":18,"Faith":0,"Slots":1},"type":"Sorceries"},{"name":"Crystal Magic Weapon","requirements":{"Intelligence":30,"Faith":0,"Slots":1},"type":"Sorceries"},{"name":"Crystal Soul Spear","requirements":{"Intelligence":48,"Faith":0,"Slots":1},"type":"Sorceries"},{"name":"Dark Edge","requirements":{"Intelligence":30,"Faith":0,"Slots":1},"type":"Sorceries"},{"name":"Deep Soul","requirements":{"Intelligence":12,"Faith":0,"Slots":1},"type":"Sorceries"},{"name":"Farron Dart","requirements":{"Intelligence":8,"Faith":0,"Slots":1},"type":"Sorceries"},{"name":"Farron Flashsword","requirements":{"Intelligence":23,"Faith":0,"Slots":1},"type":"Sorceries"},{"name":"Farron Hail","requirements":{"Intelligence":28,"Faith":0,"Slots":1},"type":"Sorceries"},{"name":"Frozen Weapon","requirements":{"Intelligence":15,"Faith":0,"Slots":1},"type":"Sorceries"},{"name":"Great Deep Soul","requirements":{"Intelligence":20,"Faith":0,"Slots":2},"type":"Sorceries"},{"name":"Great Farron Dart","requirements":{"Intelligence":23,"Faith":0,"Slots":1},"type":"Sorceries"},{"name":"Great Heavy Soul Arrow","requirements":{"Intelligence":18,"Faith":0,"Slots":1},"type":"Sorceries"},{"name":"Great Magic Shield","requirements":{"Intelligence":18,"Faith":0,"Slots":1},"type":"Sorceries"},{"name":"Great Magic Weapon","requirements":{"Intelligence":15,"Faith":0,"Slots":1},"type":"Sorceries"},{"name":"Great Soul Arrow","requirements":{"Intelligence":15,"Faith":0,"Slots":1},"type":"Sorceries"},{"name":"Great Soul Dregs","requirements":{"Intelligence":40,"Faith":0,"Slots":1},"type":"Sorceries"},{"name":"Heavy Soul Arrow","requirements":{"Intelligence":13,"Faith":0,"Slots":1},"type":"Sorceries"},{"name":"Hidden Body","requirements":{"Intelligence":15,"Faith":0,"Slots":1},"type":"Sorceries"},{"name":"Hidden Weapon","requirements":{"Intelligence":12,"Faith":0,"Slots":1},"type":"Sorceries"},{"name":"Homing Crystal Soulmass","requirements":{"Intelligence":30,"Faith":0,"Slots":1},"type":"Sorceries"},{"name":"Homing Soulmass","requirements":{"Intelligence":20,"Faith":0,"Slots":1},"type":"Sorceries"},{"name":"Magic Shield","requirements":{"Intelligence":10,"Faith":0,"Slots":1},"type":"Sorceries"},{"name":"Magic Weapon","requirements":{"Intelligence":10,"Faith":0,"Slots":1},"type":"Sorceries"},{"name":"Old Moonlight","requirements":{"Intelligence":25,"Faith":0,"Slots":1},"type":"Sorceries"},{"name":"Pestilent Mercury","requirements":{"Intelligence":0,"Faith":0,"Slots":0},"type":"Sorceries"},{"name":"Pestilent Mist","requirements":{"Intelligence":30,"Faith":0,"Slots":1},"type":"Sorceries"},{"name":"Repair","requirements":{"Intelligence":15,"Faith":0,"Slots":1},"type":"Sorceries"},{"name":"Snap Freeze","requirements":{"Intelligence":18,"Faith":0,"Slots":1},"type":"Sorceries"},{"name":"Soul Arrow","requirements":{"Intelligence":10,"Faith":0,"Slots":1},"type":"Sorceries"},{"name":"Soul Greatsword","requirements":{"Intelligence":22,"Faith":0,"Slots":1},"type":"Sorceries"},{"name":"Soul Spear","requirements":{"Intelligence":32,"Faith":0,"Slots":1},"type":"Sorceries"},{"name":"Soul Stream","requirements":{"Intelligence":45,"Faith":0,"Slots":2},"type":"Sorceries"},{"name":"Spook","requirements":{"Intelligence":10,"Faith":0,"Slots":1},"type":"Sorceries"},{"name":"Twisted Wall of Light","requirements":{"Intelligence":27,"Faith":0,"Slots":1},"type":"Sorceries"},{"name":"White Dragon Breath","requirements":{"Intelligence":50,"Faith":0,"Slots":1},"type":"Sorceries"},{"name":"Atonement","requirements":{"Intelligence":0,"Faith":18,"Slots":1},"type":"Miracles"},{"name":"Blessed Weapon","requirements":{"Intelligence":0,"Faith":15,"Slots":1},"type":"Miracles"},{"name":"Bountiful Light","requirements":{"Intelligence":0,"Faith":25,"Slots":1},"type":"Miracles"},{"name":"Bountiful Sunlight","requirements":{"Intelligence":0,"Faith":35,"Slots":2},"type":"Miracles"},{"name":"Caressing Tears","requirements":{"Intelligence":0,"Faith":12,"Slots":1},"type":"Miracles"},{"name":"Dark Blade","requirements":{"Intelligence":0,"Faith":25,"Slots":1},"type":"Miracles"},{"name":"Darkmoon Blade","requirements":{"Intelligence":0,"Faith":30,"Slots":1},"type":"Miracles"},{"name":"Dead Again","requirements":{"Intelligence":15,"Faith":23,"Slots":1},"type":"Miracles"},{"name":"Deep Protection","requirements":{"Intelligence":0,"Faith":20,"Slots":1},"type":"Miracles"},{"name":"Divine Pillars of Light","requirements":{"Intelligence":0,"Faith":30,"Slots":1},"type":"Miracles"},{"name":"Dorhys' Gnawing","requirements":{"Intelligence":0,"Faith":25,"Slots":1},"type":"Miracles"},{"name":"Emit Force","requirements":{"Intelligence":0,"Faith":18,"Slots":1},"type":"Miracles"},{"name":"Force","requirements":{"Intelligence":0,"Faith":12,"Slots":1},"type":"Miracles"},{"name":"Gnaw","requirements":{"Intelligence":0,"Faith":18,"Slots":1},"type":"Miracles"},{"name":"Great Heal","requirements":{"Intelligence":0,"Faith":25,"Slots":1},"type":"Miracles"},{"name":"Great Lightning Spear","requirements":{"Intelligence":0,"Faith":30,"Slots":1},"type":"Miracles"},{"name":"Great Magic Barrier","requirements":{"Intelligence":0,"Faith":25,"Slots":2},"type":"Miracles"},{"name":"Heal","requirements":{"Intelligence":0,"Faith":12,"Slots":1},"type":"Miracles"},{"name":"Heal Aid","requirements":{"Intelligence":0,"Faith":8,"Slots":1},"type":"Miracles"},{"name":"Homeward","requirements":{"Intelligence":0,"Faith":18,"Slots":1},"type":"Miracles"},{"name":"Lifehunt Scythe","requirements":{"Intelligence":0,"Faith":22,"Slots":1},"type":"Miracles"},{"name":"Lightning Arrow","requirements":{"Intelligence":0,"Faith":35,"Slots":1},"type":"Miracles"},{"name":"Lightning Blade","requirements":{"Intelligence":0,"Faith":30,"Slots":1},"type":"Miracles"},{"name":"Lightning Spear","requirements":{"Intelligence":0,"Faith":20,"Slots":1},"type":"Miracles"},{"name":"Lightning Stake","requirements":{"Intelligence":0,"Faith":35,"Slots":1},"type":"Miracles"},{"name":"Lightning Storm","requirements":{"Intelligence":0,"Faith":45,"Slots":2},"type":"Miracles"},{"name":"Magic Barrier","requirements":{"Intelligence":0,"Faith":15,"Slots":1},"type":"Miracles"},{"name":"Med Heal","requirements":{"Intelligence":0,"Faith":15,"Slots":1},"type":"Miracles"},{"name":"Projected Heal","requirements":{"Intelligence":0,"Faith":28,"Slots":1},"type":"Miracles"},{"name":"Replenishment","requirements":{"Intelligence":0,"Faith":15,"Slots":1},"type":"Miracles"},{"name":"Sacred Oath","requirements":{"Intelligence":0,"Faith":28,"Slots":2},"type":"Miracles"},{"name":"Seek Guidance","requirements":{"Intelligence":0,"Faith":12,"Slots":1},"type":"Miracles"},{"name":"Soothing Sunlight","requirements":{"Intelligence":0,"Faith":45,"Slots":1},"type":"Miracles"},{"name":"Sunlight Spear","requirements":{"Intelligence":0,"Faith":40,"Slots":1},"type":"Miracles"},{"name":"Tears of Denial","requirements":{"Intelligence":0,"Faith":15,"Slots":2},"type":"Miracles"},{"name":"Vow of Silence","requirements":{"Intelligence":0,"Faith":30,"Slots":2},"type":"Miracles"},{"name":"Way of White Corona","requirements":{"Intelligence":0,"Faith":18,"Slots":1},"type":"Miracles"},{"name":"Wrath of the Gods","requirements":{"Intelligence":0,"Faith":30,"Slots":2},"type":"Miracles"}]`;
const spells = JSON.parse(spellsData);

export default spells;
