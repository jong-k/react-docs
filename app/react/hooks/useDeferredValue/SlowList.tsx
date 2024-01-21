import { memo } from "react";

const SlowList = memo(function SlowList({ text }: { text: string }) {
  // Log once. The actual slowdown is inside SlowItem.
  console.log("[ARTIFICIALLY SLOW] Rendering 250 <SlowItem />");

  let items = [];
  for (let i = 0; i < 250; i++) {
    items.push(<SlowItem key={i} text={text} />);
  }
  return <ul>{items}</ul>;
});

function SlowItem({ text }: { text: string }) {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return <li className="p-1 m-1 border border-cyan-300">Text: {text}</li>;
}

export default SlowList;
