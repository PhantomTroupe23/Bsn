'use client';

import { useState } from "react";
import { products } from "../product-data";
import Link from "next/link";

export default function cartPage(){
	const [cartIds] = useState(['123','345']);
	const cartProducts = cartIds.map(id => products.find(p => p.id == id)!);
	return (
		<>
		<div className="cart_card">


		{cartProducts.map(product =>
			<Link key={product.id} href={"/products/"+product.id}>
				<h3>{product.name}</h3>	
				<p>{product.price}</p>
			</Link>
		)}
		</div>
		<h1> Cart</h1>
		</>
	); 
}