import { BuilderTemplate } from "@/templates/builder"

import "reactflow/dist/style.css"

export default function BuilderPage({ ...props }) {
  return <BuilderTemplate {...props} />
}

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   return protectedRoutes(context)
// }
