// import React from "react"

// // SVGs ...
// import Fico from '../svg/f_ico.svg';

// //  STYLES ...
// import topBodyNavStyles from "../styles/topbodynav.module.scss"
// import "../styles/index.scss"

// function Body() {
//   return (
//     <div className={topBodyNavStyles.wrapper}>
//       <div className={topBodyNavStyles.container}>
//       <a href="https://www.facebook.com/greekfringefest/" target="_blank" rel="noreferrer" class={topBodyNavStyles.facebook}>
//             <Fico/>
//       </a>
//       <a href="https://www.patreon.com/greekfringefest" target="_blank" rel="noreferrer">
//           <svg width={24.273} height={24.273} viewBox="0 0 24.273 24.273">
//           <defs>
//             <style>{".a{fill:#1a1818;fill-rule:evenodd;}"}</style>
//           </defs>
//           <path
//             className="a"
//             d="M705.824,870.661c-3.022,0-3.449.016-4.7.073a8.912,8.912,0,0,0-2.946.564,6.206,6.206,0,0,0-3.55,3.55,8.914,8.914,0,0,0-.564,2.946c-.059,1.294-.073,1.708-.073,5s.014,3.709.073,5a8.915,8.915,0,0,0,.564,2.946,6.207,6.207,0,0,0,3.55,3.55,8.915,8.915,0,0,0,2.946.564c1.295.059,1.708.073,5,.073s3.709-.014,5-.073a8.911,8.911,0,0,0,2.946-.564,6.206,6.206,0,0,0,3.55-3.55,8.906,8.906,0,0,0,.564-2.946c.057-1.254.072-1.681.073-4.7v-.6c0-3.022-.016-3.449-.073-4.7a8.9,8.9,0,0,0-.564-2.946,6.205,6.205,0,0,0-3.55-3.55,8.909,8.909,0,0,0-2.946-.564c-1.254-.057-1.681-.072-4.7-.073Zm8.117,5.436a1.116,1.116,0,1,1-1.116-1.116,1.116,1.116,0,0,1,1.116,1.116Zm-7.817,10.885a4.184,4.184,0,1,1,4.184-4.184,4.184,4.184,0,0,1-4.184,4.184Zm0-10.155a5.97,5.97,0,1,1-5.97,5.97,5.97,5.97,0,0,1,5.97-5.97Zm0-4.32c3.351,0,3.748.013,5.072.073a6.947,6.947,0,0,1,2.331.432,4.16,4.16,0,0,1,2.382,2.382,6.952,6.952,0,0,1,.432,2.331c.06,1.324.073,1.721.073,5.072s-.013,3.749-.073,5.072a6.953,6.953,0,0,1-.432,2.331,4.158,4.158,0,0,1-2.382,2.382,6.94,6.94,0,0,1-2.331.432c-1.323.06-1.72.073-5.072.073s-3.749-.013-5.072-.073a6.941,6.941,0,0,1-2.331-.432,4.156,4.156,0,0,1-2.382-2.382,6.945,6.945,0,0,1-.432-2.331c-.06-1.324-.073-1.721-.073-5.072s.013-3.748.073-5.072a6.944,6.944,0,0,1,.432-2.331,4.158,4.158,0,0,1,2.382-2.382,6.949,6.949,0,0,1,2.331-.432C702.376,872.52,702.773,872.507,706.125,872.507Z"
//             transform="translate(-693.988 -870.661)"
//           />
//           <path
//             className="a"
//             d="M846.83,914.479a.072.072,0,1,1,.071-.072A.072.072,0,0,1,846.83,914.479Z"
//             transform="translate(-827.993 -908.971)"
//           />
//           </svg>
//       </a>
//       <a href="mailto:someone@example.com" target="_blank" rel="noreferrer">
//           <svg width={24.273} height={16.999} viewBox="0 0 24.273 16.999">
//           <defs>
//             <style>{".a{fill:#1a1818;}"}</style>
//           </defs>
//           <path
//             className="a"
//             d="M1254.668,917.27h-14.284a5,5,0,0,1-4.995-4.994v-7.009a5,5,0,0,1,4.995-5h14.284a5,5,0,0,1,4.995,5v7.009A5,5,0,0,1,1254.668,917.27Zm-14.284-15.2a3.2,3.2,0,0,0-3.2,3.2v7.009a3.2,3.2,0,0,0,3.2,3.2h14.284a3.2,3.2,0,0,0,3.2-3.2v-7.009a3.2,3.2,0,0,0-3.2-3.2Z"
//             transform="translate(-1235.389 -900.271)"
//             WebkitTransform="translate(-1235.389 -900.271)"
//           />
//           <path
//             className="a"
//             d="M1275.724,936.9a.893.893,0,0,1-.534-.176l-7.289-5.386a.9.9,0,1,1,1.068-1.445l6.745,4.983,6.472-4.973a.9.9,0,0,1,1.1,1.425l-7.009,5.386A.9.9,0,0,1,1275.724,936.9Z"
//             transform="translate(-1263.587 -926.096)"
//             WebkitTransform="translate(-1263.587 -926.096)"
//           />
//           </svg>
//       </a>
//       <a href="https://www.patreon.com/greekfringefest" target="_blank" rel="noreferrer" class={topBodyNavStyles.patron}>
//           <svg width={132} height={24} viewBox="0 0 132 24">
//           <text
//             transform="translate(-1668 -18) translate(75) translate(1658 34)"
//             WebkitTransform="translate(-1668 -18) translate(75) translate(1658 34)"
//             fontSize={12}
//           >
//             <tspan x={-49.436} y={0}>
//               {"Become a Patron"}
//             </tspan>
//           </text>
//           <g
//             transform="translate(-1668 -18) translate(75) translate(1593 18)"
//             WebkitTransform="translate(-1668 -18) translate(75) translate(1593 18)"
//             fill="none"
//             stroke="#000"
//           >
//             <rect width={132} height={24} rx={12} stroke="none" />
//             <rect x={0.5} y={0.5} width={131} height={23} rx={11.5} />
//           </g>
//           </svg>
//       </a>
//       </div>
//     </div>
//   )
// }

// export default Body


import React from "react"

//  STYLES ...
import topBodyNavStyles from "../styles/topbodynav.module.scss"

function Body() {
  return (
    <div className={topBodyNavStyles.wrapper}>
      <div className={topBodyNavStyles.container}>
        <a href="https://www.facebook.com/greekfringefest/" target="_blank" rel="noreferrer" class={topBodyNavStyles.facebook}>
          <svg width={24.273} height={24.273} viewBox="0 0 24.273 24.273">
          <defs>
            <style>{".a,.b{fill:#1a1818;}.b{fill-rule:evenodd;}"}</style>
          </defs>
          <path
            className="a"
            d="M435.425,894.934A12.137,12.137,0,1,1,447.561,882.8,12.15,12.15,0,0,1,435.425,894.934Zm0-22.447a10.31,10.31,0,1,0,10.31,10.31A10.322,10.322,0,0,0,435.425,872.488Z"
            transform="translate(-423.288 -870.661)"
          />
          <path
            className="b"
            d="M504.49,927.672h-1.667v-1.109c.122-1.048,1.853-.849,1.853-.849v-1.8h0c-.059-.014-3.443-.817-4.115,1.758a0,0,0,0,1,0,0l0,.017a13.066,13.066,0,0,0-.1,1.982h-1.445v1.972h1.534v5.363h2.234v-5.363h1.709l.193-1.972Z"
            transform="translate(-489.71 -917.258)"
          />
          </svg>
        </a>
        <a href="https://www.facebook.com/greekfringefest/" target="_blank" rel="noreferrer" class={topBodyNavStyles.facebook}>
          <svg width={24.273} height={24.273} viewBox="0 0 24.273 24.273">
          <defs>
            <style>{".a{fill:#1a1818;fill-rule:evenodd;}"}</style>
          </defs>
          <path
            className="a"
            d="M705.824,870.661c-3.022,0-3.449.016-4.7.073a8.912,8.912,0,0,0-2.946.564,6.206,6.206,0,0,0-3.55,3.55,8.914,8.914,0,0,0-.564,2.946c-.059,1.294-.073,1.708-.073,5s.014,3.709.073,5a8.915,8.915,0,0,0,.564,2.946,6.207,6.207,0,0,0,3.55,3.55,8.915,8.915,0,0,0,2.946.564c1.295.059,1.708.073,5,.073s3.709-.014,5-.073a8.911,8.911,0,0,0,2.946-.564,6.206,6.206,0,0,0,3.55-3.55,8.906,8.906,0,0,0,.564-2.946c.057-1.254.072-1.681.073-4.7v-.6c0-3.022-.016-3.449-.073-4.7a8.9,8.9,0,0,0-.564-2.946,6.205,6.205,0,0,0-3.55-3.55,8.909,8.909,0,0,0-2.946-.564c-1.254-.057-1.681-.072-4.7-.073Zm8.117,5.436a1.116,1.116,0,1,1-1.116-1.116,1.116,1.116,0,0,1,1.116,1.116Zm-7.817,10.885a4.184,4.184,0,1,1,4.184-4.184,4.184,4.184,0,0,1-4.184,4.184Zm0-10.155a5.97,5.97,0,1,1-5.97,5.97,5.97,5.97,0,0,1,5.97-5.97Zm0-4.32c3.351,0,3.748.013,5.072.073a6.947,6.947,0,0,1,2.331.432,4.16,4.16,0,0,1,2.382,2.382,6.952,6.952,0,0,1,.432,2.331c.06,1.324.073,1.721.073,5.072s-.013,3.749-.073,5.072a6.953,6.953,0,0,1-.432,2.331,4.158,4.158,0,0,1-2.382,2.382,6.94,6.94,0,0,1-2.331.432c-1.323.06-1.72.073-5.072.073s-3.749-.013-5.072-.073a6.941,6.941,0,0,1-2.331-.432,4.156,4.156,0,0,1-2.382-2.382,6.945,6.945,0,0,1-.432-2.331c-.06-1.324-.073-1.721-.073-5.072s.013-3.748.073-5.072a6.944,6.944,0,0,1,.432-2.331,4.158,4.158,0,0,1,2.382-2.382,6.949,6.949,0,0,1,2.331-.432C702.376,872.52,702.773,872.507,706.125,872.507Z"
            transform="translate(-693.988 -870.661)"
          />
          <path
            className="a"
            d="M846.83,914.479a.072.072,0,1,1,.071-.072A.072.072,0,0,1,846.83,914.479Z"
            transform="translate(-827.993 -908.971)"
          />
          </svg>
        </a>
        <a href="https://www.facebook.com/greekfringefest/" target="_blank" rel="noreferrer" class={topBodyNavStyles.facebook}>
          <svg width={24.273} height={16.999} viewBox="0 0 24.273 16.999">
          <defs>
            <style>{".a{fill:#1a1818;}"}</style>
          </defs>
          <path
            className="a"
            d="M1254.668,917.27h-14.284a5,5,0,0,1-4.995-4.994v-7.009a5,5,0,0,1,4.995-5h14.284a5,5,0,0,1,4.995,5v7.009A5,5,0,0,1,1254.668,917.27Zm-14.284-15.2a3.2,3.2,0,0,0-3.2,3.2v7.009a3.2,3.2,0,0,0,3.2,3.2h14.284a3.2,3.2,0,0,0,3.2-3.2v-7.009a3.2,3.2,0,0,0-3.2-3.2Z"
            transform="translate(-1235.389 -900.271)"
          />
          <path
            className="a"
            d="M1275.724,936.9a.893.893,0,0,1-.534-.176l-7.289-5.386a.9.9,0,1,1,1.068-1.445l6.745,4.983,6.472-4.973a.9.9,0,0,1,1.1,1.425l-7.009,5.386A.9.9,0,0,1,1275.724,936.9Z"
            transform="translate(-1263.587 -926.096)"
          />
          </svg>
        </a>
      <div className={topBodyNavStyles.patron}>
        <a href="https://www.patreon.com/greekfringefest" target="_blank" rel="noreferrer">
          <svg width={132} height={24} viewBox="0 0 132 24">
          <text
            transform="translate(-1668 -18) translate(75) translate(1658 34)"
            fontSize={12}
          >
            <tspan x={-49.436} y={0}>
              {"Become a Patron"}
            </tspan>
          </text>
          <g
            transform="translate(-1668 -18) translate(75) translate(1593 18)"
            fill="none"
            stroke="#000"
          >
            <rect width={132} height={24} rx={12} stroke="none" />
            <rect x={0.5} y={0.5} width={131} height={23} rx={11.5} />
          </g>
          </svg>
        </a>  
      </div>
      </div>
    </div>
  )
}

export default Body
