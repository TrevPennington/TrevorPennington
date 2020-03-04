import { ThemeToggler } from "gatsby-plugin-dark-mode"
import React, { useState } from "react"
import styled from "styled-components"

const ToggleSpacer = styled.div`
  
`
const ToggleWrapper = styled.div`
  width: 20px;
  height: 20px;
  transform: translateY(20px) translateX(20px);
`

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <>
      <ThemeToggler>
        {({ toggleTheme }) => (
          <ToggleWrapper
            onClick={() => {
              toggleTheme(darkMode ? "dark" : "light")
              setDarkMode(!darkMode)
            }}
          >
            <svg
              version="1.1"
              width="20"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              fill="var(--textNormal)"
            >
              <path
                d="M22 41C32.4934 41 41 32.4934 41 22C41 11.5066 32.4934 3 22
  3C11.5066 3 3 11.5066 3 22C3 32.4934 11.5066 41 22 41ZM7 22C7
  13.7157 13.7157 7 22 7V37C13.7157 37 7 30.2843 7 22Z"
                class="icon-module--icon--1ihz7"
              ></path>
            </svg>
          </ToggleWrapper>
        )}
      </ThemeToggler>
      <ToggleSpacer />
    </>
  )
}

export default DarkModeToggle