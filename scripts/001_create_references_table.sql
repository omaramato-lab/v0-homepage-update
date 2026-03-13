-- Create references table for storing user testimonials
CREATE TABLE IF NOT EXISTS public.references (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  role TEXT,
  company TEXT,
  email TEXT,
  relationship TEXT,
  testimonial TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.references ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert references
CREATE POLICY "Allow public to insert references" ON public.references
  FOR INSERT
  WITH CHECK (true);

-- Allow anyone to read all references
CREATE POLICY "Allow public to read references" ON public.references
  FOR SELECT
  USING (true);

-- Allow deletion (for admin purposes, password protected in app)
CREATE POLICY "Allow deletion of references" ON public.references
  FOR DELETE
  USING (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS references_created_at_idx ON public.references(created_at DESC);
