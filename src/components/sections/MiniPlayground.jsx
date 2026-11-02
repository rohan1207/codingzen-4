"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Play, RotateCcw, Sparkles } from "lucide-react";
import { LESSONS, LANGS, runSnippet } from "@/data/playground";

export default function MiniPlayground() {
  const [lang, setLang] = useState("python");
  const [lessonId, setLessonId] = useState("say-hi");
  const [code, setCode] = useState(LESSONS.python[0].code);
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState("idle"); // idle | ok | err
  const [langOpen, setLangOpen] = useState(false);
  const textareaRef = useRef(null);
  const gutterRef = useRef(null);
  const langMenuRef = useRef(null);

  const lessons = LESSONS[lang];
  const lesson = lessons.find((l) => l.id === lessonId) ?? lessons[0];
  const langMeta = LANGS.find((l) => l.id === lang) ?? LANGS[0];

  const lines = useMemo(() => {
    const count = Math.max(code.split("\n").length, 1);
    return Array.from({ length: count }, (_, i) => i + 1);
  }, [code]);

  useEffect(() => {
    const next = LESSONS[lang].find((l) => l.id === lessonId) ?? LESSONS[lang][0];
    setLessonId(next.id);
    setCode(next.code);
    setOutput("");
    setStatus("idle");
  }, [lang]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!langOpen) return undefined;
    const onDoc = (e) => {
      if (!langMenuRef.current?.contains(e.target)) setLangOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [langOpen]);

  function pickLesson(id) {
    const next = lessons.find((l) => l.id === id);
    if (!next) return;
    setLessonId(id);
    setCode(next.code);
    setOutput("");
    setStatus("idle");
  }

  function resetCode() {
    setCode(lesson.code);
    setOutput("");
    setStatus("idle");
  }

  function run() {
    const result = runSnippet(lang, code, lesson.id);
    setOutput(result.text);
    setStatus(result.ok ? "ok" : "err");
  }

  function onScroll() {
    if (textareaRef.current && gutterRef.current) {
      gutterRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  }

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-[#e8e8e8] bg-white shadow-[0_36px_90px_-48px_rgba(0,0,0,0.4)]">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#eee] bg-[#fafafa] px-4 py-3 sm:px-5">
        <div className="min-w-0">
          <p className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-ember">
            try a line
          </p>
          <p className="truncate text-[15px] text-[#555]">Edit the code — then hit run.</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Language dropdown */}
          <div className="relative" ref={langMenuRef}>
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full border border-[#e5e5e5] bg-white px-3 py-1.5 font-display text-xs font-medium tracking-[-0.02em] text-[#222] shadow-sm transition hover:border-[#ccc]"
            >
              <span className="font-mono text-[10px] uppercase tracking-wider text-ember">
                {langMeta.ext}
              </span>
              {langMeta.label}
              <ChevronDown size={14} className={`text-[#999] transition ${langOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  className="absolute right-0 z-20 mt-2 min-w-[148px] overflow-hidden rounded-xl border border-[#e8e8e8] bg-white py-1 shadow-xl"
                >
                  {LANGS.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setLang(item.id);
                        setLangOpen(false);
                      }}
                      className={`flex w-full items-center gap-2 px-3 py-2 text-left font-display text-xs font-medium tracking-[-0.02em] transition ${
                        item.id === lang ? "bg-black text-white" : "text-[#333] hover:bg-[#f5f5f5]"
                      }`}
                    >
                      <span className={`font-mono text-[10px] ${item.id === lang ? "text-ember" : "text-[#aaa]"}`}>
                        {item.ext}
                      </span>
                      {item.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Lesson tabs */}
          <div className="flex rounded-full border border-[#e5e5e5] bg-white p-0.5">
            {lessons.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => pickLesson(item.id)}
                className={`rounded-full px-3 py-1.5 font-display text-xs font-medium tracking-[-0.02em] transition ${
                  item.id === lessonId
                    ? "bg-black text-white"
                    : "text-[#555] hover:text-ink"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tip strip */}
      <div className="flex flex-wrap items-start gap-2 border-b border-[#f0f0f0] bg-white px-4 py-3 sm:px-5">
        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-ember/10 text-ember">
          <Sparkles size={12} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-display text-sm font-medium tracking-[-0.02em] text-[#222]">
            {lesson.tipTitle}
          </p>
          <p className="mt-0.5 text-[15px] leading-snug text-[#555]">{lesson.tip}</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
        {/* Editor */}
        <div className="relative min-h-[280px] bg-black">
          <div className="flex items-center justify-between border-b border-white/5 px-4 py-2">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-2 font-display text-[10px] font-medium uppercase tracking-[0.16em] text-white/35">
                editor · {langMeta.ext}
              </span>
            </div>
            <button
              type="button"
              onClick={resetCode}
              className="inline-flex items-center gap-1 rounded-md px-2 py-1 font-display text-[10px] font-medium uppercase tracking-[0.12em] text-white/40 transition hover:bg-white/5 hover:text-white/70"
            >
              <RotateCcw size={11} />
              Reset
            </button>
          </div>

          <div className="relative flex min-h-[240px]">
            <div
              ref={gutterRef}
              aria-hidden
              className="select-none overflow-hidden border-r border-white/5 bg-[#0c0c0c] px-3 py-4 text-right font-mono text-[12px] leading-6 text-white/25"
            >
              {lines.map((n) => (
                <div key={n}>{n}</div>
              ))}
            </div>
            <textarea
              ref={textareaRef}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onScroll={onScroll}
              spellCheck={false}
              aria-label="Code editor"
              className="min-h-[240px] w-full resize-none bg-transparent px-4 py-4 font-mono text-[13px] leading-6 text-[#e8e8e8] outline-none caret-ember placeholder:text-white/25 sm:text-sm"
              placeholder="Write your code here…"
            />
          </div>
        </div>

        {/* Output */}
        <div className="flex flex-col justify-between gap-5 border-t border-[#eee] p-5 lg:border-l lg:border-t-0 lg:p-6">
          <div>
            <p className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-[#999]">
              output
            </p>
            <motion.pre
              key={`${status}-${output}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-3 min-h-[120px] whitespace-pre-wrap rounded-2xl border p-4 font-mono text-sm leading-relaxed ${
                status === "err"
                  ? "border-ember/30 bg-ember/5 text-[#8a1f1f]"
                  : status === "ok"
                    ? "border-[#e8e8e8] bg-[#f7f7f7] text-ink"
                    : "border-[#eee] bg-[#fafafa] text-[#999]"
              }`}
            >
              {output || "// waiting for run…"}
            </motion.pre>
            <p className="mt-3 text-xs leading-relaxed text-[#888]">{lesson.hint}</p>
          </div>

          <button
            type="button"
            onClick={run}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-ember px-4 py-3.5 text-sm font-medium text-white shadow-[0_16px_40px_-18px_rgba(232,68,56,0.7)] transition hover:brightness-110 active:scale-[0.99]"
          >
            <Play size={16} fill="currentColor" />
            Run snippet
          </button>
        </div>
      </div>
    </div>
  );
}
