import React from 'react'
import Head from 'next/head'
import Image from "next/image"
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Heading } from '@chakra-ui/react'
const Moviepage = ({movie}) => {
    // console.log(movie)
    const router=useRouter()
    const handleClick=(id)=>{
      router.push(`movies/${id}`)
    }
    // const myLoader = ({ src, width, quality }) => {
    //     return `https://images-na.ssl-images-amazon.com/images/${src}?w=${width}&q=${quality || 75}`
    //   }
    return (<>
  
    <Head>
  <title>Movies pages</title>
  <meta title='decription' content="blogs,react,js,typecript" />
  <link rel="ico" href="/favicon.ico" />
    </Head>
     <main>
      <h1>Movies Page</h1>
      
      {
      movie.map((mov)=>(<div key={mov.id}>
        <div>
              {/* <h2><Link href={`/${mov.id}`}>{mov.title} </Link></h2> */}
          <Heading onClick={()=>handleClick(mov.id)}>{mov.title}</Heading>
          <Image src={mov.posterUrl} width={500} height={500}  alt={mov.title}  />
        </div>
          </div>
      ))
      }
     </main>
    </>
    )
  }


export const  getServerSideProps=async()=>{
    let response=await fetch(`https://vercel-deploy-jade-one.vercel.app/movies`)
    let data=await response.json()
    return{
        props:{
            movie:data
        }
    }
}
export default Moviepage
