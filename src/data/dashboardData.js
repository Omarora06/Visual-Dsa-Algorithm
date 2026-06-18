export const dashboardData = {
  user: {
    name: "Om",
    streak: 15,
    targetCompany: "Google",
    level: "Intermediate",
  },

  stats: {
    solved: 127,
    accuracy: 82,
    readiness: 68,
    contests: 12,
    bookmarks: 24,
  },

  companyReadiness: [
    { company: "Google", score: 72 },
    { company: "Amazon", score: 68 },
    { company: "Microsoft", score: 63 },
    { company: "Meta", score: 61 },
  ],

  dailyGoal: {
    completed: 1,
    target: 3,
  },

  topics: [
    { name: "Arrays", progress: 75 },
    { name: "Trees", progress: 62 },
    { name: "Graphs", progress: 48 },
    { name: "DP", progress: 31 },
  ],

  patterns: [
    "Sliding Window",
    "Binary Search",
    "Two Pointers",
    "DFS/BFS",
  ],

  activity: [
    0, 1, 0, 2, 1, 3, 0,
    1, 0, 2, 0, 1, 2, 1,
    0, 1, 3, 0, 2, 1, 0,
    1, 2, 0, 1, 3, 1, 0,
    2, 1, 0, 1, 2, 3, 1,
  ],

  recommendedProblems: [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      topic: "Arrays",
    },
    {
      id: 2,
      title: "Binary Search",
      difficulty: "Easy",
      topic: "Binary Search",
    },
    {
      id: 3,
      title: "Valid Parentheses",
      difficulty: "Easy",
      topic: "Stack",
    },
    {
      id: 4,
      title: "Merge Sorted Array",
      difficulty: "Easy",
      topic: "Two Pointers",
    },
  ],
};