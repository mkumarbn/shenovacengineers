"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// Rendered on the client so the static page never shows a stale year.
export function CurrentYear() {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => null,
  );
  return <span suppressHydrationWarning>{year}</span>;
}
