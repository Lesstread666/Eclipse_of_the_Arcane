// ASSIGNMENT 2 - TEXT GAME
// "git commit -m "first commit"

let playerName;
let spells = [];
let playerHP = 120;
let playerDarkPoints = 0;


const giveName = () => {
    playerName = prompt(`                                          Hello dear player! 
    Before we begin... what name do you want for your character? 
    Else, we already prepared the name for the character,
    for that - don't write anything or press "ok"

    Remember! If you will press "Cancel" it will quit the game!`)

    if (playerName === null) {
        quitGame();
        return;
    } else if (playerName === "") {
        playerName = "Dorian";
        alert(`Very well. You shall be known as ${playerName}.`)
    } else {
        alert(`Welcome ${playerName}. You journey begins...`)
    }
}
giveName()

const quitGame = () => {
    alert(`                     You have turned away from your path.
                                    The Eclipse spreads...
                                        GAME OVER`)
}

const prologue = () => {
    alert(`                                     ===PROLOGUE===
                             ~~~The Whisper in the Halls~~~

    The Astravale Academy of Arcane Studies rises upon crystalline cliffs, its towers crowned with silver runes that shimmer beneath moonlight.

    For centuries, it has been a sanctuary of learning — a place where aspiring mages shape the unseen forces of the world.

    Yet lately, something has changed.

    /Students speak of whispers drifting through empty corridors./
    /Candles flicker without a breeze./
    /Shadows stretch a second too long./

    And at the heart of these disturbances… a single word echoes:

    Eclipse...`)

    alert(`One evening, you are summoned to the private study of Professor Seraphine, a mage known for both wisdom and unwavering calm. Her expression, however, betrays concern.

    *Seraphine:
    |${playerName}... I must speak plainly. A seal placed upon an ancient darkness is weakening.| 
    |If it breaks, Astravale — and perhaps the world beyond — will fall into Shadow.|

    She places a worn tome before you — or rather, what remains of one.
    The Grimoire of Aether — a legendary source of pure arcane knowledge — is shattered, its pages scattered and guarded by forces that have already begun to awaken.

    *Seraphine:
    |Three fragments must be reclaimed. But power alone will not be enough.| 
    |Your choices will shape you — for the Arcane reflects the heart that wields it.|`)

    alert(`She steps back, letting the weight of her words rest upon you.

    *Seraphine:
    |This journey will test your will, your courage, and your very essence.| 
    |Walk the path of light… or be consumed by the Eclipse.|

    You take a breath.
    Your story begins.`)
}
prologue();

const chapter_one = () => {

    const intro_chapter_one = () => {
        alert(`                                     ===CHAPTER I===
                            ~~~Greenhouse training~~~
You follow Professor Alderin, the quiet botanist mage, to the academy's greenhouse.  
Sunlight streams through enchanted glass, illuminating rows of magical plants that sway gently, even without a breeze.

*Professor Alderin:
|Welcome, ${playerName}. Today you will practice three essential spells.| 
|Mastery of these will shape your arcane journey.|

He points to three glowing symbols in the air: "Lumos", "Aegis", and "Vireo".`);

        spells.push(
            { name: "Lumos", description: "Creates light. Useful for dark areas and revealing hidden things.", practiced: false },
            { name: "Aegis", description: "A protective shield that blocks minor attacks or hazards.", practiced: false },
            { name: "Vireo", description: "A nature spell to accelerate plant growth or manipulate plants.", practiced: false }
        );

        alert(`You have now learned all three spells: Lumos, Aegis, Vireo.
Before facing real challenges, you must practice them carefully.
Remember, mistakes in real battles could have serious consequences!`);
    }
    intro_chapter_one();

    const training_chapter_one = () => {
        let allPracticed = false;

        while (!allPracticed) {
            let input = prompt(`Cast any of your three learned spells: Lumos, Aegis, or Vireo`);

            if (input === null) {
                quitGame();
                return;
            }

            let spellFound = false;

            for (let i = 0; i < spells.length; i++) {
                if (spells[i].name === input) {
                    spellFound = true;
                    if (!spells[i].practiced) {
                        spells[i].practiced = true;
                        alert(`Success! ${spells[i].name} works perfectly. This spell ${spells[i].description}`);
                    } else {
                        alert(`You have already practiced ${input}. Try another spell.`);
                    }
                    break;
                }
            }

            if (!spellFound) {
                alert(`Incorrect spelling or unknown spell. Please try again.`);
                continue;
            }

            allPracticed = true;
            for (let i = 0; i < spells.length; i++) {
                if (!spells[i].practiced) {
                    allPracticed = false;
                    break;
                }
            }
        }

        alert(`Professor Alderin nods approvingly.
Well done, ${playerName}. You have now mastered the basics.
Your first real journey awaits — the outskirts of the Cursed Village.
Take one of three artifacts, it will help you to find others`);
    }
    training_chapter_one();
}

const chapter_two = () => {

    const intro_chapter_two = () => {
        alert(`                                   ===CHAPTER II===
                              ~~~The Cursed Village~~~

You arrive at the outskirts of the Cursed Village. 
The air is thick with fog and the scent of decay. 
Shadows twist unnaturally along abandoned houses, and the faint sound of whispers tickles your ears.

Among the ruins, you hear a strange chant — a spell uttered in hushed tones.
Its name echoes in your mind: "Noctis...Noctis...Noctis....". 

You recall stories of this cursed spell: its power is immense, but its use carries a dark price. 
Those who wield it risk the pull of the Eclipse into their own soul.

Do you dare to use "Noctis" if the situation demands it? Its power may turn the tide of battle... but at what cost?`);

        spells.push({
            name: "Noctis",
            description: "A forbidden high-damage spell. Increases corruption when used.",
            practiced: false,
            cursed: true,
            damage: 40
        });

        alert(`You take cautious steps deeper into the village.
The fog parts — revealing a figure standing among shattered stone altars.

A tall, spectral being wrapped in torn ritual cloths and swirling black mist.
Its face is a hollow mask, with burning violet eyes staring into your soul.

It clutches a glowing shard — one of the artifact fragments you seek.

                                The Wraith of the Village.

                        Its presence alone chills your blood.`);
    }
    intro_chapter_two();

    const fight_chapter_two = () => {
        let bossName = "Wraith of the Village";
        let bossHP = 100;
        let bossAttacks = [
            { name: "Shadow Swipe", damage: 15 },
            { name: "Corrupted Howl", damage: 10 },
            { name: "Dark Pulse", damage: 20 }
        ];

        for (let i = 0; i < spells.length; i++) {
            if (spells[i].name === "Lumos") spells[i].damage = 10;
            if (spells[i].name === "Vireo") spells[i].damage = 15;
            if (spells[i].name === "Aegis") spells[i].damage = 0;
        }

        let aegisActive = false;

        alert(`=== COMBAT RULES ===

Your HP: ${playerHP}
${bossName} HP: ${bossHP}

¤ "Lumos" deals small light damage.
¤ "Vireo" deals moderate nature damage.
¤ "Aegis" reduces incoming damage by half for one turn.
¤ "Noctis" deals massive damage, but increases your corruption.

If you misspell a spell — you lose control of your magic and harm yourself!

Prepare to fight...`);

        while (playerHP > 0 && bossHP > 0) {
            let input = prompt(`You have ${playerHP} HP
Boss ${bossName} has ${bossHP} HP
*Cast your spell...*`);

            if (input === null) {
                quitGame();
                return;
            }

            let spell = null;
            for (let i = 0; i < spells.length; i++) {
                if (spells[i].name === input) {
                    spell = spells[i];
                    break;
                }
            }

            if (spell === null) {
                alert(`Your words falter...The spell turns on you!
You take 10 damage`);
                playerHP -= 10;
            } else if (spell.name === "Aegis") {
                aegisActive = true;
                alert(`A protective barrier surrounds you...Aegis is active`);
            } else if (spell.name === "Noctis") {
                bossHP -= spell.damage;
                playerDarkPoints += 15;
                alert(`You used the cursed spell *Noctis*
Damage dealt: ${spell.damage} 
Corruption increased...now: ${playerDarkPoints}`);
            } else {
                bossHP -= spell.damage;
                alert(`${spell.damage} strikes true!
Damage dealt: ${spell.damage}`);
            }

            if (bossHP <= 0) break;

            let randomBossAttackIndex = Math.floor(Math.random() * bossAttacks.length);
            let chosenAttack = bossAttacks[randomBossAttackIndex];
            let damage = chosenAttack.damage;

            if (aegisActive) {
                damage = Math.floor(damage / 2);
                aegisActive = false;
                alert(`Boss ${bossName} uses ${chosenAttack.name}
You take ${damage} damage! Aegis saved half damage! Now it fades.`);
            } else {
                alert(`Boss ${bossName} uses ${chosenAttack.name}
Since you didn't use shield from Aegis, you taking full damage of ${damage} from his attack `);
            }

            playerHP -= damage;
        }

        if (playerHP <= 0) {
            alert(`Your strength fades...
The ${bossName} looms over your fallen form
                            GAME OVER...`);
        } else {
            alert(`With a final cry, the ${bossName} dissipates into mist. 
Among the ashes, the second artifact shard gleams...
You also found two portions of healing, you picked them up and used one to heal all your lost health
                            VICTORY!!!`);
            playerHP = 120;
        }
    }
    fight_chapter_two();
}

const chapter_three = () => {

    const intro_chapter_three = () => {
        alert(`                                   ===CHAPTER III===
                              ~~~The Eclipse Cathedral~~~

With two fragments now in your possession, the path forward becomes unmistakable.

The final shard calls to you — not with light, but with a heavy pull
in the back of your mind... like a whisper behind your heartbeat.

It leads you through dead valleys and silent ruins,
until you reach a cathedral of obsidian stone.
Its gates stand open — not welcoming, but expecting.

Inside, the walls are covered in ancient murals — three circles of power,
each representing an artifact that maintains the balance between light and darkness.

Two circles now glow within your satchel.
The third remains dark — waiting.`);

        alert(`But something else waits as well.

A whisper crawls into your mind...

    "Eclipsis Sangris..."

A forbidden spell — one spoken of only in condemned texts.
A spell of overwhelming power, fueled not by mana... but by **your own lifeforce.**`);

        spells.push({
            name: "Eclipsis Sangris",
            description: "A catastrophic blood-ritual spell. Deals immense damage, but drains your HP and greatly increases corruption.",
            practiced: false,
            cursed: true,
            damage: 60
        });

        alert(`At the end of the cathedral, upon a shattered altar,
you see it — the final artifact fragment —
glowing like the dying ember of a star.

But it is not alone.

A massive figure slowly rises,
its form wrapped in eclipse-born shadow.
A guardian forged not of flesh, but sorrow.

Its eyes burn with violet flame, locked onto you.

To claim the final fragment,
you must survive the Harbinger of the Eclipse...`);
    }
    intro_chapter_three();

    const fight_chapter_three = () => {
        let bossName = "The Eclipse Harbinger";
        let bossHP = 260;

        let bossAttacks = [
            { name: "Void Rend", damage: 25 },
            { name: "Soul Shatter", damage: 30 },
            { name: "Starless Grasp", damage: 35 }
        ];

        let aegisActive = false;
        let healingPortion = 1;

        alert(`=== FINAL COMBAT ===

Remember:
• Lumos = light damage (small)
• Vireo = nature damage (medium)
• Aegis = shield, halves next damage
• Noctis = heavy damage, +15 corruption
• Eclipsis Sangris = **devastating damage**, +30 corruption
• Heal = 1 extra healing portion returns all HP to the maximum...better to use on a last breath...

One mistake could end everything.
The fate of the world hangs by a thread.`);

        while (playerHP > 0 && bossHP > 0) {
            let input = prompt(`    You have ${playerHP} HP
Boss ${bossName} has ${bossHP} HP
*Cast your spell...*`);

            if (input === null) {
                quitGame();
                return;
            }

            if (input === "Heal") {
                if (healingPortion > 0) {
                    healingPortion--;
                    playerHP = 120;
                    alert(`You quickly drink your healing potion.
Your wounds close — HP fully restored!
Healing potions left: ${healingPortion}`);
                } else {
                    alert(`You reach for a potion... but your pouch is empty.`);
                }
                continue;
            }

            let spell = null;
            for (let i = 0; i < spells.length; i++) {
                if (spells[i].name === input) {
                    spell = spells[i];
                    break;
                }
            }

            if (spell === null) {
                alert(`Your voice shakes... the magic backfires!
You take 10 damage.`);
                playerHP -= 10;
            } else if (spell.name === "Aegis") {
                aegisActive = true;
                alert(`A shimmering ward surrounds you... Aegis is active.`);
            } else if (spell.name === "Noctis") {
                bossHP -= spell.damage;
                playerDarkPoints += 15;
                alert(`Your shadow tears reality.
Damage: ${spell.damage}
Corruption rises... now: ${playerDarkPoints}`);
            } else if (spell.name === "Eclipsis Sangris") {
                bossHP -= spell.damage;
                playerDarkPoints += 30;
                alert(`You invoke *Eclipsis Sangris*...
Blood and moonlight howl together.
Damage: ${spell.damage}
Corruption surges... now: ${playerDarkPoints}`);
            } else {
                bossHP -= spell.damage;
                alert(`Your magic strikes true.
Damage dealt: ${spell.damage}`);
            }

            if (bossHP <= 0) break;

            let randomBossAttackIndex = Math.floor(Math.random() * bossAttacks.length);
            let chosenAttack = bossAttacks[randomBossAttackIndex];
            let damage = chosenAttack.damage;

            if (aegisActive) {
                damage = Math.floor(damage / 2);
                aegisActive = false;
                alert(`Boss ${bossName} uses ${chosenAttack.name}
You take ${damage} damage — Aegis halves the blow.`);
            } else {
                alert(`Boss ${bossName} uses ${chosenAttack.name}
You suffer ${damage} damage.`);
            }

            playerHP -= damage;
        }
    }
    fight_chapter_three();

    const endings_chapter_three = () => {
        if (playerHP <= 0) {
            alert(`You fall to your knees... your vision fades...
The world grows silent.

HEROIC DEATH ENDING.`);
            return;
        }

        if (playerDarkPoints >= 60) {
            alert(`As the Harbinger weakens, darkness stirs inside you.
The corruption claims your will.

You and the Harbinger merge into one eclipse.
The world drowns in endless night.

***TRUE CORRUPTION ENDING***`);
        } else if (playerDarkPoints >= 30) {
            alert(`You gather the last of your life to strike the final blow.
The Harbinger shatters—

—but so do you.

Your name will be remembered in light.

***HEROIC SACRIFICE ENDING***`);
        } else {
            alert(`Your magic shines brighter than the void itself.
The Harbinger disintegrates into fading dust.

You claim the FINAL ARTIFACT.
The world is saved.

***PURE LIGHT ENDING***`);
        }

        if (playerDarkPoints < 30) {
            playerHP = 120;
        }
    }
    endings_chapter_three();
}

const game = () => {
    chapter_one();
    chapter_two();
    chapter_three();
}
game();
