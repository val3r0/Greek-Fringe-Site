import React from "react"

//  STYLES ...
import topBodyNavStyles from "../styles/topbodynav.module.scss"
import Headroom from "react-headroom"

function Body() {
  return (
    <Headroom>
    <div className={topBodyNavStyles.wrapper}>
        <div className={topBodyNavStyles.container}>
          <a href="https://twitter.com/greekfringe" target="_blank" rel="noreferrer" className={topBodyNavStyles.socialico}>
            <svg viewBox="0 0 15.667 15.667">
            <path
              d="M7.833 15.667a7.833 7.833 0 117.833-7.833 7.842 7.842 0 01-7.833 7.833zm0-14.488a6.654 6.654 0 106.654 6.655 6.662 6.662 0 00-6.654-6.655z"
              fill="#000000"
            />
            <path
              d="M10.564 7.425a.9.9 0 00.811-.482 1.33 1.33 0 01-.877.1 3.576 3.576 0 00-.041-.17A1.6 1.6 0 008.88 5.638c.057-.023.115-.044.173-.064.078-.028.534-.1.462-.264-.061-.141-.618.107-.723.14.139-.052.367-.142.392-.3a1.107 1.107 0 00-.582.276.4.4 0 00.111-.221 3.569 3.569 0 00-1.164 1.8 2.758 2.758 0 00-.564-.453 14.67 14.67 0 00-1.908-.84 1.01 1.01 0 00.636.936 1.562 1.562 0 00-.458.055c.063.334.271.608.833.741a.683.683 0 00-.51.2.864.864 0 00.916.449c-.571.246-.233.7.232.634a1.973 1.973 0 01-2.76.074c1.874 2.553 5.946 1.51 6.553-.949a1.128 1.128 0 00.888-.335 1.812 1.812 0 01-.843-.085z"
              fill="#000000"
            />
          </svg>
          </a>
          <a href="https://www.facebook.com/greekfringe/" target="_blank" rel="noreferrer" className={topBodyNavStyles.socialico}>
            <svg viewBox="0 0 24.273 24.273">
            <defs>
              <style>{".w,.s{fill:#000000;}.b{fill-rule:evenodd;}"}</style>
            </defs>
            <path
              className="w"
              d="M435.425,894.934A12.137,12.137,0,1,1,447.561,882.8,12.15,12.15,0,0,1,435.425,894.934Zm0-22.447a10.31,10.31,0,1,0,10.31,10.31A10.322,10.322,0,0,0,435.425,872.488Z"
              transform="translate(-423.288 -870.661)"
            />
            <path
              className="s"
              d="M504.49,927.672h-1.667v-1.109c.122-1.048,1.853-.849,1.853-.849v-1.8h0c-.059-.014-3.443-.817-4.115,1.758a0,0,0,0,1,0,0l0,.017a13.066,13.066,0,0,0-.1,1.982h-1.445v1.972h1.534v5.363h2.234v-5.363h1.709l.193-1.972Z"
              transform="translate(-489.71 -917.258)"
            />
            </svg>
          </a>
          <a href="https://www.instagram.com/greekfringe/" target="_blank" rel="noreferrer" className={topBodyNavStyles.socialico}>
            <svg viewBox="0 0 24.273 24.273">
            <defs>
              <style>{".o{fill:#000000;fill-rule:evenodd;}"}</style>
            </defs>
            <path
              className="o"
              d="M705.824,870.661c-3.022,0-3.449.016-4.7.073a8.912,8.912,0,0,0-2.946.564,6.206,6.206,0,0,0-3.55,3.55,8.914,8.914,0,0,0-.564,2.946c-.059,1.294-.073,1.708-.073,5s.014,3.709.073,5a8.915,8.915,0,0,0,.564,2.946,6.207,6.207,0,0,0,3.55,3.55,8.915,8.915,0,0,0,2.946.564c1.295.059,1.708.073,5,.073s3.709-.014,5-.073a8.911,8.911,0,0,0,2.946-.564,6.206,6.206,0,0,0,3.55-3.55,8.906,8.906,0,0,0,.564-2.946c.057-1.254.072-1.681.073-4.7v-.6c0-3.022-.016-3.449-.073-4.7a8.9,8.9,0,0,0-.564-2.946,6.205,6.205,0,0,0-3.55-3.55,8.909,8.909,0,0,0-2.946-.564c-1.254-.057-1.681-.072-4.7-.073Zm8.117,5.436a1.116,1.116,0,1,1-1.116-1.116,1.116,1.116,0,0,1,1.116,1.116Zm-7.817,10.885a4.184,4.184,0,1,1,4.184-4.184,4.184,4.184,0,0,1-4.184,4.184Zm0-10.155a5.97,5.97,0,1,1-5.97,5.97,5.97,5.97,0,0,1,5.97-5.97Zm0-4.32c3.351,0,3.748.013,5.072.073a6.947,6.947,0,0,1,2.331.432,4.16,4.16,0,0,1,2.382,2.382,6.952,6.952,0,0,1,.432,2.331c.06,1.324.073,1.721.073,5.072s-.013,3.749-.073,5.072a6.953,6.953,0,0,1-.432,2.331,4.158,4.158,0,0,1-2.382,2.382,6.94,6.94,0,0,1-2.331.432c-1.323.06-1.72.073-5.072.073s-3.749-.013-5.072-.073a6.941,6.941,0,0,1-2.331-.432,4.156,4.156,0,0,1-2.382-2.382,6.945,6.945,0,0,1-.432-2.331c-.06-1.324-.073-1.721-.073-5.072s.013-3.748.073-5.072a6.944,6.944,0,0,1,.432-2.331,4.158,4.158,0,0,1,2.382-2.382,6.949,6.949,0,0,1,2.331-.432C702.376,872.52,702.773,872.507,706.125,872.507Z"
              transform="translate(-693.988 -870.661)"
            />
            <path
              className="o"
              d="M846.83,914.479a.072.072,0,1,1,.071-.072A.072.072,0,0,1,846.83,914.479Z"
              transform="translate(-827.993 -908.971)"
            />
            </svg>
          </a>
          <a href="mailto:greekfringe@gmail.com" target="_blank" rel="noreferrer" className={topBodyNavStyles.socialico}>
            <svg viewBox="0 0 24.273 16.999">
            <defs>
              <style>{".x{fill:#000000;}"}</style>
            </defs>
            <path
              className="x"
              d="M1254.668,917.27h-14.284a5,5,0,0,1-4.995-4.994v-7.009a5,5,0,0,1,4.995-5h14.284a5,5,0,0,1,4.995,5v7.009A5,5,0,0,1,1254.668,917.27Zm-14.284-15.2a3.2,3.2,0,0,0-3.2,3.2v7.009a3.2,3.2,0,0,0,3.2,3.2h14.284a3.2,3.2,0,0,0,3.2-3.2v-7.009a3.2,3.2,0,0,0-3.2-3.2Z"
              transform="translate(-1235.389 -900.271)"
            />
            <path
              className="x"
              d="M1275.724,936.9a.893.893,0,0,1-.534-.176l-7.289-5.386a.9.9,0,1,1,1.068-1.445l6.745,4.983,6.472-4.973a.9.9,0,0,1,1.1,1.425l-7.009,5.386A.9.9,0,0,1,1275.724,936.9Z"
              transform="translate(-1263.587 -926.096)"
            />
            </svg>
          </a>    
          <a href="https://www.patreon.com/greekfringefest" target="_blank" rel="noreferrer">
            <button className={topBodyNavStyles.patreonbtn}>Become a Patron</button>
          </a>
          <span></span> 
        </div>
    </div>
    </Headroom>
  )
}

export default Body
