import { allDocs } from "contentlayer/generated"
import { notFound } from "next/navigation"
import { Mdx } from "./Mdx"
import { log } from "console"



interface PageProps {
  params: {
    slug: string
  }
}


async function getDocFromParams(slug: string){
  console.log(slug)
    const doc = allDocs.find((doc) => doc.slugAsParams === slug)
    
    if (!doc) notFound()
    
    return doc
  }
  
  const page = async ({params} : PageProps)=>{
    const doc = await getDocFromParams(params.slug)
    console.log(doc)

    return <div><Mdx code={doc.body.code} /></div>
}

export default page