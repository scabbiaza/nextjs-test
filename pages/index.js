import "./index.css"

import Link from 'next/link'

export default () => (
  <div>
    <Link href="/about">
      <a>ABOUT</a>
    </Link><br/><br/>
    should be red color here
  </div>
)
