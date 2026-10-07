window.PROOF_MISSIONS = [
  {
    "id": "P001",
    "title": "THE DELAY",
    "mission": "Do one thing you've been avoiding that takes under 2 minutes.",
    "difficulty": 1,
    "minutes": 2,
    "dimensions": [
      "Self-Respect",
      "Growth"
    ],
    "notYet": "Choose the thing and put what you need in front of you.",
    "identities": [
      "Grounded",
      "Learner"
    ],
    "capability": "Tiny action",
    "prerequisites": [],
    "unlockRule": "Start pool",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What small thing did you finish?"
  },
  {
    "id": "P002",
    "title": "THE ASK",
    "mission": "Ask someone for one simple recommendation.",
    "difficulty": 1,
    "minutes": 2,
    "dimensions": [
      "Courage",
      "Connection"
    ],
    "notYet": "Write the exact question you'd ask.",
    "identities": [
      "Explorer",
      "Connector"
    ],
    "capability": "Social initiation",
    "prerequisites": [],
    "unlockRule": "Start pool",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What did they recommend?"
  },
  {
    "id": "P003",
    "title": "THE MESSAGE",
    "mission": "Message someone you genuinely appreciate. Ask for nothing.",
    "difficulty": 1,
    "minutes": 3,
    "dimensions": [
      "Connection",
      "Courage"
    ],
    "notYet": "Write the message without sending it.",
    "identities": [
      "Connector",
      "Explorer"
    ],
    "capability": "Expression",
    "prerequisites": [],
    "unlockRule": "Start pool",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "Who did you appreciate, and why? Initials are enough."
  },
  {
    "id": "P004",
    "title": "THE FIRST MOVE",
    "mission": "Start one short conversation instead of waiting.",
    "difficulty": 2,
    "minutes": 2,
    "dimensions": [
      "Courage",
      "Connection"
    ],
    "notYet": "Make eye contact and say hello.",
    "identities": [
      "Explorer",
      "Connector"
    ],
    "capability": "Social initiation",
    "prerequisites": [
      "P002"
    ],
    "unlockRule": "Start pool",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What did you talk about?"
  },
  {
    "id": "P005",
    "title": "THE BEGINNER",
    "mission": "Spend 10 minutes doing something you're not good at.",
    "difficulty": 2,
    "minutes": 10,
    "dimensions": [
      "Growth",
      "Courage",
      "Creation"
    ],
    "notYet": "Try it for 2 minutes.",
    "identities": [
      "Learner",
      "Explorer",
      "Maker"
    ],
    "capability": "Beginner tolerance",
    "prerequisites": [
      "P001"
    ],
    "unlockRule": "Start pool",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What did you try, and where did you get stuck?"
  },
  {
    "id": "P006",
    "title": "THE PREFERENCE",
    "mission": "Tell someone what you actually prefer instead of automatically agreeing.",
    "difficulty": 2,
    "minutes": 2,
    "dimensions": [
      "Self-Respect",
      "Courage"
    ],
    "notYet": "Write down what you'd choose.",
    "identities": [
      "Grounded",
      "Explorer"
    ],
    "capability": "Self-expression",
    "prerequisites": [],
    "unlockRule": "Start pool",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What did you actually prefer?"
  },
  {
    "id": "P007",
    "title": "SHOW IT",
    "mission": "Show one person something you've made or worked on before it feels perfect.",
    "difficulty": 2,
    "minutes": 5,
    "dimensions": [
      "Creation",
      "Courage",
      "Connection"
    ],
    "notYet": "Choose what you'd show them.",
    "identities": [
      "Maker",
      "Explorer",
      "Connector"
    ],
    "capability": "Creative exposure",
    "prerequisites": [
      "P005"
    ],
    "unlockRule": "Start pool",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What did you show, and what response stood out?"
  },
  {
    "id": "P008",
    "title": "THE QUESTION",
    "mission": "Ask someone a question you genuinely want answered, then really listen.",
    "difficulty": 2,
    "minutes": 3,
    "dimensions": [
      "Connection",
      "Growth",
      "Courage"
    ],
    "notYet": "Decide who you'd ask and write the question.",
    "identities": [
      "Connector",
      "Learner",
      "Explorer"
    ],
    "capability": "Curiosity",
    "prerequisites": [
      "P002",
      "P004"
    ],
    "unlockRule": "Start pool",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What answer stayed with you?"
  },
  {
    "id": "P009",
    "title": "THE NO",
    "mission": "Say no to one small thing you genuinely don't want to do. No long excuse.",
    "difficulty": 2,
    "minutes": 2,
    "dimensions": [
      "Self-Respect",
      "Courage"
    ],
    "notYet": "Write one kind sentence you could use to say no.",
    "identities": [
      "Grounded",
      "Explorer"
    ],
    "capability": "Boundary",
    "prerequisites": [
      "P006"
    ],
    "unlockRule": "Start pool",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What did you say no to? You can keep the details private."
  },
  {
    "id": "P010",
    "title": "GO FIRST",
    "mission": "Volunteer, answer, introduce yourself, order first, or otherwise be first once today.",
    "difficulty": 2,
    "minutes": 3,
    "dimensions": [
      "Courage",
      "Self-Respect",
      "Growth"
    ],
    "notYet": "Identify one moment where you could go first.",
    "identities": [
      "Explorer",
      "Grounded",
      "Learner"
    ],
    "capability": "Initiative",
    "prerequisites": [
      "P004"
    ],
    "unlockRule": "Start pool",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "When did you go first?"
  },
  {
    "id": "P011",
    "title": "THE NAME",
    "mission": "Introduce yourself to someone you don't normally speak to and ask their name.",
    "difficulty": 2,
    "minutes": 3,
    "dimensions": [
      "Courage",
      "Connection"
    ],
    "notYet": "Say hello without introducing yourself.",
    "identities": [
      "Explorer",
      "Connector"
    ],
    "capability": "Social initiation",
    "prerequisites": [
      "P004"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P012",
    "title": "THE UNFINISHED THING",
    "mission": "Return to something you've abandoned and work on it for 10 minutes.",
    "difficulty": 2,
    "minutes": 10,
    "dimensions": [
      "Self-Respect",
      "Creation",
      "Growth"
    ],
    "notYet": "Open it and spend 2 minutes with it.",
    "identities": [
      "Grounded",
      "Maker",
      "Learner"
    ],
    "capability": "Persistence",
    "prerequisites": [
      "P001",
      "P005"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P013",
    "title": "THE COMPLIMENT",
    "mission": "Give someone a genuine, specific compliment.",
    "difficulty": 2,
    "minutes": 2,
    "dimensions": [
      "Connection",
      "Courage"
    ],
    "notYet": "Decide exactly what you'd compliment them on.",
    "identities": [
      "Connector",
      "Explorer"
    ],
    "capability": "Expression",
    "prerequisites": [
      "P003"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P014",
    "title": "THE SOLO MOVE",
    "mission": "Go somewhere by yourself that you'd normally prefer company for. Stay 10 minutes.",
    "difficulty": 3,
    "minutes": 10,
    "dimensions": [
      "Courage",
      "Self-Respect",
      "Growth"
    ],
    "notYet": "Go there, stay 2 minutes, then leave if you want.",
    "identities": [
      "Explorer",
      "Grounded",
      "Learner"
    ],
    "capability": "Independence",
    "prerequisites": [
      "P010"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P015",
    "title": "ASK FOR HELP",
    "mission": "Ask someone for help with one small thing instead of figuring everything out alone.",
    "difficulty": 2,
    "minutes": 3,
    "dimensions": [
      "Connection",
      "Courage",
      "Growth"
    ],
    "notYet": "Write down exactly what you'd ask for.",
    "identities": [
      "Connector",
      "Explorer",
      "Learner"
    ],
    "capability": "Request",
    "prerequisites": [
      "P002"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P016",
    "title": "THE OPINION",
    "mission": "Say what you genuinely think once when it would be easier to stay quiet or agree.",
    "difficulty": 3,
    "minutes": 3,
    "dimensions": [
      "Self-Respect",
      "Courage",
      "Connection"
    ],
    "notYet": "Write your real opinion privately first.",
    "identities": [
      "Grounded",
      "Explorer",
      "Connector"
    ],
    "capability": "Self-expression",
    "prerequisites": [
      "P006"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P017",
    "title": "MAKE SOMETHING",
    "mission": "Create something small and finish it today. Quality doesn't matter.",
    "difficulty": 2,
    "minutes": 15,
    "dimensions": [
      "Creation",
      "Growth",
      "Self-Respect"
    ],
    "notYet": "Make the worst possible first version for 5 minutes.",
    "identities": [
      "Maker",
      "Learner",
      "Grounded"
    ],
    "capability": "Creation",
    "prerequisites": [
      "P005",
      "P012"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P018",
    "title": "THE FOLLOW-UP",
    "mission": "Continue a conversation instead of letting it end at small talk. Ask one real follow-up question.",
    "difficulty": 3,
    "minutes": 3,
    "dimensions": [
      "Connection",
      "Courage",
      "Growth"
    ],
    "notYet": "Think of one follow-up question before speaking.",
    "identities": [
      "Connector",
      "Explorer",
      "Learner"
    ],
    "capability": "Conversation depth",
    "prerequisites": [
      "P008",
      "P011"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P019",
    "title": "THE REQUEST",
    "mission": "Ask for one reasonable thing you want instead of hoping someone notices.",
    "difficulty": 3,
    "minutes": 3,
    "dimensions": [
      "Courage",
      "Self-Respect",
      "Connection"
    ],
    "notYet": "Say the request aloud to yourself first.",
    "identities": [
      "Explorer",
      "Grounded",
      "Connector"
    ],
    "capability": "Request",
    "prerequisites": [
      "P015"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P020",
    "title": "BE SEEN",
    "mission": "Share something you created, learned, achieved, or genuinely care about with another person.",
    "difficulty": 3,
    "minutes": 5,
    "dimensions": [
      "Courage",
      "Creation",
      "Connection"
    ],
    "notYet": "Show it privately to one trusted person.",
    "identities": [
      "Explorer",
      "Maker",
      "Connector"
    ],
    "capability": "Exposure",
    "prerequisites": [
      "P007",
      "P017"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P021",
    "title": "THE INVITE",
    "mission": "Invite someone to do something with you instead of waiting to be invited.",
    "difficulty": 3,
    "minutes": 3,
    "dimensions": [
      "Courage",
      "Connection"
    ],
    "notYet": "Write who you'd invite and what you'd suggest.",
    "identities": [
      "Explorer",
      "Connector"
    ],
    "capability": "Initiative",
    "prerequisites": [
      "P018"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P022",
    "title": "THE FEEDBACK",
    "mission": "Ask someone you trust for one piece of honest feedback. Don't defend yourself—just listen.",
    "difficulty": 3,
    "minutes": 5,
    "dimensions": [
      "Growth",
      "Courage",
      "Connection"
    ],
    "notYet": "Write the question you'd ask.",
    "identities": [
      "Learner",
      "Explorer",
      "Connector"
    ],
    "capability": "Feedback",
    "prerequisites": [
      "P015",
      "P020"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P023",
    "title": "THE PROMISE",
    "mission": "Choose one small thing you'll finish today. Then finish it before bed.",
    "difficulty": 2,
    "minutes": 15,
    "dimensions": [
      "Self-Respect",
      "Growth"
    ],
    "notYet": "Make the promise smaller than 5 minutes.",
    "identities": [
      "Grounded",
      "Learner"
    ],
    "capability": "Self-trust",
    "prerequisites": [
      "P001",
      "P012"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P024",
    "title": "THE SHARE",
    "mission": "Share something unfinished with someone and ask what they notice.",
    "difficulty": 3,
    "minutes": 5,
    "dimensions": [
      "Creation",
      "Courage",
      "Growth"
    ],
    "notYet": "Show only one tiny piece.",
    "identities": [
      "Maker",
      "Explorer",
      "Learner"
    ],
    "capability": "Creative exposure",
    "prerequisites": [
      "P020",
      "P022"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P025",
    "title": "THE TRUTH",
    "mission": "Say one small honest thing you've been avoiding saying. Keep it respectful.",
    "difficulty": 3,
    "minutes": 5,
    "dimensions": [
      "Self-Respect",
      "Courage",
      "Connection"
    ],
    "notYet": "Write it privately first.",
    "identities": [
      "Grounded",
      "Explorer",
      "Connector"
    ],
    "capability": "Honesty",
    "prerequisites": [
      "P016",
      "P019"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P026",
    "title": "THE REJECTION REP",
    "mission": "Make one reasonable request where 'no' is genuinely possible.",
    "difficulty": 3,
    "minutes": 5,
    "dimensions": [
      "Courage",
      "Growth",
      "Self-Respect"
    ],
    "notYet": "Make a much smaller request first.",
    "identities": [
      "Explorer",
      "Learner",
      "Grounded"
    ],
    "capability": "Rejection tolerance",
    "prerequisites": [
      "P019"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P027",
    "title": "THE RETURN",
    "mission": "Return to something you stopped because you thought you weren't good enough. Give it 15 minutes.",
    "difficulty": 3,
    "minutes": 15,
    "dimensions": [
      "Growth",
      "Creation",
      "Self-Respect"
    ],
    "notYet": "Give it 3 minutes.",
    "identities": [
      "Learner",
      "Maker",
      "Grounded"
    ],
    "capability": "Persistence",
    "prerequisites": [
      "P012",
      "P017"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P028",
    "title": "THE INTRODUCTION",
    "mission": "Introduce two people who might genuinely benefit from knowing each other.",
    "difficulty": 3,
    "minutes": 5,
    "dimensions": [
      "Connection",
      "Courage",
      "Growth"
    ],
    "notYet": "Message one person asking whether they'd like an introduction.",
    "identities": [
      "Connector",
      "Explorer",
      "Learner"
    ],
    "capability": "Social value",
    "prerequisites": [
      "P021"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P029",
    "title": "PUT IT OUT THERE",
    "mission": "Let another person see something you normally keep private because you think it isn't good enough yet.",
    "difficulty": 4,
    "minutes": 10,
    "dimensions": [
      "Creation",
      "Courage",
      "Self-Respect"
    ],
    "notYet": "Show one trusted person privately.",
    "identities": [
      "Maker",
      "Explorer",
      "Grounded"
    ],
    "capability": "Exposure",
    "prerequisites": [
      "P024"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P030",
    "title": "CHOOSE YOURSELF",
    "mission": "Make one small decision today because it's right for you—not because it will impress or please someone else.",
    "difficulty": 3,
    "minutes": 5,
    "dimensions": [
      "Self-Respect",
      "Courage",
      "Growth"
    ],
    "notYet": "Write down what you'd choose if nobody judged you.",
    "identities": [
      "Grounded",
      "Explorer",
      "Learner"
    ],
    "capability": "Values",
    "prerequisites": [
      "P025"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P031",
    "title": "THE DIFFERENT CHOICE",
    "mission": "Change one normal routine today on purpose.",
    "difficulty": 2,
    "minutes": 5,
    "dimensions": [
      "Growth",
      "Courage"
    ],
    "notYet": "Change one tiny part of it.",
    "identities": [
      "Learner",
      "Explorer"
    ],
    "capability": "Novelty",
    "prerequisites": [
      "P014"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P032",
    "title": "ASK DEEPER",
    "mission": "Ask someone a question that goes beyond small talk and genuinely listen.",
    "difficulty": 3,
    "minutes": 5,
    "dimensions": [
      "Connection",
      "Courage",
      "Growth"
    ],
    "notYet": "Write the question first.",
    "identities": [
      "Connector",
      "Explorer",
      "Learner"
    ],
    "capability": "Conversation depth",
    "prerequisites": [
      "P018"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P033",
    "title": "FINISH IT",
    "mission": "Finish one small unfinished thing you've repeatedly avoided.",
    "difficulty": 3,
    "minutes": 15,
    "dimensions": [
      "Self-Respect",
      "Growth"
    ],
    "notYet": "Work on it for 5 minutes.",
    "identities": [
      "Grounded",
      "Learner"
    ],
    "capability": "Completion",
    "prerequisites": [
      "P023"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P034",
    "title": "MAKE IT REAL",
    "mission": "Turn an idea you've been thinking about into a rough first version.",
    "difficulty": 3,
    "minutes": 15,
    "dimensions": [
      "Creation",
      "Growth",
      "Self-Respect"
    ],
    "notYet": "Create the ugliest 5-minute version.",
    "identities": [
      "Maker",
      "Learner",
      "Grounded"
    ],
    "capability": "Creation",
    "prerequisites": [
      "P017"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P035",
    "title": "THE BOUNDARY",
    "mission": "Communicate one small boundary calmly and clearly.",
    "difficulty": 4,
    "minutes": 5,
    "dimensions": [
      "Self-Respect",
      "Courage",
      "Connection"
    ],
    "notYet": "Write exactly what you'd say.",
    "identities": [
      "Grounded",
      "Explorer",
      "Connector"
    ],
    "capability": "Boundary",
    "prerequisites": [
      "P009",
      "P025"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P036",
    "title": "THE STRANGER",
    "mission": "Have a short conversation with someone you've never met.",
    "difficulty": 4,
    "minutes": 5,
    "dimensions": [
      "Courage",
      "Connection"
    ],
    "notYet": "Ask one simple question.",
    "identities": [
      "Explorer",
      "Connector"
    ],
    "capability": "Social courage",
    "prerequisites": [
      "P011",
      "P018"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P037",
    "title": "THE IMPERFECT SHARE",
    "mission": "Share something before you think it's completely ready.",
    "difficulty": 4,
    "minutes": 10,
    "dimensions": [
      "Creation",
      "Courage",
      "Growth"
    ],
    "notYet": "Share it privately with one person.",
    "identities": [
      "Maker",
      "Explorer",
      "Learner"
    ],
    "capability": "Creative exposure",
    "prerequisites": [
      "P029",
      "P034"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P038",
    "title": "CHANGE YOUR MIND",
    "mission": "Admit once today that you were wrong or that you've changed your opinion.",
    "difficulty": 3,
    "minutes": 5,
    "dimensions": [
      "Growth",
      "Self-Respect",
      "Connection"
    ],
    "notYet": "Write what changed your mind.",
    "identities": [
      "Learner",
      "Grounded",
      "Connector"
    ],
    "capability": "Ego flexibility",
    "prerequisites": [
      "P022"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P039",
    "title": "THE PLAN",
    "mission": "Choose something you've wanted to do and put a real date on it.",
    "difficulty": 2,
    "minutes": 5,
    "dimensions": [
      "Self-Respect",
      "Growth"
    ],
    "notYet": "Choose the date without committing yet.",
    "identities": [
      "Grounded",
      "Learner"
    ],
    "capability": "Commitment",
    "prerequisites": [
      "P030"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P040",
    "title": "MAKE THE MOVE",
    "mission": "Take the first real-world action toward something you've been planning.",
    "difficulty": 4,
    "minutes": 10,
    "dimensions": [
      "Growth",
      "Courage",
      "Self-Respect"
    ],
    "notYet": "Make the action take under 2 minutes.",
    "identities": [
      "Learner",
      "Explorer",
      "Grounded"
    ],
    "capability": "Execution",
    "prerequisites": [
      "P039"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P041",
    "title": "THE INITIATOR",
    "mission": "Organise something small instead of waiting for someone else to.",
    "difficulty": 4,
    "minutes": 10,
    "dimensions": [
      "Connection",
      "Courage",
      "Self-Respect"
    ],
    "notYet": "Invite one person.",
    "identities": [
      "Connector",
      "Explorer",
      "Grounded"
    ],
    "capability": "Leadership",
    "prerequisites": [
      "P021",
      "P028"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P042",
    "title": "THE REAL QUESTION",
    "mission": "Ask someone you respect something you've genuinely wanted to learn from them.",
    "difficulty": 3,
    "minutes": 5,
    "dimensions": [
      "Growth",
      "Connection",
      "Courage"
    ],
    "notYet": "Write the question.",
    "identities": [
      "Learner",
      "Connector",
      "Explorer"
    ],
    "capability": "Learning",
    "prerequisites": [
      "P032"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P043",
    "title": "SHIP IT",
    "mission": "Finish and put one small thing you've created into the world.",
    "difficulty": 4,
    "minutes": 20,
    "dimensions": [
      "Creation",
      "Courage",
      "Growth"
    ],
    "notYet": "Finish it without publishing yet.",
    "identities": [
      "Maker",
      "Explorer",
      "Learner"
    ],
    "capability": "Shipping",
    "prerequisites": [
      "P037"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P044",
    "title": "THE HARDER NO",
    "mission": "Decline something you genuinely don't have the time, energy, or desire for.",
    "difficulty": 4,
    "minutes": 5,
    "dimensions": [
      "Self-Respect",
      "Courage"
    ],
    "notYet": "Draft your response.",
    "identities": [
      "Grounded",
      "Explorer"
    ],
    "capability": "Boundary",
    "prerequisites": [
      "P035"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P045",
    "title": "ASK BIGGER",
    "mission": "Make a reasonable request you'd normally avoid because you're worried about rejection.",
    "difficulty": 4,
    "minutes": 5,
    "dimensions": [
      "Courage",
      "Self-Respect",
      "Growth"
    ],
    "notYet": "Ask for something smaller first.",
    "identities": [
      "Explorer",
      "Grounded",
      "Learner"
    ],
    "capability": "Rejection tolerance",
    "prerequisites": [
      "P026"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P046",
    "title": "THE CONVERSATION",
    "mission": "Have one respectful conversation you've been postponing.",
    "difficulty": 5,
    "minutes": 15,
    "dimensions": [
      "Courage",
      "Connection",
      "Self-Respect"
    ],
    "notYet": "Write the first sentence.",
    "identities": [
      "Explorer",
      "Connector",
      "Grounded"
    ],
    "capability": "Honesty",
    "prerequisites": [
      "P025",
      "P035"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P047",
    "title": "THE UNKNOWN",
    "mission": "Try an unfamiliar experience you've been curious about.",
    "difficulty": 4,
    "minutes": 30,
    "dimensions": [
      "Courage",
      "Growth",
      "Connection"
    ],
    "notYet": "Research one place or way to try it.",
    "identities": [
      "Explorer",
      "Learner",
      "Connector"
    ],
    "capability": "Novelty",
    "prerequisites": [
      "P031",
      "P036"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P048",
    "title": "CREATE FOR SOMEONE",
    "mission": "Make something genuinely useful, meaningful, or enjoyable for another person.",
    "difficulty": 4,
    "minutes": 30,
    "dimensions": [
      "Creation",
      "Connection",
      "Growth"
    ],
    "notYet": "Decide who it's for and what they need.",
    "identities": [
      "Maker",
      "Connector",
      "Learner"
    ],
    "capability": "Service creation",
    "prerequisites": [
      "P034",
      "P042"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P049",
    "title": "KEEP YOUR WORD",
    "mission": "Complete one thing you promised yourself you'd do even though nobody else will know.",
    "difficulty": 4,
    "minutes": 20,
    "dimensions": [
      "Self-Respect",
      "Growth"
    ],
    "notYet": "Reduce the promise until it's doable today.",
    "identities": [
      "Grounded",
      "Learner"
    ],
    "capability": "Self-trust",
    "prerequisites": [
      "P023",
      "P033"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P050",
    "title": "THE PROOF",
    "mission": "Do one thing the version of you from Proof #001 would probably have avoided.",
    "difficulty": 5,
    "minutes": 30,
    "dimensions": [
      "Courage",
      "Connection",
      "Self-Respect",
      "Creation",
      "Growth"
    ],
    "notYet": "Choose a smaller version that still makes you slightly uncomfortable.",
    "identities": [
      "Explorer",
      "Connector",
      "Maker",
      "Grounded",
      "Learner"
    ],
    "capability": "Integration",
    "prerequisites": [
      "P040",
      "P041",
      "P043",
      "P044",
      "P045",
      "P046",
      "P047",
      "P048",
      "P049"
    ],
    "unlockRule": "Complete any listed prerequisite OR equivalent evidence",
    "nextLogic": "Prefer related next mission; balance weakest growth dimension; avoid >1 difficulty jump",
    "answerPrompt": "What happened, or what did you notice?"
  },
  {
    "id": "P051",
    "title": "THE NEXT TWO",
    "mission": "Take the next two-minute step on the same thing.",
    "minutes": 5,
    "difficulty": 2,
    "dimensions": [
      "Self-Respect",
      "Growth"
    ],
    "notYet": "Choose the next step and put what you need in front of you.",
    "identities": [
      "Grounded",
      "Learner"
    ],
    "capability": "Connected action",
    "prerequisites": [
      "P001"
    ],
    "contextFrom": "P001",
    "answerPrompt": "What next step did you finish?"
  },
  {
    "id": "P052",
    "title": "CLOSE THE LOOP",
    "mission": "Finish one remaining tiny step, or put a time in your calendar to return to it.",
    "minutes": 3,
    "difficulty": 2,
    "dimensions": [
      "Self-Respect",
      "Growth"
    ],
    "notYet": "Write down the remaining step.",
    "identities": [
      "Grounded",
      "Learner"
    ],
    "capability": "Connected action",
    "prerequisites": [
      "P051"
    ],
    "contextFrom": "P051",
    "answerPrompt": "What will you remember from this?"
  },
  {
    "id": "P053",
    "title": "TRY IT",
    "mission": "Try the recommendation for up to five minutes, if it is safe, affordable and something you want to try.",
    "minutes": 5,
    "difficulty": 2,
    "dimensions": [
      "Growth",
      "Courage"
    ],
    "notYet": "Choose when you could try it.",
    "identities": [
      "Learner",
      "Explorer"
    ],
    "capability": "Connected action",
    "prerequisites": [
      "P002"
    ],
    "contextFrom": "P002",
    "answerPrompt": "What did you try and notice?"
  },
  {
    "id": "P054",
    "title": "THE FOLLOW-UP",
    "mission": "If appropriate, tell the person you tried their recommendation and share one thing you noticed.",
    "minutes": 3,
    "difficulty": 2,
    "dimensions": [
      "Connection",
      "Courage"
    ],
    "notYet": "Draft one sentence without sending it.",
    "identities": [
      "Connector",
      "Explorer"
    ],
    "capability": "Connected action",
    "prerequisites": [
      "P053"
    ],
    "contextFrom": "P053",
    "answerPrompt": "What did you share?"
  },
  {
    "id": "P055",
    "title": "ONE MORE DETAIL",
    "mission": "Send the same person one specific example of something you appreciate. Only if another message feels appropriate.",
    "minutes": 5,
    "difficulty": 2,
    "dimensions": [
      "Connection",
      "Creation"
    ],
    "notYet": "Write the example for yourself.",
    "identities": [
      "Connector",
      "Maker"
    ],
    "capability": "Connected action",
    "prerequisites": [
      "P003"
    ],
    "contextFrom": "P003",
    "answerPrompt": "What specific example did you share?"
  },
  {
    "id": "P056",
    "title": "MAKE ROOM",
    "mission": "Offer the same person a small, pressure-free chance to connect. Let them freely decline.",
    "minutes": 3,
    "difficulty": 2,
    "dimensions": [
      "Connection",
      "Courage"
    ],
    "notYet": "Write a simple invitation.",
    "identities": [
      "Connector",
      "Explorer"
    ],
    "capability": "Connected action",
    "prerequisites": [
      "P055"
    ],
    "contextFrom": "P055",
    "answerPrompt": "What invitation did you offer?"
  },
  {
    "id": "P057",
    "title": "FOLLOW YOUR CURIOSITY",
    "mission": "Ask one genuine follow-up about that topic when there is an appropriate chance.",
    "minutes": 5,
    "difficulty": 2,
    "dimensions": [
      "Connection",
      "Growth"
    ],
    "notYet": "Write one follow-up question.",
    "identities": [
      "Connector",
      "Learner"
    ],
    "capability": "Connected action",
    "prerequisites": [
      "P004"
    ],
    "contextFrom": "P004",
    "answerPrompt": "What did you learn?"
  },
  {
    "id": "P058",
    "title": "REMEMBER A DETAIL",
    "mission": "At your next appropriate conversation, mention one detail you remember and listen.",
    "minutes": 3,
    "difficulty": 2,
    "dimensions": [
      "Connection",
      "Self-Respect"
    ],
    "notYet": "Write down the detail.",
    "identities": [
      "Connector",
      "Grounded"
    ],
    "capability": "Connected action",
    "prerequisites": [
      "P057"
    ],
    "contextFrom": "P057",
    "answerPrompt": "What detail did you remember?"
  },
  {
    "id": "P059",
    "title": "TRY THAT PART",
    "mission": "Spend five minutes trying the part that felt difficult again.",
    "minutes": 5,
    "difficulty": 2,
    "dimensions": [
      "Growth",
      "Creation"
    ],
    "notYet": "Try that part for one minute.",
    "identities": [
      "Learner",
      "Maker"
    ],
    "capability": "Connected action",
    "prerequisites": [
      "P005"
    ],
    "contextFrom": "P005",
    "answerPrompt": "What changed on your second try?"
  },
  {
    "id": "P060",
    "title": "SHOW THE ATTEMPT",
    "mission": "Show someone you trust your attempt and ask for one useful suggestion.",
    "minutes": 3,
    "difficulty": 2,
    "dimensions": [
      "Creation",
      "Courage",
      "Connection"
    ],
    "notYet": "Choose the person and the attempt.",
    "identities": [
      "Maker",
      "Explorer",
      "Connector"
    ],
    "capability": "Connected action",
    "prerequisites": [
      "P059"
    ],
    "contextFrom": "P059",
    "answerPrompt": "What suggestion did you receive?"
  },
  {
    "id": "P061",
    "title": "ONE SMALL CHOICE",
    "mission": "Make one small choice today that honours that preference.",
    "minutes": 5,
    "difficulty": 2,
    "dimensions": [
      "Self-Respect",
      "Courage"
    ],
    "notYet": "Write down a choice you could make.",
    "identities": [
      "Grounded",
      "Explorer"
    ],
    "capability": "Connected action",
    "prerequisites": [
      "P006"
    ],
    "contextFrom": "P006",
    "answerPrompt": "What choice did you make?"
  },
  {
    "id": "P062",
    "title": "SAY IT CLEARLY",
    "mission": "When relevant, express the same preference kindly in one sentence.",
    "minutes": 3,
    "difficulty": 2,
    "dimensions": [
      "Self-Respect",
      "Connection"
    ],
    "notYet": "Practise the sentence privately.",
    "identities": [
      "Grounded",
      "Connector"
    ],
    "capability": "Connected action",
    "prerequisites": [
      "P061"
    ],
    "contextFrom": "P061",
    "answerPrompt": "What words worked for you?"
  },
  {
    "id": "P063",
    "title": "USE ONE IDEA",
    "mission": "Spend five minutes applying one useful suggestion, if you received one. Otherwise improve one detail you choose.",
    "minutes": 5,
    "difficulty": 2,
    "dimensions": [
      "Creation",
      "Growth"
    ],
    "notYet": "Choose the detail to work on.",
    "identities": [
      "Maker",
      "Learner"
    ],
    "capability": "Connected action",
    "prerequisites": [
      "P007"
    ],
    "contextFrom": "P007",
    "answerPrompt": "What did you change?"
  },
  {
    "id": "P064",
    "title": "SHOW THE CHANGE",
    "mission": "Show the revised attempt to someone you trust. Explain one thing you changed.",
    "minutes": 3,
    "difficulty": 2,
    "dimensions": [
      "Creation",
      "Connection",
      "Courage"
    ],
    "notYet": "Write one sentence describing the change.",
    "identities": [
      "Maker",
      "Connector",
      "Explorer"
    ],
    "capability": "Connected action",
    "prerequisites": [
      "P063"
    ],
    "contextFrom": "P063",
    "answerPrompt": "What did you share this time?"
  },
  {
    "id": "P065",
    "title": "TEST THE IDEA",
    "mission": "Spend five minutes exploring one useful, safe idea from the answer.",
    "minutes": 5,
    "difficulty": 2,
    "dimensions": [
      "Growth",
      "Creation"
    ],
    "notYet": "Write one tiny way you could explore it.",
    "identities": [
      "Learner",
      "Maker"
    ],
    "capability": "Connected action",
    "prerequisites": [
      "P008"
    ],
    "contextFrom": "P008",
    "answerPrompt": "What did you discover?"
  },
  {
    "id": "P066",
    "title": "SHARE THE LEARNING",
    "mission": "Share one thing you learned with an interested person. Leave room for their view.",
    "minutes": 3,
    "difficulty": 2,
    "dimensions": [
      "Connection",
      "Growth"
    ],
    "notYet": "Draft the thought in one sentence.",
    "identities": [
      "Connector",
      "Learner"
    ],
    "capability": "Connected action",
    "prerequisites": [
      "P065"
    ],
    "contextFrom": "P065",
    "answerPrompt": "What did the conversation add?"
  },
  {
    "id": "P067",
    "title": "KEEP THE SPACE",
    "mission": "Use two minutes of the time or attention you protected for something you choose.",
    "minutes": 5,
    "difficulty": 2,
    "dimensions": [
      "Self-Respect",
      "Growth"
    ],
    "notYet": "Choose what you would like to do.",
    "identities": [
      "Grounded",
      "Learner"
    ],
    "capability": "Connected action",
    "prerequisites": [
      "P009"
    ],
    "contextFrom": "P009",
    "answerPrompt": "What did you make space for?"
  },
  {
    "id": "P068",
    "title": "MAKE IT EASIER",
    "mission": "Prepare one kind sentence for a similar request in future. Practise saying it once privately.",
    "minutes": 3,
    "difficulty": 2,
    "dimensions": [
      "Self-Respect",
      "Courage"
    ],
    "notYet": "Write just the first few words.",
    "identities": [
      "Grounded",
      "Explorer"
    ],
    "capability": "Connected action",
    "prerequisites": [
      "P067"
    ],
    "contextFrom": "P067",
    "answerPrompt": "What sentence will help next time?"
  },
  {
    "id": "P069",
    "title": "GO FIRST AGAIN",
    "mission": "Take the first small step in a similar situation when an appropriate chance comes up.",
    "minutes": 5,
    "difficulty": 2,
    "dimensions": [
      "Courage",
      "Growth"
    ],
    "notYet": "Identify the next possible moment.",
    "identities": [
      "Explorer",
      "Learner"
    ],
    "capability": "Connected action",
    "prerequisites": [
      "P010"
    ],
    "contextFrom": "P010",
    "answerPrompt": "What was different this time?"
  },
  {
    "id": "P070",
    "title": "OPEN THE DOOR",
    "mission": "Give someone else a low-pressure opportunity to join in. Respect their choice.",
    "minutes": 3,
    "difficulty": 2,
    "dimensions": [
      "Connection",
      "Courage"
    ],
    "notYet": "Write a simple invitation.",
    "identities": [
      "Connector",
      "Explorer"
    ],
    "capability": "Connected action",
    "prerequisites": [
      "P069"
    ],
    "contextFrom": "P069",
    "answerPrompt": "How did you make room for them?"
  }
];
