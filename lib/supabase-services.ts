import { supabase } from './supabase'
import { Product } from './data'

export const getProducts = async (): Promise<Product[]> => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false })
    
  if (error) {
    console.error('Error fetching products:', error)
    return []
  }
  return data as Product[]
}

export const getProductById = async (id: string): Promise<Product | null> => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single()
    
  if (error) {
    console.error('Error fetching product by id:', error)
    return null
  }
  return data as Product
}

export const createProduct = async (productData: Partial<Product>): Promise<Product | null> => {
  const newProduct = {
    id: productData.id || `product-${Date.now()}`,
    name: productData.name || "Nuevo Producto",
    category: productData.category || "novias",
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

  const { data, error } = await supabase
    .from('products')
    .insert([newProduct])
    .select()
    .single()

  if (error) {
    console.error('Error creating product:', error)
    return null
  }
  
  return data as Product
}

export const updateProduct = async (id: string, productData: Partial<Product>): Promise<Product | null> => {
  const { data, error } = await supabase
    .from('products')
    .update(productData)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error('Error updating product:', error)
    return null
  }
  
  return data as Product
}

export const deleteProduct = async (id: string): Promise<boolean> => {
  const { error } = await supabase
    .from('products')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting product:', error)
    return false
  }
  
  return true
}
