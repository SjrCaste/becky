"use client"

import { Product, PRODUCTS } from "./data"

export const getStoredProducts = (): Product[] => {
  if (typeof window === 'undefined') return PRODUCTS
  
  const stored = localStorage.getItem('mock_products')
  if (stored) {
    try {
      return JSON.parse(stored)
    } catch (e) {
      return PRODUCTS
    }
  }
  
  // Initialize with default
  localStorage.setItem('mock_products', JSON.stringify(PRODUCTS))
  return PRODUCTS
}

export const saveProductToStore = (productData: Partial<Product>) => {
  if (typeof window === 'undefined') return
  
  const current = getStoredProducts()
  let updated = [...current]
  
  const existingIndex = current.findIndex(p => p.id === productData.id)
  
  if (existingIndex >= 0) {
    updated[existingIndex] = { ...current[existingIndex], ...productData } as Product
  } else {
    // New product
    const newProduct: Product = {
      id: productData.id || `product-${Date.now()}`,
      name: productData.name || "Nuevo Producto",
      category: (productData.category as any) || "novias",
      subCategory: productData.subCategory || "",
      description: productData.description || "",
      priceEstimate: productData.priceEstimate || "",
      colors: productData.colors || [],
      sizes: productData.sizes || [],
      styles: productData.styles || [],
      images: productData.images || [],
      features: productData.features || [],
      tags: productData.tags || [],
      isFeatured: productData.isFeatured || false,
    }
    updated = [newProduct, ...updated]
  }
  
  localStorage.setItem('mock_products', JSON.stringify(updated))
}

export const deleteProductFromStore = (id: string) => {
  if (typeof window === 'undefined') return
  const current = getStoredProducts()
  const updated = current.filter(p => p.id !== id)
  localStorage.setItem('mock_products', JSON.stringify(updated))
}
