// This is a simple example dictionary.
const dictionary = new Set([
    "act", "lit", "rock", "grandpa", "sees", "june", "dark", "park", "the", "i", "lad", "acts", "adds", "all", "am", "an", "and", "are", "as", "ash", "asks", "at", "back", "backs", "bad", "band", "bandit", "bandits", "bang", "be", "bed", "beds", "begs", "bench", "bends", "benefit", "best", "big", "bin", "bins", "bit", "bits", "black", "blasts", "blinks", "box", "brags", "branch", "bring", "brings", "Brisk", "bucket", "bug", "bump", "bumps", "bunch", "bust", "but", "by", "cabin", "cabins", "call", "calls", "can", "cannot", "cash", "casts", "cat", "cats", "chant", "chat", "chatting", "check", "checks", "chest", "chin", "chops", "clap", "cops", "cot", "crack", "cracks", "crafts", "crash", "crisp", "cut", "cuts", "dad", "Dan", "dash", "day", "days", "deck", "deckman", "denim", "depth", "desk", "Dex", "did", "dig", "digging", "digs", "discuss", "dish", "do", "dock", "docks", "does", "down", "draft", "drafts", "drag", "drifts", "drill", "drink", "drinks", "drop", "drops", "duck", "dud", "dug", "eggs", "end", "ends", "epic", "ethics", "expects", "fall", "falls", "fan", "fangs", "fantastic", "fast", "fat", "fed", "fend", "fill", "fills", "filth", "finish", "finishing", "fish", "fists", "fits", "fix", "flag", "flaps", "flash", "flask", "flinch", "flings", "flop", "for", "forget", "forgets", "fresh", "from", "front", "fun", "fuss", "gag", "gang", "gasps", "get", "gets", "getting", "gift", "glad", "glum", "go", "gold", "got", "grab", "grabs", "grand", "grandkids", "grass", "grill", "grills", "grin", "grins", "grip", "grit", "grunts", "gut", "ha", "had", "ham", "hand", "hands", "hang", "hanging", "has", "have", "having", "he", "held", "helm", "helms", "help", "helping", "helpings", "helps", "her", "herself", "hey", "hid", "hill", "hills", "him", "himself", "hint", "hints", "his", "hiss", "hit", "hits", "hmm", "hops", "hot", "how", "huff", "hugs", "hums", "hunt", "hunting", "hunts", "hush", "hut", "I", "if", "ill", "in", "ink", "insist", "insists", "inspect", "inspects", "intend", "into", "is", "it", "its", "Jeb", "job", "jobs", "Josh", "jots", "jug", "jump", "jumps", "just", "kept", "kick", "kicks", "kid", "kids", "king", "land", "lands", "laps", "last", "left", "leg", "legs", "lent", "let", "lets", "licks", "lid", "lift", "lifts", "like", "limp", "lips", "List", "lock", "lockbox", "log", "long", "lost", "lot", "lots", "luck", "lug", "lumps", "lunch", "man", "map", "masks", "mass", "mast", "may", "me", "men", "mess", "met", "milk", "miss", "missing", "Mist", "mocks", "mop", "mopping", "mops", "most", "much", "must", "my", "myself", "nag", "nap", "naps", "neck", "next", "no", "nod", "nods", "not", "now", "O.K.", "odd", "of", "off", "oh", "old", "on", "onto", "or", "our", "out", "pack", "pad", "pal", "pals", "panic", "pants", "pass", "past", "path", "pats", "pay", "pen", "pick", "picks", "pig", "pit", "pits", "plan", "plans", "play", "plot", "plus", "pocket", "pockets", "pond", "pops", "pot", "press", "prints", "profits", "pub", "puff", "quest", "quests", "quick", "quit", "ran", "rat", "rats", "red", "rest", "rich", "rid", "rip-off", "rips", "rob", "Rock", "rocking", "rocks", "rubs", "run", "runs", "rush", "rust", "sack", "sad", "sand", "sank", "say", "says", "scam", "scans", "scoffs", "scrap", "scraps", "scrub", "scrubs", "scruff", "scuff", "scums", "selfish", "sells", "send", "sent", "set", "sets", "shall", "sham", "she", "shelf", "shift", "ship", "ships", "shock", "shop", "shops", "shot", "shrubs", "shrugs", "shut", "sick", "sink", "sinking", "sinks", "sip", "sips", "sit", "sits", "sitting", "skiff", "skiffs", "skip", "slink", "slinks", "slip", "slips", "smacks", "small", "smash", "smell", "smells", "snack", "snacks", "snap", "snaps", "sniff", "sniffs", "so", "son", "sonnet", "spend", "spent", "spill", "spills", "split", "splits", "spot", "spots", "springs", "sprint", "sprints", "stack", "stand", "stash", "stay", "step", "steps", "stick", "sticks", "still", "stink", "stinks", "stop", "stops", "straps", "stress", "stuck", "stuff", "stuffs", "such", "sun", "suspect", "swell", "swim", "tap", "taps", "tasks", "tell", "tells", "test", "thank", "thanks", "that", "The", "their", "them", "then", "there", "these", "they", "thin", "thing", "things", "think", "thinks", "this", "those", "thrill", "thud", "thump", "till", "tin", "tip", "tips", "to", "told", "top", "track", "traps", "trash", "treks", "trick", "tricks", "trips", "trots", "trust", "trusts", "tug", "tugs", "tum", "twig", "twist", "twists", "unless", "until", "up", "upset", "us", "valid", "visit", "vomits", "want", "wants", "was", "way", "we", "well", "went", "were", "west", "wet", "what", "when", "where", "which", "who", "why", "will", "wind", "winks", "wish", "with", "X", "yank", "yanks", "yell", "yelling", "yells", "yelps", "yes", "yet", "you", "your", "Zack", "zest", "zilch", "a", "any", "ask", "aww", "bag", "bags", "ball", "bammm", "bank", "Beck", "bell", "bet", "bib", "bikini", "bill", "blink", "blocks", "brick", "brink", "brrr", "Bud", "bugs", "buns", "camp", "cap", "chats", "checkout", "chill", "chills", "chip", "chips", "chop", "clams", "cliff", "clips", "cod", "crest", "cup", "dim", "dip", "dips", "doll", "dot", "dress", "ducks", "dump", "edit", "exit", "fact", "fell", "felt", "fig", "figs", "fin", "fit", "flat", "flocks", "forgot", "fret", "gap", "gas", "gills", "glints", "gray", "grunt", "gulp", "gum", "Gup", "half", "hangs", "hat", "hi", "hips", "hop", "hug", "hull", "imprint", "jellyfish", "jot", "Kent", "Kents", "kill", "Kim", "kit", "lap", "lay", "likes", "limit", "limps", "link", "look", "looks", "mall", "mask", "mends", "mint", "mix", "mom", "more", "Mr.", "Mrs.", "mud", "need", "needs", "nests", "net", "new", "nick", "nut", "nuts", "odds", "packs", "pan", "pets", "pill", "pinch", "pink", "plank", "plays", "prep", "pup", "rack", "rag", "ramp", "ray", "rents", "rests", "ring", "rings", "risk", "rug", "Sam", "shark", "shed", "shell", "shred", "shrimp", "siblings", "sift", "six", "skin", "slam", "sling", "snuck", "sobs", "some", "spell", "spends", "splash", "spray", "sprays", "spring", "stands", "stays", "strap", "string", "sunblock", "sunday", "sunset", "swam", "swims", "tall", "tan", "tank", "task", "ten", "tests", "thick", "ticks", "Tim", "time", "tint", "Tom", "ton", "too", "trip", "truck", "trunk", "trunks", "van", "vet", "yaps", "yuck", "yum", "zags", "zigs", "zips", "basket", "belt", "blanket", "bliss", "bobcat", "bobcats", "bog", "bomb", "brunch", "bun", "camping", "Chuck", "clan", "claps", "clicks", "cling", "clings", "con", "cop", "cots", "cramp", "cranks", "Crock", "cub", "cups", "den", "dent", "disgust", "distinct", "distracts", "dog", "dogs", "door", "dots", "exits", "expect", "feel", "feels", "film", "fishing", "fist", "flap-jacks", "flip", "flops", "fox", "frogs", "good", "grasps", "grim", "gulps", "handgun", "heck", "hon", "hunch", "jacket", "jackpot", "kills", "locks", "mad", "pays", "pegs", "pens", "pet", "picnic", "pin", "Pip", "PJs", "preps", "print", "psst", "pups", "quack", "rags", "rants", "rent", "rim", "rocket", "rods", "sec", "see", "sell", "shifts", "shocks", "shrub", "shrug", "shuts", "sibling", "skips", "skunk", "slams", "speck", "swing", "tag", "tags", "tend", "tends", "tent", "topic", "tracks", "trap", "TV", "unlock", "unlocks", "unpack", "wags", "wall", "walls", "ways", "whip", "yep", "yips", "yourself", "admit", "ads", "backpack", "backup", "bangs", "bankrupt", "blank", "blast", "blinking", "block", "BMW", "brim", "brush", "bus", "cabinet", "calling", "cast", "checking", "chicks", "chunk", "clang", "clasps", "class", "click", "cliffs", "clinic", "comet", "contact", "contracts", "cracking", "crap", "crops", "crush", "crushing", "damp", "Diggin", "directs", "display", "drift", "drips", "Duckbill", "duckbills", "dumps", "dust", "egg", "eggshells", "enchanting", "evict", "experiment", "extinct", "facts", "flags", "flasks", "flesh", "flips", "flung", "flush", "fossil", "fossils", "frantic", "fund", "funds", "granddad", "gust", "hack", "hats", "hay", "honk", "huffs", "impending", "inch", "inn", "intact", "junk", "lens", "lists", "living", "lump", "lungs", "mascot", "melting", "merits", "midst", "mix-up", "mock-up", "nags", "nest", "nestlings", "nutshell", "NYC", "ow", "pads", "panics", "pickax", "pins", "planet", "plant", "planting", "plants", "plastic", "plaything", "pled", "plots", "pop", "present", "Prill", "prod", "puffs", "quiz", "ranch", "rot", "rots", "rub", "rubbish", "run-down", "rustic", "sandbox", "sapling", "setting", "shells", "shrill", "sixth", "skills", "skull", "skulls", "slaps", "slash", "slick", "slid", "spans", "spin", "spins", "spits", "squints", "stabs", "stacks", "staff", "stalls", "stamps", "sting", "stings", "stomps", "strict", "strings", "stunning", "stuns", "sucks", "sum", "swigs", "swings", "switch", "T-Rex", "T.B.D.", "telling", "text", "thuds", "tick", "tickets", "timid", "tops", "tract", "twigs", "twisting", "uh", "um", "unzips", "vanish", "Vess", "wink", "yours", "admits", "ah", "ban", "bashing", "bats", "bend", "brat", "buds", "chants", "cherish", "club", "clubs", "cost", "Count", "cram", "crashing", "deb", "dens", "dismiss", "drum", "duchess", "dull", "eh", "elf", "elk", "emits", "enchants", "express", "fest", "flap", "fog", "fond", "full", "gaps", "gasp", "gifts", "glass", "glint", "glinting", "goblin", "goblins", "gran", "grandma", "grandson", "griffin", "griffins", "grips", "Gris", "gruff", "hall", "huts", "i-pad", "imp", "impress", "imps", "instinct", "intent", "jam", "jet", "jotting", "kidding", "kiln", "led", "limits", "Liz", "maps", "Matt", "Mell", "melt", "mimic", "mob", "mug", "munch", "obelisk", "outfit", "pact", "pat", "peckish", "penmanship", "pest", "pinkish", "plum", "plums", "ponds", "punish", "rabbits", "rushing", "script", "setbacks", "shh", "shush", "silk", "sing", "sings", "sketch", "slug", "smug", "sobbing", "Spelling", "spells", "spinning", "spirit", "stamp", "sticking", "stiff", "stomp", "strong", "swish", "terrific", "thicket", "thudding", "tramp", "tucks", "unpacks", "vast", "win", "wings", "winning", "Word", "XOXO", "add", "angst", "banish", "basics", "basilisk", "bay", "bent", "Beth", "Blunt", "brass", "buzz", "chucks", "clash", "classic", "clock", "closet", "comic", "content", "craft", "credit", "delish", "desks", "devilish", "diminish", "dissent", "distract", "entrap", "essay", "exhibit", "exists", "expel", "extends", "fib", "flicks", "Flock", "Fred", "grant", "grants", "grasp", "grub", "hectic", "hex", "hip", "invent", "itself", "jen", "kings", "Klepp", "Krig", "lab", "lamp", "lisp", "lisps", "locket", "mack", "napkin", "napkins", "nonstop", "onset", "P.E.", "paths", "payback", "perish", "prank", "pranks", "progress", "project", "puppet", "rapt", "rays", "relic", "rift", "rifts", "rig", "room", "sandwich", "sends", "setback", "shrinks", "skid", "skink", "slab", "slings", "slingshot", "slit", "slumps", "socks", "spilling", "spit", "spotting", "squish", "stank", "sunkids", "tactics", "tents", "thinking", "thumps", "ticket", "toxic", "toxins", "tramps", "tuck", "twit", "unrest", "upsets", "zinc", "ax", "bets", "blend", "blush", "buckets", "bulbs", "casting", "clamps", "clench", "clifftop", "crafting", "crumbling", "dazzling", "diminishing", "dragging", "dripping", "effect", "effects", "fabric", "fading", "fixing", "flapping", "flecks", "fled", "Flint", "grassland", "hefts", "hilltop", "instructs", "jack", "lamps", "landing", "lids", "logs", "melts", "object", "objects", "planning", "plod", "plods", "pock", "pots", "pray", "quicksand", "raft", "sandbank", "sandpit", "satin", "shaking", "shreds", "shrills", "sifts", "slipping", "slog", "smith", "smiths", "snug", "specks", "stem", "stock", "strength", "strips", "summit", "sunkid", "swift", "texts", "tilts", "trek", "trekking", "visiting", "web", "wing", "wishing", "wits", "a.m.", "bells", "bidding", "bland", "Chenin", "Chid", "comm", "dads", "Dr.", "drags", "Dunn", "dusts", "fess", "gabs", "gaping", "gun", "halls", "hallway", "handcuffs", "honks", "hung", "inherit", "intel", "interest", "jogs", "K-9", "Kat", "lavish", "ling", "Liv", "lockdown", "Max", "Mick", "moms", "mugs", "nab", "pandemic", "panning", "posh", "prods", "rash", "ringing", "rod", "rugs", "running", "sat", "sharing", "shopping", "skids", "slap", "slept", "splat", "sprinting", "standing", "stocks", "struck", "stunt", "suspects", "swag", "Swiss", "Ted", "theft", "Total", "tracking", "USA", "Vic", "VP", "whiff", "Witts", "Words", "Xs", "add-on", "Ann", "asking", "Atlantic", "bath", "beg", "bills", "butts", "cab", "check-up", "check-ups", "chestnuts", "chomp", "Elm", "Eric", "Fluff", "grandkid", "grilling", "grinning", "guts", "H", "handbag", "hash", "hugging", "Jenn", "Kest", "Kitts", "laptop", "letting", "lick", "Madrid", "math", "min", "Monday", "p.m.", "Pam", "pic", "plugs", "Prim", "quilt", "sags", "shifting", "Sid", "sitcom", "Spanish", "stan", "swimming", "tennis", "tock", "traffic", "Trent", "visits", "ziplock", "AC", "ahh", "bash", "bong", "brrring", "buck", "bunk", "caps", "chess", "clarinet", "clay", "direct", "drums", "exist", "fans", "Finn", "Fran", "frank", "frets", "Gibbs", "gig", "gong", "i-pads", "i-pods", "Jan", "Jill", "kiss", "lack", "less", "Lin", "lipstick", "Mills", "ok", "one", "outfits", "pests", "ping", "pong", "pumpkin", "punch", "rand", "rip", "same", "self-help", "skill", "slot", "slots", "snob", "splendid", "stab", "tablet", "tablets", "than", "Tot", "trumpet", "vest", "Viv", "whiz", "zip", "balls", "basketball", "bat", "Bob", "champ", "champs", "chump", "chumps", "contest", "racket", "rackets", "Scott", "shots", "suck", "Todd",
    "form", "god", "self", "lord", "loss", "list", "born", "tax", "sex", "sort", "drug", "soft", "won", "port", "hell", "sin", "sub", "tom", "bond", "fort", "don", "crop", "mill", "corn", "ben", "bulk", "cord", "disk", "worn", "ford", "bob", "pump", "gulf", "flux", "grid", "span", "boss", "horn", "torn", "lip", "disc", "twin", "bid", "cult", "scan", "rev", "norm", "dam", "bass", "apt", "ram", "ass", "ref", "wit", "lend", "duct", "gram", "golf", "sect", "null", "fax", "kent", "jazz", "matt", "wax", "kin", "tab", "mat", "fork", "plug", "ted", "pulp", "ups", "lag", "comp", "mist", "cox", "moss", "din", "lust", "hum", "sac", "trim", "bulb", "bud", "pork", "clip", "font", "bred", "bloc", "butt", "nets", "frog", "spun", "ant", "slim", "cam", "fats", "hen", "rib", "wept", "sol", "dusk", "yen", "gill", "cork", "vent", "brit", "ox", "clad", "gal", "opt", "hast", "tub", "nun", "rum", "weld", "tilt", "sap", "glen", "hub", "cad", "toss", "peg", "ness", "mum", "jill", "crab", "rex", "cuff", "yon", "oft", "nil", "dell", "stud", "yin", "slum", "mag", "aft", "sept", "pap", "silt", "jets", "mats", "brad", "mod", "jun", "vat", "rap", "lest", "cobb", "lat", "prop", "hog", "tort", "clot", "hem", "spat", "jest", "sped", "tact", "asp", "brig", "blot", "tat", "wed", "pus", "lam", "gilt", "drip", "lev", "loft", "ebb", "buff", "slag", "tot", "sill", "elm", "sod", "dab", "kemp", "lax", "sup", "flax", "welt", "mend", "kits", "wig", "bum", "lull", "pomp", "sob", "crib", "lex", "trot", "scot", "pun", "pod", "bled", "wilt", "hemp", "flex", "prom", "mort", "jig", "crux", "jess", "bran", "skim", "fad", "drab", "tram", "duff", "conn", "cant", "linn", "sag", "mott", "docs", "hump", "tam", "pox", "cusp", "dost", "hun", "sled", "pip", "rump", "stag", "stub", "tad", "pep", "lass", "dill", "clam", "morn", "gull", "pent", "yam", "rusk", "hilt", "piss", "sacs", "fen", "trod", "gad", "hogg", "pant", "bund", "scum", "yom", "dorm", "fob", "orb", "pax", "smog", "musk", "jog", "rut", "dag", "grad", "kris", "tics", "moll", "zed", "nip", "hag", "deft", "lux", "prim", "lint", "sax", "kelp", "wag", "tuft", "porn", "bras", "reps", "tut", "cob", "dram", "brag", "sop", "husk", "ifs", "heft", "flak", "pacs", "cog", "talc", "lob", "dint", "kip", "dub", "sot", "glut", "zig", "wisp", "vox", "mitt", "nit", "scab", "cask", "pimp", "blob", "ruff", "foss", "snag", "tuff", "buss", "lop", "hulk", "fez", "keg", "clog", "vats", "pelt", "mull", "wiss", "ruts", "jib", "bop", "slut", "mots", "jab", "punt", "sump", "yap", "putt", "glib", "vim", "yak", "rudd", "snub", "rant", "slop", "gab", "daft", "bast", "ilk", "bask", "zag", "grog", "milt", "mutt", "swig", "tass", "cull", "flit", "tiff", "vex", "pug", "saps", "joss", "dak", "hob", "yup", "smit", "puss", "riff", "kilt", "rasp", "macs", "clef", "scat", "wok", "gild", "cuss", "tusk", "fuzz", "skit", "smut", "stun", "raff", "raps", "bunt", "romp", "snip", "zap", "celt", "lilt", "nix", "gaff", "vets", "nub", "rill", "fop", "sass", "lunt", "biff", "mell", "meld", "slat", "haft", "jell", "scud", "muff", "yelp", "nib", "pips", "gib", "bott", "sulk", "batt", "cris", "bunn", "jut", "blip", "gob", "plop", "snot", "slob", "wend", "lox", "bibb", "koss", "flog", "doss", "vamp", "yip", "swum", "spud", "lek", "bub", "buts", "brin", "redd", "sops", "nips", "tots", "juts", "floc", "prig", "flan", "glob", "toft", "luff", "nett", "trig", "boff", "loll", "fizz", "tux", "flam", "gast", "wist", "lats", "crud", "hots", "coss", "busk", "yuk", "doff", "tamp", "spic", "corm", "wiz", "gamp", "samp", "kist", "mosk", "fisc", "frap", "toff", "stet", "guff", "repp", "flab", "lits", "scad", "bilk", "sudd", "bort", "yett", "cads", "kats", "jilt", "kops", "adz", "mumm", "glop", "zaps", "nill", "grum", "stum", "woks", "drub", "cusk", "yuks"
    // Add more words as needed
]);

function checkText() {
    const inputText = document.getElementById('inputText').value;
    const words = inputText.split(/\s+/).filter(word => word.length > 0);
    const resultDiv = document.getElementById('result');
    const unknownWords = new Set();
    let recognizedWordCount = 0;
    let totalValidWords = 0;

    // Split text into sentences
    const sentences = inputText.match(/[^.!?]+[.!?]+/g) || [];
    const problematicSentences = new Set();

    resultDiv.innerHTML = '';

    // First div for the marked text
    const textDiv = document.createElement('div');
    textDiv.id = 'markedText';

// Process words for the main text display and counting
words.forEach(word => {
    const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '');
    const span = document.createElement('span');
    span.textContent = word + ' ';
    
    if (cleanWord) {
        totalValidWords++;
        if (!dictionary.has(cleanWord)) {
            span.className = 'incorrect';
            unknownWords.add(cleanWord);
        } else {
            recognizedWordCount++;
        }
    }
    
    textDiv.appendChild(span);
});

    // Process sentences
    const processedSentences = sentences.map(sentence => {
        let containsUnrecognizedWord = false;
        // Split into words while preserving spacing and punctuation
        const processedWords = sentence.split(/(\s+|[.,!?]+)/).map(part => {
            // If it's not just whitespace or punctuation
            if (part.trim() && !part.match(/^[.,!?\s]+$/)) {
                const cleanWord = part.toLowerCase().replace(/[^a-z]/g, '');
                if (cleanWord && !dictionary.has(cleanWord)) {
                    containsUnrecognizedWord = true;
                    return `<span class="incorrect">${part}</span>`;
                }
            }
            return part;
        });

        const processedSentence = processedWords.join('');
        if (containsUnrecognizedWord) {
            problematicSentences.add(processedSentence);
        }
        return processedSentence;
    });

    // Calculate percentage
    const percentage = totalValidWords > 0 
        ? ((recognizedWordCount / totalValidWords) * 100).toFixed(2) 
        : 0;

    // Create statistics section
    const statsDiv = document.createElement('div');
    statsDiv.style.marginTop = '20px';
    statsDiv.style.borderTop = '1px solid #ccc';
    statsDiv.style.paddingTop = '10px';
    statsDiv.innerHTML = `
        <h3>Statistics:</h3>
        <p>Total words: ${totalValidWords}</p>
        <p>Recognized words: ${recognizedWordCount}</p>
        <p>Unrecognized words: ${totalValidWords - recognizedWordCount}</p>
        <p>Recognition rate: ${percentage}%</p>
    `;

    // Create problematic sentences section
    const sentencesDiv = document.createElement('div');
    sentencesDiv.style.marginTop = '20px';
    sentencesDiv.style.borderTop = '1px solid #ccc';
    sentencesDiv.style.paddingTop = '10px';

    if (problematicSentences.size > 0) {
        sentencesDiv.innerHTML = `
            <h3>Sentences with Unrecognized Words:</h3>
            <ol style="color: #000;">
                ${Array.from(problematicSentences).map(sentence => 
                    `<li>${sentence}</li>`
                ).join('')}
            </ol>
        `;
    }

    // Create unrecognized words section
    const unknownWordsDiv = document.createElement('div');
    unknownWordsDiv.style.marginTop = '20px';
    unknownWordsDiv.style.borderTop = '1px solid #ccc';
    unknownWordsDiv.style.paddingTop = '10px';

    if (unknownWords.size > 0) {
        unknownWordsDiv.innerHTML = `
            <h3>Unrecognized Words:</h3>
            <ul style="color: red;">
                ${Array.from(unknownWords).map(word => `<li>${word}</li>`).join('')}
            </ul>
        `;
    } else {
        unknownWordsDiv.innerHTML = '<p>All words are recognized!</p>';
    }

    // Add all sections to the result
    resultDiv.appendChild(textDiv);
    resultDiv.appendChild(statsDiv);
    resultDiv.appendChild(sentencesDiv);
    resultDiv.appendChild(unknownWordsDiv);
}
