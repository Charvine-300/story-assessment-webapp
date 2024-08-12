"use client"

import { useRef } from "react"
import { Provider } from "react-redux"
import createStore, {  AppStore } from "../lib/state/store"

export default function StoreProvider({
  children
}:  Readonly<{
  children: React.ReactNode
}>) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = createStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}