# Build and use PROOF, step by step

This is a playable web prototype. It has PLAY, JOURNEY and ME. Progress stays in this browser on this device; it has no accounts, cloud backup or App Store installation yet.

## 1. Open the prototype
Download and extract this ZIP. Keep all the files together in the proof_v1 folder. On a computer, open index.html in a browser. The mission data is bundled so no server is needed to load it. Some browsers restrict saving from a local file: for reliable testing, use the server below.

## 2. Run it reliably on a computer
Install Python 3 if needed. Open a terminal in the proof_v1 folder and run:

    python3 -m http.server 8000 --bind 0.0.0.0

On Windows you can use `py -m http.server 8000 --bind 0.0.0.0`.
Open http://localhost:8000 on that computer.

## 3. Test on your iPhone
Connect the computer and iPhone to the same private Wi-Fi. Find the computer's local Wi-Fi IP address in its network settings. In iPhone Safari open http://YOUR-COMPUTER-IP:8000. Keep the server running. Allow the local network connection if the computer firewall asks. This address only works while your computer is running on that network. An extracted HTML file in iPhone Files is not a dependable way to run the app.

## 4. Play the loop
PLAY → I'LL DO IT → do the real action → I DID IT → optional feeling → KEEP MY PROOF. ME stores the completed action. JOURNEY shows all the areas that action built.
NOT YET → read the smaller task → I CAN DO THAT → do it → I DID IT. Accepting a task never earns Proof. The passport records the smaller task accurately; the original mission remains available and its harder follow-ups stay locked until the full action is completed.

## 5. Make missions intertwine
One action earns one passport entry, even if it builds three areas. These area totals overlap: they are not extra Proofs.
THE ASK builds Courage and Connection. It unlocks THE FIRST MOVE, which then helps unlock THE QUESTION. The engine prefers unlocked follow-ups after you finish their prerequisite; GIVE ME ANOTHER lets you choose a different available mission.
THE DELAY → THE BEGINNER → SHOW IT connects Self-Respect, Growth, Creation, Courage and Connection through progressively larger actions.

## 6. Edit the app
index.html = screen layout; styles.css = colours, spacing and type; app.js = gameplay; missions.json = editable mission catalogue; missions-data.js = the bundled copy actually loaded by the app.
Each mission has id, title, mission, minutes, difficulty, dimensions, notYet, identities, capability and prerequisites. Prerequisites are mission IDs that must be completed in full. dimensions lists the areas the same action builds. notYet is a smaller real action, not an automatic award.
After editing missions.json, regenerate missions-data.js from a terminal in the folder:

    python3 -c "import json,pathlib; p=pathlib.Path('.'); (p/'missions-data.js').write_text('window.PROOF_MISSIONS='+json.dumps(json.loads((p/'missions.json').read_text()))+';')"

## 7. Check before sharing
Complete THE ASK. Confirm one Proof appears and two areas rise. Refresh and confirm it remains. Accept a mission, refresh and confirm the active mission resumes. Choose NOT YET and confirm no Proof appears until you do and save the smaller action. Confirm its passport wording matches the smaller action. Test GIVE ME ANOTHER and all three tabs.

## 8. Start with five testers
Ask them to open it, accept one mission, leave the phone and actually do it. Observe whether they understand without explanation. Ask what they avoided, what they did and whether they want another mission. Improve that loop before adding accounts, payments or more features.

## 9. Make it available without your computer
The next build step is hosting this folder at a stable web address. Then test browser saving on iPhone and add installable-web-app support if desired. A hosted prototype still needs accounts and a database before it can promise cross-device progress. Keep the interface and philosophy: one mission, one real action, one Proof.
