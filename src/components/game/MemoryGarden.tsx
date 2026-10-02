"use client";
import { useEffect, useReducer, useRef } from "react";
import { Leaf, Moon, Sun, Flower2, Cloud, Sparkles, RotateCcw, Play } from "lucide-react";
import { gameReducer, initialGame, shuffledDeck } from "./memory-game";
const symbols = [
  { Icon: Leaf, name: "Leaf" }, { Icon: Moon, name: "Moon" },
  { Icon: Sun, name: "Sun" }, { Icon: Flower2, name: "Flower" },
  { Icon: Cloud, name: "Cloud" }, { Icon: Sparkles, name: "Stars" },
];
export function MemoryGarden() {
  const [game, dispatch] = useReducer(gameReducer, initialGame);
  const board = useRef<HTMLDivElement>(null);
  const started = game.deck.length > 0;
  const won = started && game.matched.length === game.deck.length;
  useEffect(() => {
    if (game.open.length !== 2) return;
    const timeout = setTimeout(() => dispatch({ type: "hide" }), 850);
    return () => clearTimeout(timeout);
  }, [game.open]);
  const start = () => {
    dispatch({ type: "start", deck: shuffledDeck() });
    // Move keyboard focus to the board without a perpetual animation loop.
    requestAnimationFrame(() => board.current?.querySelector<HTMLButtonElement>("button")?.focus({ preventScroll: true }));
  };
  const message = won ? `Lovely work! All six pairs found in ${game.moves} moves. Take a breath—you’ve earned it.`
    : game.open.length === 2 ? "Not a pair this time. Try another two."
    : game.open.length === 1 ? `${symbols[game.deck[game.open[0]]].name} revealed. Find its partner.`
    : started ? `${game.matched.length / 2} of 6 pairs found. Pick two cards.` : "A tiny pause for a curious mind.";
  return (
    <section id="play" className="memory-garden" aria-labelledby="garden-title">
      <div className="garden-orbits" aria-hidden="true"><span /><span /><span /></div>
      <div className="garden-intro"><span className="eyebrow">06 / A LITTLE ROOM TO PLAY</span><h2 id="garden-title">Pause.<br /><em>Find a little joy.</em></h2><p>Give your scrolling finger a break. Turn over two cards and find the matching pairs.</p><p className="garden-note">Six pairs. No timer. No pressure.</p></div>
      <div className="garden-panel">
        <div className="garden-toolbar"><span>MEMORY GARDEN</span><span>{game.matched.length / 2}/6 pairs · {game.moves} moves</span></div>
        <div ref={board} className={`garden-board ${started ? "is-playing" : ""}`} role="group" aria-label="Memory matching cards">
          {(started ? game.deck : Array.from({ length: 12 }, () => 0)).map((value, index) => {
            const matched = game.matched.includes(index);
            const faceUp = matched || game.open.includes(index);
            const { Icon, name } = symbols[value];
            return <button key={index} type="button" className={`garden-card ${faceUp ? "is-flipped" : ""} ${matched ? "is-matched" : ""}`} disabled={!started} aria-disabled={started && (matched || faceUp || game.open.length === 2)} aria-label={!started ? `Card ${index + 1}` : `Card ${index + 1}: ${matched ? `matched ${name}` : faceUp ? name : "face down"}`} onClick={() => dispatch({ type: "flip", index })}>
              <span className="card-inner" aria-hidden="true"><span className="card-back">✧</span><span className="card-face"><Icon strokeWidth={1.5} /></span></span>
            </button>;
          })}
        </div>
        <p className={`garden-status ${won ? "game-won" : ""}`} role="status" aria-live="polite" aria-atomic="true">{message}</p>
        <button className="garden-start" type="button" onClick={start}>{started ? <RotateCcw size={16} /> : <Play size={16} />}{won ? "Play again" : started ? "Fresh start" : "Let’s play"}</button>
      </div>
    </section>
  );
}
