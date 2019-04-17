const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});
var dict = {
	"Abyssal Cry": "20% increased Skill Effect Duration`n (1% per 1% Q)",
	"Added Chaos Damage Support": "10% increased Chaos Damage`n (0.5% per 1% Q)",
	"Added Cold Damage Support": "10% increased Cold Damage`n (0.5% per 1% Q)",
	"Added Fire Damage Support": "10% increased Fire Damage`n (0.5% per 1% Q)",
	"Added Lightning Damage Support": "10% increased Lightning Damage`n (0.5% per 1% Q)",
	"Additional Accuracy Support": "20% increased Accuracy Rating`n (1% per 1% Q)",
	"Advanced Traps Support": "10% increased Trap Damage`n (0.5% per 1% Q)",
	"Ancestral Call Support": "10% increased Attack Speed`n (0.5% per 1% Q)",
	"Ancestral Protector": "20% increased Totem Damage`n (1% per 1% Q)",
	"Ancestral Warchief": "20% increased Totem Damage`n (1% per 1% Q)",
	"Anger": "20% increased Area of Effect`n (1% per 1% Q)",
	"Animate Guardian": "Minions have 40% increased Movement Speed`n (2% per 1% Q)",
	"Animate Weapon": "Minions have 40% increased Movement Speed`n (2% per 1% Q)",
	"Arc": "10% chance to Shock enemies`n (0.5% per 1% Q)",
	"Arcane Surge Support": "10% increased Spell Damage`n (0.5% per 1% Q)",
	"Arctic Armour": "20% increased Skill Effect Duration`n (1% per 1% Q)",
	"Arctic Breath": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Armageddon Brand": "10% increased Cast Speed`n (0.5% per 1% Q)",
	"Assassin's Mark": "Cursed enemies have a 10% chance to grant a Power Charge when slain`n (0.5% per 1% Q)",
	"Ball Lightning": "20% increased Lightning Damage`n (1% per 1% Q)",
	"Barrage": "10% increased Projectile Damage`n (0.5% per 1% Q)",
	"Bear Trap": "20% increased Physical Damage`n (1% per 1% Q)",
	"Blade Flurry": "10% increased Attack Speed`n (0.5% per 1% Q)",
	"Blade Vortex": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Bladefall": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Blasphemy Support": "10% increased Effect of Supported Curses`n (0.5% per 1% Q)",
	"Blast Rain": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Blight": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Blind Support": "20% increased Blinding duration`n (1% per 1% Q)",
	"Blink Arrow": "30% increased Arrow Speed`n (1.5% per 1% Q)",
	"Block Chance Reduction Support": "5% reduced Enemy Block Chance`n (0.25% per 1% Q)",
	"Blood Magic Support": "10% reduced Mana Cost`n (0.5% per 1% Q)",
	"Blood Rage": "5% increased Attack Speed`n (0.25% per 1% Q)",
	"Bloodlust Support": "10% increased Melee Damage against Bleeding Enemies`n (0.5% per 1% Q)",
	"Bodyswap": "10% increased Cast Speed`n (0.5% per 1% Q)",
	"Bone Offering": "10% increased Skill Effect Duration`n (0.5% per 1% Q)",
	"Bonechill Support": "20% increased Chill Duration on Enemies`n (1% per 1% Q)",
	"Brand Recall": "Brands gain 20% increased Attachment Range`n (1% per 1% Q)",
	"Brutality Support": "10% increased Physical Damage`n (0.5% per 1% Q)",
	"Burning Arrow": "60% increased Ignite Duration on enemies`n (3% per 1% Q)",
	"Burning Damage Support": "10% increased Burning Damage`n (0.5% per 1% Q)",
	"Cast On Critical Strike Support": "20% increased Critical Strike Chance`n (1% per 1% Q)",
	"Cast on Death Support": "60% increased Area of Effect while Dead`n (3% per 1% Q)",
	"Cast on Melee Kill Support": "10% increased Damage`n (0.5% per 1% Q)",
	"Cast when Damage Taken Support": "10% increased Damage`n (0.5% per 1% Q)",
	"Cast when Stunned Support": "10% increased Damage`n (0.5% per 1% Q)",
	"Cast while Channelling Support": "10% increased Damage`n (0.5% per 1% Q)",
	"Caustic Arrow": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Chain Support": "20% increased Projectile Speed`n (1% per 1% Q)",
	"Chance to Bleed Support": "Supported Attacks deal 10% increased Damage with Bleeding`n (0.5% per 1% Q)",
	"Chance to Flee Support": "20% chance to Cause Monsters to Flee`n (1% per 1% Q)",
	"Charged Dash": "10% increased Attack Speed`n (0.5% per 1% Q)",
	"Charged Traps Support": "10% increased Trap Damage`n (0.5% per 1% Q)",
	"Clarity": "20% increased Area of Effect`n (1% per 1% Q)",
	"Cleave": "10% increased Attack Speed`n (0.5% per 1% Q)",
	"Cluster Traps Support": "10% increased Trap Damage`n (0.5% per 1% Q)",
	"Cold Penetration Support": "10% increased Cold Damage`n (0.5% per 1% Q)",
	"Cold Snap": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Cold to Fire Support": "10% increased Cold Damage`n 10% increased Fire Damage`n (0.5% per 1% Q)",
	"Combustion Support": "10% increased Fire Damage`n (0.5% per 1% Q)",
	"Concentrated Effect Support": "10% increased Area Damage`n (0.5% per 1% Q)",
	"Conductivity": "Shocks on Cursed enemies have 20% increased Duration`n (1% per 1% Q)",
	"Consecrated Path": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Contagion": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Controlled Destruction Support": "10% increased Spell Damage`n (0.5% per 1% Q)",
	"Conversion Trap": "20% increased Skill Effect Duration`n (1% per 1% Q)",
	"Convocation": "20% increased Skill Effect Duration`n 20% increased Cooldown Recovery Speed`n (1% per 1% Q)",
	"Cremation": "20% increased Fire Damage`n (1% per 1% Q)",
	"Culling Strike Support": "10% increased Attack Speed`n 10% increased Cast Speed`n (0.5% per 1% Q)",
	"Curse On Hit Support": "10% increased Effect of Supported Curses`n (0.5% per 1% Q)",
	"Cyclone": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Damage on Full Life Support": "10% increased Damage`n (0.5% per 1% Q)",
	"Dark Pact": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Deadly Ailments Support": "10% increased Damage over Time`n (0.5% per 1% Q)",
	"Decay Support": "10% increased Chaos Damage`n (0.5% per 1% Q)",
	"Decoy Totem": "20% increased totem life`n (1% per 1% Q)",
	"Desecrate": "20% increased Cast Speed`n (1% per 1% Q)",
	"Despair": "Cursed enemies take 10% increased Damage from Damage Over Time effects`n (0.5% per 1% Q)",
	"Determination": "20% increased Area of Effect`n (1% per 1% Q)",
	"Detonate Dead": "10% increased Cast Speed`n (0.5% per 1% Q)",
	"Detonate Mines": "100% increased Cast Speed`n (5% per 1% Q)",
	"Devouring Totem": "20% increased totem life`n (1% per 1% Q)",
	"Discharge": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Discipline": "20% increased Area of Effect`n (1% per 1% Q)",
	"Dominating Blow": "Minions deal 10% increased Damage`n (0.5% per 1% Q)",
	"Double Strike": "10% increased Attack Speed`n (0.5% per 1% Q)",
	"Dread Banner": "10% increased effect of Aura`n (0.5% per 1% Q)",
	"Dual Strike": "10% increased Attack Speed`n (0.5% per 1% Q)",
	"Earthquake": "20% increased Physical Damage`n (1% per 1% Q)",
	"Efficacy Support": "10% increased Damage over Time`n (0.5% per 1% Q)",
	"Elemental Damage with Attacks Support": "10% increased Elemental Damage with Attack Skills`n (0.5% per 1% Q)",
	"Elemental Focus Support": "10% increased Elemental Damage`n (0.5% per 1% Q)",
	"Elemental Hit": "20% increased Elemental Damage`n (1% per 1% Q)",
	"Elemental Proliferation Support": "10% increased Duration of Elemental Ailments on Enemies`n (0.5% per 1% Q)",
	"Elemental Weakness": "Cursed enemies have -5% to Elemental Resistances`n (0.25% per 1% Q)",
	"Empower Support": "This Gem gains 100% increased Experience`n (5% per 1% Q)",
	"Endurance Charge on Melee Stun Support": "20% increased Stun Duration on Enemies`n (1% per 1% Q)",
	"Enduring Cry": "60% increased Area of Effect`n (3% per 1% Q)",
	"Enfeeble": "Cursed enemies have 10% reduced Accuracy Rating`n Cursed enemies have 10% reduced Critical Strike Chance`n (0.5% per 1% Q)",
	"Enhance Support": "This Gem gains 100% increased Experience`n (5% per 1% Q)",
	"Enlighten Support": "This Gem gains 100% increased Experience`n (5% per 1% Q)",
	"Essence Drain": "20% increased Chaos Damage`n (1% per 1% Q)",
	"Ethereal Knives": "20% increased Projectile Speed`n (1% per 1% Q)",
	"Explosive Arrow": "20% chance to Ignite enemies`n (1% per 1% Q)",
	"Explosive Trap": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Faster Attacks Support": "10% increased Attack Speed`n (0.5% per 1% Q)",
	"Faster Casting Support": "10% increased Cast Speed`n (0.5% per 1% Q)",
	"Faster Projectiles Support": "10% increased Attack Speed`n 10% increased Cast Speed`n (0.5% per 1% Q)",
	"Fire Nova Mine": "20% increased Fire Damage`n (1% per 1% Q)",
	"Fire Penetration Support": "10% increased Fire Damage`n (0.5% per 1% Q)",
	"Fire Trap": "20% increased Fire Damage`n (1% per 1% Q)",
	"Fireball": "10% chance to Ignite enemies`n (0.5% per 1% Q)",
	"Firestorm": "20% increased Damage`n (1% per 1% Q)",
	"Flame Dash": "20% increased Cooldown Recovery Speed`n (1% per 1% Q)",
	"Flame Surge": "10% increased Cast Speed`n (0.5% per 1% Q)",
	"Flame Totem": "20% increased totem life`n (1% per 1% Q)",
	"Flameblast": "20% increased Damage`n (1% per 1% Q)",
	"Flamethrower Trap": "20% increased Fire Damage`n (1% per 1% Q)",
	"Flammability": "Ignite on Cursed enemies has 10% increased Duration`n (0.5% per 1% Q)",
	"Flesh Offering": "10% increased Skill Effect Duration`n (0.5% per 1% Q)",
	"Flicker Strike": "20% increased Damage`n (1% per 1% Q)",
	"Fork Support": "10% increased Projectile Damage`n (0.5% per 1% Q)",
	"Fortify Support": "10% increased Fortify duration`n (0.5% per 1% Q)",
	"Freeze Mine": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Freezing Pulse": "40% increased Projectile Speed`n (2% per 1% Q)",
	"Frenzy": "10% increased Attack Speed`n (0.5% per 1% Q)",
	"Frost Blades": "20% increased Projectile Damage`n (1% per 1% Q)",
	"Frost Bomb": "20% increased Cold Damage`n (1% per 1% Q)",
	"Frost Wall": "20% increased Skill Effect Duration`n (1% per 1% Q)",
	"Frostbite": "Freezes on Cursed enemies have 20% increased Duration`n (1% per 1% Q)",
	"Frostbolt": "20% increased Cold Damage`n (1% per 1% Q)",
	"Generosity Support": "40% increased Aura Area of Effect`n (2% per 1% Q)",
	"Glacial Cascade": "20% increased Damage`n (1% per 1% Q)",
	"Glacial Hammer": "40% increased Chill Duration on enemies`n 20% increased Freeze Duration on enemies`n (2% / 1% per 1% Q)",
	"Grace": "20% increased Area of Effect`n (1% per 1% Q)",
	"Greater Multiple Projectiles Support": "10% increased Attack Speed`n 10% increased Cast Speed`n (0.5% per 1% Q)",
	"Ground Slam": "30% increased Stun Duration on enemies`n (1.5% per 1% Q)",
	"Haste": "20% increased Area of Effect`n (1% per 1% Q)",
	"Hatred": "20% increased Area of Effect`n (1% per 1% Q)",
	"Heavy Strike": "20% increased Stun Duration on enemies`n (1% per 1% Q)",
	"Herald of Agony": "20% increased Minion Movement Speed`n (1% per 1% Q)",
	"Herald of Ash": "15% increased Fire Damage`n (0.75% per 1% Q)",
	"Herald of Ice": "15% increased Cold Damage`n (0.75% per 1% Q)",
	"Herald of Purity": "20% increased Minion Movement Speed`n (1% per 1% Q)",
	"Herald of Thunder": "15% increased Lightning Damage`n (0.75% per 1% Q)",
	"Hypothermia Support": "30% increased Chill Duration on Enemies`n (1.5% per 1% Q)",
	"Ice Bite Support": "20% increased Damage with Hits against Frozen Enemies`n (1% per 1% Q)",
	"Ice Crash": "20% increased Cold Damage`n (1% per 1% Q)",
	"Ice Nova": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Ice Shot": "20% increased Cold Damage`n (1% per 1% Q)",
	"Ice Spear": "40% increased Projectile Speed`n (2% per 1% Q)",
	"Ice Trap": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Ignite Proliferation Support": "10% increased Fire Damage`n (0.5% per 1% Q)",
	"Immolate Support": "10% increased Fire Damage`n (0.5% per 1% Q)",
	"Immortal Call": "40% increased Cast Speed`n (2% per 1% Q)",
	"Incinerate": "20% increased Fire Damage`n (1% per 1% Q)",
	"Increased Area of Effect Support": "10% increased Area Damage`n (0.5% per 1% Q)",
	"Increased Critical Damage Support": "+15% to Critical Strike Multiplier`n (0.75% per 1% Q)",
	"Increased Critical Strikes Support": "20% increased Critical Strike Chance`n (1% per 1% Q)",
	"Increased Duration Support": "10% increased Skill Effect Duration`n (0.5% per 1% Q)",
	"Infernal Blow": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Innervate Support": "30% increased Shock Duration on Enemies`n (1.5% per 1% Q)",
	"Iron Grip Support": "10% increased Projectile Damage`n (0.5% per 1% Q)",
	"Iron Will Support": "10% increased Spell Damage`n (0.5% per 1% Q)",
	"Item Quantity Support": "7% increased Quantity of Items Dropped by Enemies Slain`n (0.35% per 1% Q)",
	"Item Rarity Support": "10% increased Rarity of Items Dropped by Enemies Slain`n (0.5% per 1% Q)",
	"Kinetic Blast": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Knockback Support": "10% chance to Knock Enemies Back on hit`n (0.5% per 1% Q)",
	"Lacerate": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Lancing Steel": "20% chance to Impale Enemies on Hit`n (1% per 1% Q)",
	"Leap Slam": "10% chance to Knock Enemies Back on hit`n (0.5% per 1% Q)",
	"Less Duration Support": "10% reduced Skill Effect Duration`n (0.5% per 1% Q)",
	"Lesser Multiple Projectiles Support": "10% increased Attack Speed`n 10% increased Cast Speed`n (0.5% per 1% Q)",
	"Lesser Poison Support": "10% increased Damage with Poison`n (0.5% per 1% Q)",
	"Life Gain on Hit Support": "+10 Life gained for each Enemy hit by Attacks`n (0.5 per 1% Q)",
	"Life Leech Support": "10% increased Life Leeched per second`n (0.5% per 1% Q)",
	"Lightning Arrow": "10% chance to Shock enemies`n (0.5% per 1% Q)",
	"Lightning Penetration Support": "10% increased Lightning Damage`n (0.5% per 1% Q)",
	"Lightning Spire Trap": "20% chance to Shock enemies`n (1% per 1% Q)",
	"Lightning Strike": "20% increased Lightning Damage`n (1% per 1% Q)",
	"Lightning Tendrils": "20% increased Lightning Damage`n (1% per 1% Q)",
	"Lightning Trap": "20% increased Lightning Damage`n 10% increased Effect of Shock`n (1% / 0.5% per 1% Q)",
	"Lightning Warp": "20% increased Cast Speed`n (1% per 1% Q)",
	"Magma Orb": "20% increased Damage`n (1% per 1% Q)",
	"Maim Support": "10% increased Physical Damage`n (0.5% per 1% Q)",
	"Mana Leech Support": "10% increased Mana Leeched per second`n (0.5% per 1% Q)",
	"Melee Physical Damage Support": "10% increased Melee Physical Damage`n (0.5% per 1% Q)",
	"Melee Splash Support": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Minefield Support": "20% increased Mine Detonation Area of Effect`n (1% per 1% Q)",
	"Minion and Totem Elemental Resistance Support": "Totems and Minions summoned by Supported Skills`nhave +10% Fire/Cold/Lightning Resistance`n (0.5% per 1% Q)",
	"Minion Damage Support": "15% increased Minion Damage`n (0.75% per 1% Q)",
	"Minion Life Support": "15% increased Minion maximum Life`n (0.75% per 1% Q)",
	"Minion Speed Support": "10% increased Minion Movement Speed`n (0.5% per 1% Q)",
	"Mirage Archer Support": "10% increased Attack Damage`n (0.5% per 1% Q)",
	"Mirror Arrow": "30% increased Arrow Speed`n (1.5% per 1% Q)",
	"Molten Shell": "20% chance to Ignite enemies`n (1% per 1% Q)",
	"Molten Strike": "20% increased Fire Damage`n (1% per 1% Q)",
	"Multiple Totems Support": "20% increased Totem Placement speed`n (1% per 1% Q)",
	"Multiple Traps Support": "20% increased Trap Trigger Area of Effect`n (1% per 1% Q)",
	"Multistrike Support": "10% increased Melee Physical Damage`n (0.5% per 1% Q)",
	"Onslaught Support": "5% increased Attack and Cast Speed`n (0.25% per 1% Q)",
	"Orb of Storms": "20% increased Lightning Damage`n (1% per 1% Q)",
	"Phase Run": "10% increased Movement Speed`n (0.5% per 1% Q)",
	"Physical to Lightning Support": "10% increased Physical Damage`n 10% increased Lightning Damage`n (0.5% per 1% Q)",
	"Pierce Support": "10% increased Projectile Damage`n (0.5% per 1% Q)",
	"Poacher's Mark": "Cursed enemies have a 10% chance to grant a Frenzy Charge when slain`n (0.5% per 1% Q)",
	"Point Blank Support": "10% increased Projectile Damage`n (0.5% per 1% Q)",
	"Poison Support": "10% increased Damage with Poison`n (0.5% per 1% Q)",
	"Portal": "60% increased Cast Speed`n (3% per 1% Q)",
	"Power Charge On Critical Support": "20% increased Critical Strike Chance`n (1% per 1% Q)",
	"Power Siphon": "20% increased Damage`n (1% per 1% Q)",
	"Projectile Weakness": "Cursed enemies take 10% increased Damage from Projectile Hits`n (0.5% per 1% Q)",
	"Puncture": "20% increased Skill Effect Duration`n (1% per 1% Q)",
	"Punishment": "Cursed enemies grant 5% increased Attack Speed on Melee hit`n (0.25% per 1% Q)",
	"Purity of Elements": "20% increased Area of Effect`n (1% per 1% Q)",
	"Purity of Fire": "20% increased Area of Effect`n (1% per 1% Q)",
	"Purity of Ice": "20% increased Area of Effect`n (1% per 1% Q)",
	"Purity of Lightning": "20% increased Area of Effect`n (1% per 1% Q)",
	"Rain of Arrows": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Raise Spectre": "20% increased Minion Movement Speed`n (1% per 1% Q)",
	"Raise Zombie": "20% increased Minion Maximum Life`n 20% increased Minion Movement Speed`n (1% per 1% Q)",
	"Rallying Cry": "30% increased Skill Effect Duration`n (1.5% per 1% Q)",
	"Ranged Attack Totem Support": "20% increased Totem Placement speed`n (1% per 1% Q)",
	"Reave": "10% increased Attack Speed`n (0.5% per 1% Q)",
	"Reckoning": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Reduced Mana Support": "5% reduced Mana Cost`n (0.25% per 1% Q)",
	"Rejuvenation Totem": "60% increased Aura Area of Effect`n (3% per 1% Q)",
	"Remote Mine Support": "10% increased Mine Laying Speed`n (0.5% per 1% Q)",
	"Righteous Fire": "20% increased Spell Damage`n (1% per 1% Q)",
	"Riposte": "20% increased Damage`n (1% per 1% Q)",
	"Ruthless Support": "10% increased Attack Damage`n (0.5% per 1% Q)",
	"Scorching Ray": "10% increased beam length`n (0.5% per 1% Q)",
	"Scourge Arrow": "20% increased Projectile Speed`n (1% per 1% Q)",
	"Searing Bond": "20% increased totem life`n (1% per 1% Q)",
	"Seismic Trap": "20% increased Physical Damage`n (1% per 1% Q)",
	"Shattering Steel": "20% increased Impale Effect`n (1% per 1% Q)",
	"Shield Charge": "20% increased Damage`n (1% per 1% Q)",
	"Shock Nova": "40% increased Shock Duration on enemies`n (2% per 1% Q)",
	"Shockwave Totem": "20% increased totem life`n (1% per 1% Q)",
	"Shrapnel Shot": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Siege Ballista": "20% increased Totem Placement speed`n (1% per 1% Q)",
	"Siphoning Trap": "20% increased Effect of Chill`n (1% per 1% Q)",
	"Slower Projectiles Support": "10% increased Projectile Damage`n (0.5% per 1% Q)",
	"Smite": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Smoke Mine": "20% increased Area of Effect`n (1% per 1% Q)",
	"Spark": "20% increased Projectile Speed`n (1% per 1% Q)",
	"Spectral Shield Throw": "20% increased Projectile Damage`n (1% per 1% Q)",
	"Spectral Throw": "10% increased Attack Speed`n (0.5% per 1% Q)",
	"Spell Cascade Support": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Spell Echo Support": "10% increased Spell Damage`n (0.5% per 1% Q)",
	"Spell Totem Support": "20% increased Totem Placement speed`n (1% per 1% Q)",
	"Spirit Offering": "10% increased Skill Effect Duration`n (0.5% per 1% Q)",
	"Split Arrow": "10% increased Attack Speed`n (0.5% per 1% Q)",
	"Static Strike": "20% chance to Shock enemies`n (1% per 1% Q)",
	"Storm Barrier Support": "20% chance to Gain a Power Charge when hit while Channelling Supported Skills`n (1% per 1% Q)",
	"Storm Brand": "10% increased Cast Speed`n (0.5% per 1% Q)",
	"Storm Burst": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Storm Call": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Stun Support": "30% increased Stun Duration on Enemies`n (1.5% per 1% Q)",
	"Summon Chaos Golem": "20% increased Minion Maximum Life`n 20% increased Minion Damage`n (1% per 1% Q)",
	"Summon Flame Golem": "20% increased Minion Maximum Life`n 20% increased Minion Damage`n (1% per 1% Q)",
	"Summon Holy Relic": "Minions have 10% increased Area of Effect`n (0.5% per 1% Q)",
	"Summon Ice Golem": "20% increased Minion Maximum Life`n 20% increased Minion Damage`n (1% per 1% Q)",
	"Summon Lightning Golem": "20% increased Minion Maximum Life`n 20% increased Minion Damage`n (1% per 1% Q)",
	"Summon Phantasm on Kill Support": "10% chance to Summon a Phantasm when Supported Skills",
	"Summon Raging Spirit": "20% increased Minion Movement Speed`n (1% per 1% Q)",
	"Summon Skeleton": "Minions deal 20% increased Damage`n (1% per 1% Q)",
	"Summon Stone Golem": "20% increased Minion Maximum Life`n 20% increased Minion Damage`n (1% per 1% Q)",
	"Sunder": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Sweep": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Swift Affliction Support": "10% increased Damage over Time`n (0.5% per 1% Q)",
	"Tectonic Slam": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Tempest Shield": "20% increased Lightning Damage`n (1% per 1% Q)",
	"Temporal Chains": "Cursed Enemies have 10% less Action Speed`n (0.5% per 1% Q)",
	"Tornado Shot": "20% increased Projectile Damage`n (1% per 1% Q)",
	"Toxic Rain": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Trap and Mine Damage Support": "10% increased Damage`n (0.5% per 1% Q)",
	"Trap Support": "10% increased Trap Throwing Speed`n (0.5% per 1% Q)",
	"Unbound Ailments Support": "10% increased Duration of Ailments on Enemies`n (0.5% per 1% Q)",
	"Unearth": "10% increased Cast Speed`n (0.5% per 1% Q)",
	"Vaal Ancestral Warchief": "20% increased Totem Damage`n (1% per 1% Q)",
	"Vaal Arc": "30% increased Shock Duration on enemies`n (1.5% per 1% Q)",
	"Vaal Blade Vortex": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Vaal Blight": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Vaal Breach": "60% increased Cast Speed`n (3% per 1% Q)",
	"Vaal Burning Arrow": "60% increased Ignite Duration on enemies`n (3% per 1% Q)",
	"Vaal Clarity": "20% increased Area of Effect`n (1% per 1% Q)",
	"Vaal Cold Snap": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Vaal Cyclone": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Vaal Detonate Dead": "20% increased Area Damage`n (1% per 1% Q)",
	"Vaal Discipline": "20% increased Area of Effect`n (1% per 1% Q)",
	"Vaal Double Strike": "10% increased Attack Speed`n (0.5% per 1% Q)",
	"Vaal Earthquake": "20% increased Physical Damage`n (1% per 1% Q)",
	"Vaal Fireball": "10% chance to Ignite enemies`n (0.5% per 1% Q)",
	"Vaal Flameblast": "20% increased Damage`n (1% per 1% Q)",
	"Vaal Glacial Hammer": "40% increased Chill Duration on enemies`n 20% increased Freeze Duration on enemies`n (2% / 1% per 1% Q)",
	"Vaal Grace": "20% increased Area of Effect`n (1% per 1% Q)",
	"Vaal Ground Slam": "30% increased Stun Duration on enemies`n (1.5% per 1% Q)",
	"Vaal Haste": "20% increased Area of Effect`n (1% per 1% Q)",
	"Vaal Ice Nova": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Vaal Immortal Call": "40% increased Cast Speed`n (2% per 1% Q)",
	"Vaal Impurity of Fire": "20% increased Area of Effect`n (1% per 1% Q)",
	"Vaal Impurity of Ice": "20% increased Area of Effect`n (1% per 1% Q)",
	"Vaal Impurity of Lightning": "20% increased Area of Effect`n (1% per 1% Q)",
	"Vaal Lightning Strike": "20% increased Lightning Damage`n (1% per 1% Q)",
	"Vaal Lightning Trap": "Shocked Ground causes 5% increased Damage taken`n (0.25% per 1% Q)",
	"Vaal Lightning Warp": "20% increased Cast Speed`n (1% per 1% Q)",
	"Vaal Molten Shell": "20% chance to Ignite enemies`n (1% per 1% Q)",
	"Vaal Power Siphon": "20% increased Damage`n (1% per 1% Q)",
	"Vaal Rain of Arrows": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Vaal Reave": "10% increased Attack Speed`n (0.5% per 1% Q)",
	"Vaal Righteous Fire": "20% increased Burning Damage`n (1% per 1% Q)",
	"Vaal Spark": "20% increased Projectile Speed`n (1% per 1% Q)",
	"Vaal Spectral Throw": "10% increased Attack Speed`n (0.5% per 1% Q)",
	"Vaal Storm Call": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Vaal Summon Skeletons": "Minions deal 20% increased Damage`n (1% per 1% Q)",
	"Vengeance": "10% chance to Trigger this Skill when Hit`n (0.5% per 1% Q)",
	"Vicious Projectiles Support": "10% increased Physical Damage`n (0.5% per 1% Q)",
	"Vigilant Strike": "20% increased Fortify duration`n (1% per 1% Q)",
	"Vile Toxins Support": "20% increased Damage with Poison`n (1% per 1% Q)",
	"Viper Strike": "10% increased Attack Speed`n (0.5% per 1% Q)",
	"Vitality": "20% increased Area of Effect`n (1% per 1% Q)",
	"Void Manipulation Support": "10% increased Chaos Damage`n (0.5% per 1% Q)",
	"Volatile Dead": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Volley Support": "20% increased Projectile Damage`n (1% per 1% Q)",
	"Vortex": "10% increased Area of Effect`n (0.5% per 1% Q)",
	"Vulnerability": "Cursed Enemies have 10% chance to Bleed when Hit by Attacks`n (0.5% per 1% Q)",
	"War Banner": "10% increased effect of Aura`n (0.5% per 1% Q)",
	"Warlord's Mark": "Cursed enemies have a 10% chance to grant an Endurance Charge when slain`n (0.5% per 1% Q)",
	"Whirling Blades": "10% increased Attack Speed`n (0.5% per 1% Q)",
	"Wild Strike": "20% increased Elemental Damage`n (1% per 1% Q)",
	"Winter Orb": "10% increased Cast Speed`n (0.5% per 1% Q)",
	"Wither": "20% increased Skill Effect Duration`n (1% per 1% Q)",
	"Withering Touch Support": "10% increased Chaos Damage`n (0.5% per 1% Q)",
	"Wrath": "20% increased Area of Effect`n (1% per 1% Q)"
};

client.on('message', message => {
if (message.content === '!ping') {
	// send back "Pong." to the channel the message was sent in
	message.channel.send('pong');
}
for(var key in dict) {
	var value = dict[key];
	if (message.content === '!'+key) {
		message.channel.send(value);
}
}

});
client.login('NTUyODIxMDY0NzU3OTM2MTI4.D2Hb2A.3YzPnkkUdgxlthwiY0K8YnERmJw');