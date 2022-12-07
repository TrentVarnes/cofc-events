/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

export default function ProductItem({ product, addToCartHandler }) {
  const [count, setCount] = useState(product.countInStock);

  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow"
          />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <a>
            <h2 className="text-lg text-black hover:text-red-800">
              {product.name}
            </h2>
          </a>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <button
          className="primary-button"
          type="button"
          onClick={() => {
            addToCartHandler(product);
            if (count > 0) setCount(count - 1);
          }}
        >
          Add to cart
        </button>
        <h2>Stock: {count}</h2>
      </div>
    </div>
  );
}
