import React, { useEffect, useState, forwardRef } from "react";
import CardPost from "./CardPost";
import { Grid, Box } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import { API_URL } from "../config";
 
const Posts = (props,ref) => {

	const [isLoading, setIsLoading] = useState(true);
	const [posts, setPosts] = useState(null);

	useEffect( () => {
		fetch(API_URL + '/api/projets?populate=*', {
		method: 'GET',
		headers: {
		'Accept': 'application/json',
		Authorization:
      	'Bearer 63985638d7071934fb55e345ec53b74444b81217cff9209b4fe8125df88faea68c94baeef9cd32e91e1ecafbe8ce9e20a5822e5d26371ab539d214b28d4575c6c97e4eabd6daff7d2c9fa470b9abf58e960474d0f1ad3c4d3e5c3c667d5661416c261dfc34a6d8b0f9c6d3ded65b7aec6b0488974696e2f5ec123a7dc2960818',
		},
		})
		.then(response => response.json())
		// .then(data =>{ console.log(data)
		.then(data => {
			setPosts(data.data)
			setIsLoading(false)	
		});
	},[])

  return (
   
    <div className="projects">  
     <h1 ref={ref} className="text-my-yellow text-2xl font-canvasBlack mt-4 mb-4 text-center lg:text-4xl font-canvasBlack fadeIn">Mes projets</h1>
	 <Grid container className="flex justify-center pt-6 " >
		{isLoading ?(
			<Box>
				<Skeleton variant="rectangular" width={210} height={118} />
				<Skeleton width="60%"/>
				<Skeleton/>
				<Skeleton/>
				<Skeleton/>
			</Box>
		) : posts.map( projet => <CardPost projet={projet} key={projet.id}/> )}

	 </Grid>
    </div>
  );
};

export default forwardRef(Posts);