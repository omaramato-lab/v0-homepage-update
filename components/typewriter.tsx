"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface TypewriterProps {
  words: string[]
  speed?: number
  delayBetweenWords?: number
  className?: string
  cursorClassName?: string
  loop?: boolean
}

export function Typewriter({ 
  words, 
  speed = 50, 
  delayBetweenWords = 3000, 
  className = "",
  cursorClassName = "",
  loop = false
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]
    let timer: NodeJS.Timeout

    if (!isDeleting) {
      // Typing phase
      if (displayedText.length < currentWord.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1))
        }, speed)
      } else if (loop) {
        // Only start deleting if loop is enabled
        timer = setTimeout(() => {
          setIsDeleting(true)
        }, delayBetweenWords)
      }
      // If loop is false and typing is complete, do nothing (text stays)
    } else {
      // Deleting phase (only runs if loop is true)
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, speed / 2)
      } else {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length)
      }
    }

    return () => clearTimeout(timer)
  }, [displayedText, wordIndex, isDeleting, speed, delayBetweenWords, words])

  const showCursor = loop || displayedText.length < words[wordIndex].length

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className={`inline-block ml-1 ${cursorClassName}`}
        >
          |
        </motion.span>
      )}
    </span>
  )
}
