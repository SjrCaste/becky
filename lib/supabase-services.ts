import { supabase } from './supabase'
import { Product, Testimonial, TimelineEvent } from './data'

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

// ---------------- TESTIMONIALS ----------------

export const getTestimonials = async (): Promise<Testimonial[]> => {
  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .order('created_at', { ascending: false })
    
  if (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
  return data as Testimonial[]
}

export const createTestimonial = async (testimonialData: Partial<Testimonial>): Promise<Testimonial | null> => {
  const newTestimonial = {
    id: testimonialData.id || `test-${Date.now()}`,
    name: testimonialData.name || "Nuevo Testimonio",
    role: testimonialData.role || "",
    quote: testimonialData.quote || "",
    image: testimonialData.image || "",
    date: testimonialData.date || "",
  }

  const { data, error } = await supabase
    .from('testimonials')
    .insert([newTestimonial])
    .select()
    .single()

  if (error) {
    console.error('Error creating testimonial:', error)
    return null
  }
  
  return data as Testimonial
}

export const updateTestimonial = async (id: string, testimonialData: Partial<Testimonial>): Promise<Testimonial | null> => {
  const { data, error } = await supabase
    .from('testimonials')
    .update(testimonialData)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error('Error updating testimonial:', error)
    return null
  }
  
  return data as Testimonial
}

export const deleteTestimonial = async (id: string): Promise<boolean> => {
  const { error } = await supabase
    .from('testimonials')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting testimonial:', error)
    return false
  }
  
  return true
}

// ---------------- TIMELINE EVENTS (SOBRE NOSOTROS) ----------------

export const getTimelineEvents = async (): Promise<TimelineEvent[]> => {
  const { data, error } = await supabase
    .from('timeline_events')
    .select('*')
    .order('year', { ascending: true }) // chronological order
    
  if (error) {
    console.error('Error fetching timeline events:', error)
    return []
  }
  return data as TimelineEvent[]
}

export const createTimelineEvent = async (eventData: Partial<TimelineEvent>): Promise<TimelineEvent | null> => {
  // Omit id so Supabase generates the UUID automatically if not provided
  const newEvent: any = {
    year: eventData.year || new Date().getFullYear().toString(),
    title: eventData.title || "Nuevo Evento",
    description: eventData.description || "",
    image: eventData.image || "",
  }
  if (eventData.id) newEvent.id = eventData.id;

  const { data, error } = await supabase
    .from('timeline_events')
    .insert([newEvent])
    .select()
    .single()

  if (error) {
    console.error('Error creating timeline event:', error)
    return null
  }
  
  return data as TimelineEvent
}

export const updateTimelineEvent = async (id: string, eventData: Partial<TimelineEvent>): Promise<TimelineEvent | null> => {
  const { data, error } = await supabase
    .from('timeline_events')
    .update(eventData)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error('Error updating timeline event:', error)
    return null
  }
  
  return data as TimelineEvent
}

export const deleteTimelineEvent = async (id: string): Promise<boolean> => {
  const { error } = await supabase
    .from('timeline_events')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting timeline event:', error)
    return false
  }
  
  return true
}
