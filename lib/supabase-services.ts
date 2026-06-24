import { supabase } from './supabase'
import { Product, Testimonial, TimelineEvent, HomeSetting, Banner, Category, Fabric } from './data'

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

// ---------------- HOME SETTINGS ----------------

export const getHomeSettings = async (): Promise<HomeSetting | null> => {
  const { data, error } = await supabase
    .from('home_settings')
    .select('*')
    .eq('id', 1)
    .single()
    
  if (error) {
    console.error('Error fetching home settings:', error)
    return null
  }
  return data as HomeSetting
}

export const updateHomeSettings = async (settingsData: Partial<HomeSetting>): Promise<HomeSetting | null> => {
  const { data, error } = await supabase
    .from('home_settings')
    .update(settingsData)
    .eq('id', 1)
    .select()
    .single()

  if (error) {
    console.error('Error updating home settings:', error)
    return null
  }
  
  return data as HomeSetting
}

// ---------------- BANNERS ----------------

export const getBanners = async (activeOnly = false): Promise<Banner[]> => {
  let query = supabase
    .from('banners')
    .select('*')
    .order('sort_order', { ascending: true })
    
  if (activeOnly) {
    query = query.eq('is_active', true)
  }

  const { data, error } = await query
    
  if (error) {
    console.error('Error fetching banners:', error)
    return []
  }
  return data as Banner[]
}

export const createBanner = async (bannerData: Partial<Banner>): Promise<Banner | null> => {
  const newBanner = {
    id: bannerData.id || `banner-${Date.now()}`,
    title: bannerData.title || "Nuevo Banner",
    image: bannerData.image || "",
    link_url: bannerData.link_url || "",
    is_active: bannerData.is_active !== undefined ? bannerData.is_active : true,
    sort_order: bannerData.sort_order || 0,
  }

  const { data, error } = await supabase
    .from('banners')
    .insert([newBanner])
    .select()
    .single()

  if (error) {
    console.error('Error creating banner:', error)
    return null
  }
  
  return data as Banner
}

export const updateBanner = async (id: string, bannerData: Partial<Banner>): Promise<Banner | null> => {
  const { data, error } = await supabase
    .from('banners')
    .update(bannerData)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error('Error updating banner:', error)
    return null
  }
  
  return data as Banner
}

export const deleteBanner = async (id: string): Promise<boolean> => {
  const { error } = await supabase
    .from('banners')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting banner:', error)
    return false
  }
  
  return true
}

// ---------------- CATEGORIES ----------------

export const getCategories = async (): Promise<Category[]> => {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('slug', { ascending: true })

  if (error) {
    console.error('Error fetching categories:', error)
    return []
  }
  return data as Category[]
}

export const createCategory = async (categoryData: Partial<Category>): Promise<Category | null> => {
  const { data, error } = await supabase
    .from('categories')
    .insert([categoryData])
    .select()
    .single()

  if (error) {
    console.error('Error creating category:', error)
    return null
  }
  return data as Category
}

export const updateCategory = async (slug: string, categoryData: Partial<Category>): Promise<Category | null> => {
  const { data, error } = await supabase
    .from('categories')
    .update(categoryData)
    .eq('slug', slug)
    .select()
    .single()

  if (error) {
    console.error('Error updating category:', error)
    return null
  }
  return data as Category
}

export const deleteCategory = async (slug: string): Promise<boolean> => {
  const { error } = await supabase
    .from('categories')
    .delete()
    .eq('slug', slug)

  if (error) {
    console.error('Error deleting category:', error)
    return false
  }
  return true
}

// ---------------- FABRICS (GALLERIES) ----------------

export const getFabrics = async (): Promise<Fabric[]> => {
  const { data, error } = await supabase
    .from('fabrics')
    .select('*')
    .order('id', { ascending: true })

  if (error) {
    console.error('Error fetching fabrics:', error)
    return []
  }
  return data as Fabric[]
}

export const createFabric = async (fabricData: Partial<Fabric>): Promise<Fabric | null> => {
  const newFabric = {
    ...fabricData,
    id: fabricData.id || `fabric-${Date.now()}`
  }
  const { data, error } = await supabase
    .from('fabrics')
    .insert([newFabric])
    .select()
    .single()

  if (error) {
    console.error('Error creating fabric:', error)
    return null
  }
  return data as Fabric
}

export const updateFabric = async (id: string, fabricData: Partial<Fabric>): Promise<Fabric | null> => {
  const { data, error } = await supabase
    .from('fabrics')
    .update(fabricData)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error('Error updating fabric:', error)
    return null
  }
  return data as Fabric
}

export const deleteFabric = async (id: string): Promise<boolean> => {
  const { error } = await supabase
    .from('fabrics')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting fabric:', error)
    return false
  }
  return true
}
