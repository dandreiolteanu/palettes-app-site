import React from "react"
import TermsAndConditionsText from "../components/termsAndConditionsText"

const IndexPage = ({ data }) => (
  (
    <div>
      <TermsAndConditionsText/>
      <a href="https://palettes.app/terms-and-conditions/" style={{display:'block', textAlign: 'center'}}>Open in browser</a>
    </div>
  )
)

export default IndexPage