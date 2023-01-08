import { Button, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import React from 'react'

const sigleMovie = ({movie}) => {
        // const router=useRouter()
      return (
      <>
      {/* <Button bg='red' onClick={()=>router.back()}>Go Back</Button> */}
        <Heading>movieSingle</Heading>
        {/* <h1>movie:{router.query.id}</h1> */}
        <Heading>{movie.title}</Heading>
        <Image width={500} height={500} src={movie.posterUrl} alt={movie.titile} srcset="" />
      </>
      )
    }
    export async function getStaticPaths(){
      let response =await fetch (`https://vercel-deploy-jade-one.vercel.app/movies`)
      let data=await response.json()
      return{
        paths:data.map((movie)=>({
          params:{id:movie.id.toString()}
        })),
        fallback:false
      }
    }
    export const  getStaticProps=async(context)=>{
        const {  params:{id}}=context
        let response=await fetch(`https://vercel-deploy-jade-one.vercel.app/movies/${id}`)
        let data=await response.json()
        // console.log(data)
        return{
            props:{
                movie:data
            }
        }
    }
    
  

export default sigleMovie
