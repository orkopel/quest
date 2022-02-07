var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;
const KEY = 'questDB';

function createQuestsTree() {
    var quests = loadFromStorage(KEY);
    if (!quests) {
        gQuestsTree = createQuest('Male?');
        gQuestsTree.yes = createQuest('Gandhi');
        gQuestsTree.no = createQuest('Rita');
    } else {
        gQuestsTree = quests;
    }
    gCurrQuest = gQuestsTree;
    gPrevQuest = null;
}

function createQuest(txt) {
    return {
        txt: txt,
        yes: null,
        no: null
    }
}

function isChildless(node) {
    return (node.yes === null && node.no === null)
}

function moveToNextQuest(res) {
    // TODO: update the gPrevQuest, gCurrQuest global vars
    gPrevQuest = gCurrQuest

    if (res === 'yes') gCurrQuest = gCurrQuest.yes
    if (res === 'no') gCurrQuest = gCurrQuest.no
}

function addGuess(newQuestTxt, newGuessTxt, lastRes) {
    // TODO: Create and Connect the 2 Quests to the quetsions tree
}

function getCurrQuest() {
    return gCurrQuest
}