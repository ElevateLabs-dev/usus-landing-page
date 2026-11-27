"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export function CurrentYear() {
  const year = useSyncExternalStore(
    emptySubscribe,
    () => new Date().getFullYear(), // Client snapshot
    () => 2026 // Server snapshot (used during prerendering)
  );

  return <>{year}</>;
}
