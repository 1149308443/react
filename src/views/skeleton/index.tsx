
import React from 'react'
// https://hub.fastgit.org//danilowoz/react-content-loader
import ContentLoader from 'react-content-loader'
import Style from './style.less'

const Skeleton = (): JSX.Element => {
  // const MyLoader = (): JSX.Element => <ContentLoader />
  // const MyFacebookLoader = (): JSX.Element => <Facebook />
  return (
    <div>
      <ContentLoader viewBox="0 0 380 70">
        {/* Only SVG shapes */}
        <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
        <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
        <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
      </ContentLoader>


      <div className={Style.skeleton}>
        <div className={Style.progress} />
      </div>
    </div>
  )
}

export default Skeleton