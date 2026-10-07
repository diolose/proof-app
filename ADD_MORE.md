# PROOF Connected Answers — update and extend

## Install on your existing GitHub app
Extract this ZIP. In your existing proof-app repository, use Add file → Upload files. Select index.html, styles.css, app.js, missions.json and missions-data.js from this folder. Upload the files themselves to the repository root, then Commit changes to main. They replace the matching filenames. GitHub Pages will publish the update. Refresh your existing site after the deployment completes.

Keep using the same site URL and browser to retain progress. Do not press Reset prototype data. Clearing browser storage, using Private Browsing or switching devices can lose or isolate progress. This prototype has no account backup.

## What changed
70 missions: the original 50 plus 20 new follow-ups linked to the first ten.
After I DID IT, one optional short-answer field appears. KEEP MY PROOF stores the answer in your passport. The next connected mission shows that answer as context. Blank answers are fine: a generic follow-up remains available.
No AI or text interpretation is involved. The app uses predefined mission links; it does not recognise whether an answer describes a song, cafe or walking spot. The player applies the follow-up to their own answer. No text is sent to an AI service.
Smaller steps are recorded as smaller steps and do not unlock the full mission's follow-ups. Accepting the smaller action does not award Proof.

## Ten connected paths
1. THE DELAY → THE NEXT TWO → CLOSE THE LOOP
2. THE ASK → TRY IT → THE FOLLOW-UP
3. THE MESSAGE → ONE MORE DETAIL → MAKE ROOM
4. THE FIRST MOVE → FOLLOW YOUR CURIOSITY → REMEMBER A DETAIL
5. THE BEGINNER → TRY THAT PART → SHOW THE ATTEMPT
6. THE PREFERENCE → ONE SMALL CHOICE → SAY IT CLEARLY
7. SHOW IT → USE ONE IDEA → SHOW THE CHANGE
8. THE QUESTION → TEST THE IDEA → SHARE THE LEARNING
9. THE NO → KEEP THE SPACE → MAKE IT EASIER
10. GO FIRST → GO FIRST AGAIN → OPEN THE DOOR

## Add your own next mission
Use a unique ID starting at P071. Here is one complete example that follows P054 (THE FOLLOW-UP):

{
  "id": "P071",
  "title": "PASS IT ON",
  "mission": "If you found the recommendation useful, share it with one interested person. Ask for nothing.",
  "minutes": 2,
  "difficulty": 2,
  "dimensions": ["Connection", "Growth"],
  "notYet": "Write one sentence about why you would recommend it.",
  "identities": ["Connector", "Learner"],
  "capability": "Connected action",
  "prerequisites": ["P054"],
  "contextFrom": "P054",
  "answerPrompt": "What did you pass on?"
}

prerequisites: the full mission that must be completed before this one is available.
contextFrom: the completed mission whose answer is shown on this card.
answerPrompt: the optional question after completing this new mission.
dimensions: areas the action builds; each completion still earns one Proof.
notYet: a genuinely smaller real action.

## Add it directly through GitHub
1. Open missions-data.js and choose the pencil to edit.
2. Find the final mission object, just before the closing ];.
3. Add a comma after that existing final object, then paste your new object before ];.
4. Keep the opening window.PROOF_MISSIONS = and closing ]; intact.
5. Commit the change.
6. Add the same object at the end of missions.json, before its final ], and commit. This keeps your editable catalogue consistent.
7. Check the updated site after deployment. If a syntax mistake stops loading, revert that commit before trying again.

Never reuse an existing ID or change IDs that people may have completed. To extend P071, add P072 with prerequisites ["P071"] and contextFrom "P071". To make a new starting mission use prerequisites [] and omit contextFrom.

## Test it
Complete THE ASK and answer "A nearby walking spot". The next connected mission is TRY IT, showing that answer. After trying it, answer "Quiet and relaxing". THE FOLLOW-UP shows that observation. Write only what you are comfortable keeping on your device.
If THE ASK is already completed in your existing passport, you may encounter its follow-up later; use an uncompleted starting mission to test a fresh chain. Existing passport entries are preserved and do not gain invented answers.

## Validation
JavaScript syntax and gameplay logic were checked: follow-up selection, escaped user text, skipped answers, reroll, smaller-step prerequisite gating, duplicate prevention and stored-progress reload. A live browser test could not run because this environment had no browser executable. Check the deployed update on your iPhone before sharing it widely.
