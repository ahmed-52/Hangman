var hangmanWords = [
    'apple', 'mystery', 'wonderful', 'python', 'programming', 'galaxy', 'universe',
    'planet', 'jupiter', 'asteroid', 'eclipse', 'satellite', 'nebula', 'quantum',
    'kinetic', 'energy', 'photosynthesis', 'evolution', 'bacteria', 'biology',
    'chemistry', 'physics', 'arithmetic', 'algebra', 'geometry', 'calculus',
    'symphony', 'rhythm', 'melody', 'harmony', 'piano', 'guitar', 'orchestra',
    'violin', 'flute', 'clarinet', 'trumpet', 'saxophone', 'drums', 'cello',
    'banjo', 'harpsichord', 'accordion', 'marimba', 'xylophone', 'vibraphone',
    'opera', 'ballet', 'theatre', 'cinema', 'sculpture', 'painting', 'sketch',
    'mural', 'portrait', 'landscape', 'abstract', 'canvas', 'palette', 'gallery',
    'novel', 'poetry', 'literature', 'fiction', 'biography', 'autobiography',
    'fantasy', 'mystery', 'thriller', 'romance', 'journalism', 'article',
    'editorial', 'publication', 'translation', 'dictionary', 'thesaurus', 'encyclopedia',
    'grammar', 'punctuation', 'vocabulary', 'pronunciation', 'idiom', 'metaphor',
    'simile', 'alliteration', 'hyperbole', 'personification', 'onomatopoeia', 'oxymoron',
    'paradox', 'analogy', 'allusion', 'irony', 'satire', 'parody', 'comedy',
    'tragedy', 'drama', 'fable', 'folklore', 'legend', 'myth', 'tale', 'narrative',
    'prose', 'sonnet', 'haiku', 'limerick', 'epic', 'ballad', 'anthology', 'prologue',
    'epilogue', 'chapter', 'verse', 'stanza', 'dialogue', 'monologue', 'soliloquy',
    'manuscript', 'preface', 'introduction', 'conclusion', 'epigraph', 'foreword',
    'acknowledgement', 'appendix', 'bibliography', 'index', 'glossary', 'footnote',
    'endnote', 'citation', 'plagiarism', 'copyright', 'patent', 'trademark',
    'license', 'warranty', 'contract', 'agreement', 'negotiation', 'arbitration',
    'mediation', 'litigation', 'sue', 'defendant', 'plaintiff', 'attorney', 'lawyer',
    'judge', 'jury', 'verdict', 'sentence', 'prosecution', 'defense', 'testimony',
    'evidence', 'alibi', 'cross-examine', 'objection', 'sustained', 'overruled',
    'adjourn', 'acquit', 'convict', 'appeal', 'parole', 'probation', 'bail',
    'incarcerate', 'detain', 'interrogate', 'investigate', 'surveillance', 'intelligence',
    'espionage', 'sabotage', 'assassin', 'sniper', 'mercenary', 'soldier', 'warrior',
    'commander', 'general', 'admiral', 'marshal', 'lieutenant', 'captain', 'sergeant',
    'corporal', 'private', 'recruit', 'cadet', 'veteran', 'hero', 'villain', 'ally',
    'enemy', 'neutral', 'treaty', 'ceasefire', 'armistice', 'truce', 'conflict',
    'battle', 'war', 'skirmish', 'raid', 'siege', 'campaign', 'strategy', 'tactic',
    'ambush', 'guerrilla', 'reconnaissance', 'invasion', 'occupation', 'resistance',
    'insurgency', 'coup', 'revolution', 'uprising', 'rebellion', 'anarchy', 'tyranny',
    'dictatorship', 'monarchy', 'democracy', 'republic', 'sovereignty', 'autonomy',
    'federation', 'alliance', 'coalition', 'consortium', 'syndicate']

var word = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];


// for loop to create underscores for each letter in the word
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = word.length;
var wordContainer = document.getElementById('word-container');

var lives = 0

for (var i = 0; i < word.length; i++) {
    // Create a new span element for each underscore
    var underscore = document.createElement('span');
    underscore.textContent = '_';
    underscore.id = i;
    
    // Append the underscore to the word-container
    wordContainer.appendChild(underscore);
}


man = document.getElementById('man')
manCond = 1

function guess(guessedletter){
    guessStatus = false
    guessedletter = guessedletter.toLowerCase();
    for (var i =0; i< word.length;i++){
        var letter = word[i]

        if(guessedletter == letter){
           var position = document.getElementById(i);
            position.textContent = guessedletter
            guessStatus = true
        }
    }

    if(guessStatus == false){
        manCond++;
        lives--;
        man.src = 'media/man'+String(manCond)+'.svg'

        if(manCond > 6){
            var gameOverElement = document.getElementById('gameOverMessage');
            gameOverElement.classList.remove('hidden');
            gameOverElement.classList.add('visible');
        }
        guessStatus = false
    }
    
    

}


function Gletter(element){
    if (manCond > 6){
        return;
    }
    guess(element.textContent)
    element.remove()
}





