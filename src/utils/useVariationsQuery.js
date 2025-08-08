import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "./supabaseClient";

// 🔹 1. Fetch all products
const fetchVariations = async () => {
  const { data, error } = await supabase.from("variations").select(`
    id,
    title,
    description,
    supplier_showcase_price,
    variant_images (
      id,
      zoom_url
    )
  `);

  if (error) throw new Error(error.message);
  return data;
};

export const useVariationsQuery = () => {
  return useQuery({
    queryKey: ["variations"],
    queryFn: fetchVariations,
  });
};

// 🔹 2. Fetch single product by ID
const fetchSingleVariation = async (id) => {
  const { data, error } = await supabase
    .from("variations")
    .select(
      `
      id,
      title,
      description,
      supplier_showcase_price,
      variant_images (
        id,
        zoom_url
      )
    `,
    )
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);
  return data;
};

export const useSingleVariationQuery = (id) => {
  return useQuery({
    queryKey: ["variation", id],
    queryFn: () => fetchSingleVariation(id),
    enabled: !!id, // prevents query from running if id is undefined
  });
};

const fetchDummies = async () => {
  const { data, error } = await supabase.from("dummies").select("*");
  if (error) throw new Error(error.message);
  return data;
};

export const useDummiesQuery = () => {
  return useQuery({
    queryKey: ["dummies"],
    queryFn: fetchDummies,
  });
};

const createDummy = async (newDummy) => {
  const { data, error } = await supabase
    .from("dummies")
    .insert([newDummy])
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
};

export const useCreateDummyMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createDummy,
    onSuccess: () => {
      // After creating dummy, refresh dummy list queries
      queryClient.invalidateQueries({ queryKey: ["dummies"] });
    },
  });
};
