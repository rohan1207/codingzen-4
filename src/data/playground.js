export const LANGS = [
  { id: "python", label: "Python", ext: ".py" },
  { id: "java", label: "Java", ext: ".java" },
  { id: "cpp", label: "C++", ext: ".cpp" },
];

export const LESSONS = {
  python: [
    {
      id: "say-hi",
      label: "Say hi",
      tipTitle: "What is print()?",
      tip: "print() shows a message on the screen. Change the words inside the quotes!",
      hint: "Tip: keep the quotes around your message.",
      code: `# Change the message inside the quotes 👇
print("Hello, CodingZen!")
`,
    },
    {
      id: "loop",
      label: "Loop fun",
      tipTitle: "What is a for loop?",
      tip: "A for loop repeats code. range(3) means: do it 3 times.",
      hint: "Try changing range(3) to range(5) — more levels!",
      code: `# A loop repeats. Try range(5) for more levels!
for i in range(3):
    print("level", i + 1)
`,
    },
    {
      id: "future",
      label: "Future",
      tipTitle: "What is a variable?",
      tip: "A variable stores a value. Replace \"create\" with anything you dream of!",
      hint: 'Example: dream = "invent"  or  dream = "lead"',
      code: `# Replace "create" with anything you want — code, invent, lead…
dream = "create"
print(f"I will {dream}")
`,
    },
  ],
  java: [
    {
      id: "say-hi",
      label: "Say hi",
      tipTitle: "What is System.out.println?",
      tip: "It prints a line to the screen — Java's way of saying hello.",
      hint: "Change the text inside the quotes. Keep the semicolon ;",
      code: `// Change the message inside the quotes 👇
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, CodingZen!");
    }
}
`,
    },
    {
      id: "loop",
      label: "Loop fun",
      tipTitle: "What is a for loop?",
      tip: "A for loop repeats code. i < 3 means: run while i is 0, 1, then 2.",
      hint: "Change i < 3 to i < 5 for more levels.",
      code: `// A loop repeats. Try i < 5 for more levels!
public class Main {
    public static void main(String[] args) {
        for (int i = 0; i < 3; i++) {
            System.out.println("level " + (i + 1));
        }
    }
}
`,
    },
    {
      id: "future",
      label: "Future",
      tipTitle: "What is a String variable?",
      tip: "String stores text. Replace \"create\" with your dream word!",
      hint: 'Example: String dream = "invent";',
      code: `// Replace "create" with anything you want!
public class Main {
    public static void main(String[] args) {
        String dream = "create";
        System.out.println("I will " + dream);
    }
}
`,
    },
  ],
  cpp: [
    {
      id: "say-hi",
      label: "Say hi",
      tipTitle: "What is cout?",
      tip: "cout << sends text to the screen. Change the words inside the quotes!",
      hint: "Keep the quotes and the semicolon ; at the end.",
      code: `// Change the message inside the quotes 👇
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, CodingZen!" << endl;
    return 0;
}
`,
    },
    {
      id: "loop",
      label: "Loop fun",
      tipTitle: "What is a for loop?",
      tip: "A for loop repeats code. i < 3 means three turns: 0, 1, 2.",
      hint: "Try i < 5 to print more levels.",
      code: `// A loop repeats. Try i < 5 for more levels!
#include <iostream>
using namespace std;

int main() {
    for (int i = 0; i < 3; i++) {
        cout << "level " << (i + 1) << endl;
    }
    return 0;
}
`,
    },
    {
      id: "future",
      label: "Future",
      tipTitle: "What is a string variable?",
      tip: "string stores text. Replace \"create\" with anything you dream of!",
      hint: 'Example: string dream = "invent";',
      code: `// Replace "create" with anything you want!
#include <iostream>
#include <string>
using namespace std;

int main() {
    string dream = "create";
    cout << "I will " << dream << endl;
    return 0;
}
`,
    },
  ],
};

/** Lightweight, kid-safe runners for the three lesson shapes. */
export function runSnippet(lang, code, lessonId) {
  try {
    if (lang === "python") return runPython(code, lessonId);
    if (lang === "java") return runJava(code, lessonId);
    if (lang === "cpp") return runCpp(code, lessonId);
    return { ok: false, text: "Pick Python, Java, or C++." };
  } catch {
    return {
      ok: false,
      text: "Hmm, something looks off. Check quotes and try again!",
    };
  }
}

function stripComments(code, lang) {
  if (lang === "python") {
    return code
      .split("\n")
      .map((line) => line.replace(/#.*$/, ""))
      .join("\n");
  }
  return code.replace(/\/\/.*$/gm, "").replace(/\/\*[\s\S]*?\*\//g, "");
}

function runPython(raw, lessonId) {
  const code = stripComments(raw, "python");

  if (lessonId === "say-hi") {
    const m = code.match(/print\s*\(\s*(["'])(.*?)\1\s*\)/);
    if (!m) {
      return {
        ok: false,
        text: 'Try: print("your message")',
      };
    }
    return { ok: true, text: m[2] };
  }

  if (lessonId === "loop") {
    const range = code.match(/range\s*\(\s*(\d+)\s*\)/);
    if (!range) {
      return { ok: false, text: "Need a for loop with range(n). Try range(3)!" };
    }
    const n = Math.min(Number(range[1]), 12);
    if (!Number.isFinite(n) || n < 1) {
      return { ok: false, text: "range() needs a number like 3 or 5." };
    }
    const lines = [];
    for (let i = 0; i < n; i += 1) lines.push(`level ${i + 1}`);
    return { ok: true, text: lines.join("\n") };
  }

  if (lessonId === "future") {
    const assign = code.match(/dream\s*=\s*(["'])(.*?)\1/);
    if (!assign) {
      return {
        ok: false,
        text: 'Set dream first, like: dream = "create"',
      };
    }
    return { ok: true, text: `I will ${assign[2]}` };
  }

  return { ok: false, text: "Pick a lesson tab and try again." };
}

function runJava(raw, lessonId) {
  const code = stripComments(raw, "java");

  if (lessonId === "say-hi") {
    const m = code.match(/System\.out\.println\s*\(\s*(["'])(.*?)\1\s*\)/);
    if (!m) {
      return { ok: false, text: 'Try: System.out.println("your message");' };
    }
    return { ok: true, text: m[2] };
  }

  if (lessonId === "loop") {
    const lim = code.match(/i\s*<\s*(\d+)/);
    if (!lim) {
      return { ok: false, text: "Need a for loop like: for (int i = 0; i < 3; i++)" };
    }
    const n = Math.min(Number(lim[1]), 12);
    const lines = [];
    for (let i = 0; i < n; i += 1) lines.push(`level ${i + 1}`);
    return { ok: true, text: lines.join("\n") };
  }

  if (lessonId === "future") {
    const assign = code.match(/String\s+dream\s*=\s*(["'])(.*?)\1/);
    if (!assign) {
      return { ok: false, text: 'Set dream like: String dream = "create";' };
    }
    return { ok: true, text: `I will ${assign[2]}` };
  }

  return { ok: false, text: "Pick a lesson tab and try again." };
}

function runCpp(raw, lessonId) {
  const code = stripComments(raw, "cpp");

  if (lessonId === "say-hi") {
    const m = code.match(/cout\s*<<\s*(["'])(.*?)\1/);
    if (!m) {
      return { ok: false, text: 'Try: cout << "your message" << endl;' };
    }
    return { ok: true, text: m[2] };
  }

  if (lessonId === "loop") {
    const lim = code.match(/i\s*<\s*(\d+)/);
    if (!lim) {
      return { ok: false, text: "Need a for loop like: for (int i = 0; i < 3; i++)" };
    }
    const n = Math.min(Number(lim[1]), 12);
    const lines = [];
    for (let i = 0; i < n; i += 1) lines.push(`level ${i + 1}`);
    return { ok: true, text: lines.join("\n") };
  }

  if (lessonId === "future") {
    const assign = code.match(/string\s+dream\s*=\s*(["'])(.*?)\1/);
    if (!assign) {
      return { ok: false, text: 'Set dream like: string dream = "create";' };
    }
    return { ok: true, text: `I will ${assign[2]}` };
  }

  return { ok: false, text: "Pick a lesson tab and try again." };
}
